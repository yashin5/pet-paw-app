import React, {useState} from 'react'
import {View, Text, Dimensions} from 'react-native'

const width = Dimensions.get('window').width;


export default function HeaderBar(props){
    return(
        <View style={{flexDirection: "row", justifyContent: "space-between", 
            width: width, backgroundColor: '#29AAE1', height: 95}}
        >
            <props.left />
            <props.center />
            <props.right />
        </View>
    )
}