import React, {useState} from 'react'
import {View, Text, Modal, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ModalWithOptions(props){
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => props.setModalVisible(false)} 
              style={{width: width/1.13, marginTop: 13}}
            >
              <Image style={{alignSelf: "flex-start", width: 20, height: 20}} source={(require("../img/xIcon.png"))} />
            </TouchableOpacity>
            <View>
            {props.options.map((field, index) => (
              <TouchableOpacity onPress={() => {props.setModalVisible(false); props.optFunc? props.optFunc(field): null}}
                style={index != 0? styles.containerOptionsStyleWithMargin : styles.containerOptionsStyle}>
                <Text style={styles.optionsStyle}>{field}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  containerOptionsStyle: {marginTop: 20, width: width-40, borderBottomWidth: 1, borderBottomColor: "#E3E4E4"},
  containerOptionsStyleWithMargin: {width: width-40, borderBottomWidth: 1, borderBottomColor: "#E3E4E4", marginTop: 10},
  optionsStyle: {
    fontSize: 20, color: "#629DB9", marginBottom: 5
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 30,
      width: width,
      height: height,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });