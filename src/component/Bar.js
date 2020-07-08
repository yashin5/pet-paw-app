import React, {useState} from 'react'
import {View, Text, Dimensions} from 'react-native'

const width = Dimensions.get('window').width;


export default function Bar(props){
    return(
        <View style={{ 
            width: width, backgroundColor: '#29AAE1', height: props.height? props.height : 95}}
        >
            <View style={props.style? props.style : {flexDirection: "row", justifyContent: "space-between", marginTop: 45}}>
                <props.left />
                {typeof(props.center) === "string"? <Text style={textStyle}>{props.center}</Text> : <props.center/>} 
                {props.right? <props.right />:<Text style={spanTag}> </Text>}
            </View>

        </View>
    );
};

const textStyle = {color: "white", fontWeight: "bold", fontSize: 20}
const spanTag = {width: 28, height: 30, marginRight: 20}