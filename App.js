/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';
import CreateAccountScreen from './src/screen/CreateAccountScreen';
import Home from './src/screen/Home';

const Stack = createStackNavigator();
const imageHeader = (
  <Image style={{marginTop: 25,   width: 120, height: 70}}
    source={require("./src/img/petPawName.png")} 
  />)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerTitleAlign: "center",
        headerStyle:{backgroundColor: '#29AAE1', height: 95}}} initialRouteName="LoginScreen"
      >
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
          headerShown: false}}
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="Home" options={{
          headerLeft: null,
          headerTitle: props => imageHeader
        }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
