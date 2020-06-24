import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;

class InputField extends Component {
  constructor() {
    super();
    this.state = {birthDate: null, date: new Date(), mode: 'date', show: false};
  }

  birthDate = birthDate => {
    this.setState({birthDate});
  };

  setDate = (event, date) => {
    date = date || this.state.date;
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
      birthDate: `${day}/${month}/${year}`,
    });
  };

  show = mode => {
    this.setState({show: true, mode});
  };

  datePicker = () => {
    this.show('date');
  };

  inputType = field => {
    const {date, mode, show, birthDate} = this.state;
    if (field.type === 'date') {
      return (
        <>
          <TouchableNativeFeedback onPress={this.datePicker}>
            <View style={field.container}>
              <Text style={birthDate ? field.style : styles.textFromDateInput}>
                {birthDate ? birthDate : field.placeholder}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.birthDateButton}>{field.button}</View>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={this.setDate}
            />
          )}
        </>
      );
    }
    return (
      <>
        <TextInput
          placeholder={field.placeholder}
          placeholderTextColor={field.placeholderTextColor}
          onChangeText={field.onChangeText}
          value={field.value}
          style={field.style}
          secureTextEntry={field.secureTextEntry}
        />
        {field.button}
      </>
    );
  };

  render() {
    return this.props.fields.map(field => (
      <View key={field.placeholder} style={field.container}>
        {this.inputType(field)}
      </View>
    ));
  }
}

export default InputField;

const styles = StyleSheet.create({
  birthDateContainer: {
    width: width + 100,
    paddingRight: 200,
    flexDirection: 'row',
  },
  textFromDateInput: {
    color: '#A9DBF2',
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 4,
    letterSpacing: 2
  },
  birthDateButton: {
    marginLeft: width - 450,
  },
});
