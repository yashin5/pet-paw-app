// 1
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import StatusBarApp from '../component/StatusBarApp';
import InputField from '../component/InputField';

const width = Dimensions.get('window').width;

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {email: null, password: null};
  }

  email = email => {
    this.setState({email});
  };

  password = password => {
    this.setState({password});
  };

  goToCreateAccountScreen = event => {
    this.props.navigation.navigate('CreateAccountScreen');
  };

  login = event => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <SafeAreaView style={styles.body}>
        <StatusBarApp />

        <ScrollView>
          <View>
            <View style={styles.titleContainer}>
              <Image style={styles.logoImage} source={require('../img/logo.png')} />
            </View>
            <View style={styles.inputsContainer}>
            <InputField
              fields={[
                {
                  container: styles.containerInputStyle,
                  placeholder: 'Email',
                  placeholderTextColor: '#A9DBF2',
                  onChangeText: this.name,
                  value: this.state.name,
                  style: styles.inputStyle,
                },
                {
                  container: styles.containerInputStyle,
                  placeholder: 'Senha',
                  placeholderTextColor: '#A9DBF2',
                  value: this.state.password,
                  onChangeText: this.password,
                  style: styles.inputPasswordStyle,
                  secureTextEntry: true,
                  button: (
                    <TouchableNativeFeedback onPress={this.login}>
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
              <Text style={styles.borderBaseText}>ou</Text>
              <View style={styles.borderBase} />
            </View>
            <View style={styles.facebookSymbolBaseContainer}>
              <View style={styles.facebookSymbolContainer}>
                <Text style={styles.facebookSymbol}>f</Text>
              </View>
              <Text style={styles.facebookSymbolText}>Entre com Facebook</Text>
            </View>
            <TouchableNativeFeedback onPress={this.goToCreateAccountScreen}>
              <View style={styles.registerContainer}>
                <Text style={styles.registerContainerText}>
                  Não é cadastrado? Cadastre-se aqui!
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0D94C4',
  },
  logoImage:{
    width: 160,
    height: 210
  },
  titleContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 50,
    color: 'white',
  },
  inputsContainer: {
    marginTop: 15,

  },
  containerInputStyle: {
    marginTop: 4,
    paddingBottom: 2,
    width: width / 1.3,
    height: 40,
    backgroundColor: '#29AAE1',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    marginLeft: 15,
    marginRight: 11,
    width: width - 115,
    color: 'white',
    fontSize: 15,
    letterSpacing: 2,
  },
  inputPasswordStyle: {
    marginLeft: 15,
    marginRight: 11,
    width: width - 165,
    color: 'white',
    fontSize: 15,
    letterSpacing: 2,
  },
  loginButtonStyle: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginTop: 2
  },
  loginButtonTextStyle: {
    fontSize: 40,
    marginBottom: 5,
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
