import React from 'react'
import {Image} from 'react-native'

export default function ImageHeader(){
    return (
        <Image style={{marginTop: 25, marginTop: 40, width: 120, height: 70}}
        source={require("../img/petPawName.png")} 
      />
  )
}