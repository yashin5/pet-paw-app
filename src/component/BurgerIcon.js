import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

export default function BurguerIcon(props){
    return (
        <TouchableOpacity onPress={props.callFunc}>
            <Image style={{width: 28, height: 20, marginTop: 45, marginLeft: 20}}
                source={require("../img/iconSide.png")} 
            />
        </TouchableOpacity>
  )
}