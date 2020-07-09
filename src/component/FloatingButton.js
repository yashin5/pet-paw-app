//This is an example code for React Native Floating Action Button//
import React from 'react';
//import react in our code.

import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import all the components we are going to use.

export default function FloatingButton(props){
    const clickHandler = () => {
        Alert.alert('Floating Button Clicked');
      };

    return (

        <TouchableOpacity
        onPress={props.callFunc}
          activeOpacity={0.7}
          style={styles.TouchableOpacityStyle}>
          <Image
            source={props.icon}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
