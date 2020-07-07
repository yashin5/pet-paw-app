import React from 'react'
import {Image, TouchableOpacity} from 'react-native'

export default function SearchIcon(props){
    return (
        <TouchableOpacity onPress={props.callFunc}>
            <Image style={{width: 28, height: 30, marginRight: 20}}
                source={require("../img/iconSearch.png")} 
            />
        </TouchableOpacity>
  )
}