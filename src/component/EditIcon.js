import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

export default function EditIcon(props){
    return (
        <TouchableOpacity onPress={props.callFunc}>
            <Image style={{width: 28, height: 30, marginLeft: 20}}
                source={require("../img/iconEdit.png")} 
            />
        </TouchableOpacity>
  )
}