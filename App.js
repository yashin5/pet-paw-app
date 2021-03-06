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
import PetsScreen from './src/screen/PetsScreen';
import Pet from './src/screen/Pet';
import NewPetScreen from './src/screen/NewPetScreen';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator  headerMode={"none"} initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          name="Account" component={AccountScreen} 
        />
        <Stack.Screen 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          name="Pets" component={PetsScreen} 
        />
        <Stack.Screen 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          name="Pet" component={Pet} 
        />
        <Stack.Screen 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          name="NewPet" component={NewPetScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
