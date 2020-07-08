/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';
import CreateAccountScreen from './src/screen/CreateAccountScreen';
import HomeScreen from './src/screen/HomeScreen';
import AccountScreen from './src/screen/AccountScreen';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode={"none"} initialRouteName="LoginScreen">
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          name="Account" component={AccountScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
