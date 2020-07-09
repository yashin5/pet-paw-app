import React, {useState, Fragment} from 'react'
import {Image, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'

const width = Dimensions.get('window').width;

export default function ButtonList(props){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {props.buttons.map(button => (
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate(button.route)} key={button.name}>
                        <View style={logoContainer}>
                            <Image style={button.logoStyle} source={button.image}/>
                            <Text style={button.nameStyle}>{button.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
        logoContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
});

const logoContainer = {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
};