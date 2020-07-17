import React, {useState} from 'react';
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

export default function InputField(props){
  const [birthDate, setBirthDate] = useState(null)
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)

  const setDateEvent = (event, dateValue) => {
    dateValue = dateValue || date;
    const year = dateValue.getFullYear();
    const day = dateValue.getDate();
    const month = dateValue.getMonth() + 1;

    setShow(Platform.OS === 'ios' ? true : false);
    setDate(dateValue);
    setBirthDate(`${day}/${month}/${year}`)
  };
  const datePicker = () => {
    setShow('date');
    setMode(mode);
  };
  const inputType = field => {
    if (field.type === 'date') {
      return (
        <>
          <TouchableNativeFeedback onPress={datePicker}>
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
              onChange={setDateEvent}
            />
          )}
        </>
      );
    };
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

    return props.fields.map(field => (
      <View key={field.placeholder} style={field.container}>
        {inputType(field)}
      </View>
    ));
  };

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