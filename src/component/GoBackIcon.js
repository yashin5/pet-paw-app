import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

export default function GoBackIcon(props){
    return (
        <TouchableOpacity onPress={props.callFunc}>
            <Image style={{width: 15, height: 30, marginLeft: 20}}
                source={require("../img/iconGoBack.png")} 
            />
        </TouchableOpacity>
  )
}