import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  BackHandler,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import StatusBarApp from '../component/StatusBarApp';
import InputField from '../component/InputField';

const width = Dimensions.get('window').width;

export default function CreateAccountScreen(props) {
  const {name, setName} = useState(null)
  const {lastName, setLastName} = useState(null)
  const {email, setEmail} = useState(null)
  const {password, setPassword} = useState(null)
  const {birthDate, setBirthDate} = useState(null)

  

  const createUser = event => {
    props.navigation.navigate('Home');
  };

    return (
      <SafeAreaView style={styles.body}>
        <StatusBarApp />
        <ScrollView>
          <View style={styles.titleContainer}>
          <Image style={styles.upImage} source={require('../img/upImage.png')} />
            <View style={styles.inputsContainer}>
              <InputField
                fields={[
                  {
                    container: styles.containerInputStyle,
                    placeholder: 'Nome',
                    value: name,
                    placeholderTextColor: '#A9DBF2',
                    onChangeText: setName,
                    style: styles.inputStyle,
                  },
                  {
                    container: styles.containerInputStyle,
                    placeholder: 'Sobrenome',
                    value: lastName,
                    placeholderTextColor: '#A9DBF2',
                    onChangeText: setLastName,
                    style: styles.inputStyle,
                  },
                  {
                    container: styles.containerInputStyle,
                    placeholder: 'E-mail',
                    value: email,
                    placeholderTextColor: '#A9DBF2',
                    onChangeText: setEmail,
                    style: styles.inputStyle,
                  },
                  {
                    container: styles.containerInputStyle,
                    placeholder: 'Senha',
                    value: password,
                    placeholderTextColor: '#A9DBF2',
                    onChangeText: setPassword,
                    style: styles.inputStyle,
                    secureTextEntry: true,
                  },
                  {
                    container: styles.BirthDateInputStyleContainer,
                    placeholder: 'Data de nascimento',
                    placeholderTextColor: '#A9DBF2',
                    value: birthDate,
                    type: 'date',
                    onChangeText: setBirthDate,
                    style: styles.inputBirthDateStyle,
                    button: (
                      <TouchableNativeFeedback onPress={createUser}>
                        <View style={styles.loginButtonStyle}>
                          <Text style={styles.loginButtonTextStyle}>></Text>
                        </View>
                      </TouchableNativeFeedback>
                    ),
                  },
                ]}
              />
            </View>
            <View style={styles.borderBaseContainer}>
              <View style={styles.borderBase} />
              <Text style={styles.borderBaseText}>Ou</Text>
              <View style={styles.borderBase} />
            </View>
            <View style={styles.facebookSymbolBaseContainer}>
              <View style={styles.facebookSymbolContainer}>
                <Text style={styles.facebookSymbol}>f</Text>
              </View>
              <Text style={styles.facebookSymbolText}>Entre com Facebook</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0D94C4',
  },
  inputsContainer: {
    width: width - 77,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  containerInputStyle: {
    marginTop: 10,
    paddingBottom: 2,
    width: width - 222,
    height: 40,
    backgroundColor: '#29AAE1',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  upImage:{
    width: 110,
    height: 110
  },
  inputStyle: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 11,
    width: width - 250,
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
  },
  BirthDateInputStyleContainer: {
    marginTop: 10,
    paddingBottom: 2,
    width: width / 1.23,
    height: 40,
    backgroundColor: '#29AAE1',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputBirthDateStyle: {
    marginLeft: 15,
    marginRight: 11,
    width: width / 1.3,
    color: 'white',
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 4,
  },
  loginButtonStyle: {
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 48
  },
  loginButtonTextStyle: {
    fontSize: 40,
    marginBottom: 6,
    color: '#7DC8EB',
  },
  borderBaseContainer: {
    width: width - 100,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  borderBase: {
    borderBottomWidth: 2,
    flex: 1,
    borderBottomColor: 'white',
  },
  borderBaseText: {
    marginLeft: 10,
    marginRight: 10,
    letterSpacing: 2,
    color: 'white',
    fontSize: 16,
  },
  facebookSymbolBaseContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  facebookSymbolContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 22,
    borderRadius: 100,
  },
  facebookSymbol: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#0D94C4',
    fontSize: 15,
  },
  facebookSymbolText: {
    fontSize: 15,
    letterSpacing: 2,
    color: 'white',
    marginLeft: 5,
  },
  registerContainer: {
    marginTop: 75,
    alignSelf: 'center',
  },
  registerContainerText: {
    letterSpacing: 2,
    fontSize: 15,
    color: 'white',
  },
});
