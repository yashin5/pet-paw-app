import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import Bar from '../component/Bar'
import GoBackIcon from '../component/GoBackIcon'
import ModalWithOptions from '../component/ModalWithOptions';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;

export default function NewPetScreen(props){
  const [drawer, setDrawer] = useState(null);
  const [modalVisible1, setModalVisible1] = useState(null);
  const [modalVisible2, setModalVisible2] = useState(null);
  const [optionsToModal, setOptionsToModal] = useState([]);
  const [optionsToModal2, setOptionsToModal2] = useState([]);
  const [name, setName] = useState(null);
  const [race, setRace] = useState(null);
  const [species, setSpecies] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)
  const [weight, setWeight] = useState(null);
  const [castrated, setCastrated] = useState(null);
  const [castratedDate, setCastratedDate] = useState(null)
  const [female, setFemale] = useState(null);
  const [male, setMale] = useState(null);
  const [notes, setNotes] = useState(null);

  const setDateEvent = (event, dateValue) => {
    dateValue = dateValue || date;
    const year = dateValue.getFullYear();
    const day = dateValue.getDate();
    const month = dateValue.getMonth() + 1;

    setShow(Platform.OS === 'ios' ? true : false);
    setDate(dateValue);
    setBirthDate(`${day}/${month}/${year}`)
  };
  const datePicker = () => {
    setShow('date');
    setMode(mode);
  };


    const goBack = () => {props.navigation.goBack()}
    const openDrawer = () => drawer.openDrawer();
    const goTo = () => props.navigation.navigate("PetsScreen", {screen: "PetsScreen"})

    useEffect(() => {  
      BackHandler.addEventListener("hardwareBackPress", goBack);
  
      return () =>
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    }, []);

    const fillModalWith = (fieldName) => {
        if(fieldName === "race"){
            // Make request to get options here
            setOptionsToModal2(["Buldogue francês", "Pastor Alemão", "Boiadeiro de berna", "Cavalier king charles spaniel", "Cão de crista chinês", "Border coile", "Vira-lata"]);
            setModalVisible2(true);

        };
        if(fieldName === "species"){
    
        // Make request to get options here
            setOptionsToModal(["Cachorro", "Gato"]);
            setModalVisible1(true);

        };
        return
    };
    
    const verifyLenghFromOption = (fieldOption) => {
        if(fieldOption.length >= 25){
            return {maxWidth: "80%", paddingLeft: width/40, marginTop: 4, fontSize: 10, color: "#629DB9"}        
        }
        if(fieldOption.length >= 20){
            return {maxWidth: "80%", paddingLeft: width/40, fontSize: 13, color: "#629DB9"}        
        }
        if(fieldOption.length >= 16){
            return {paddingLeft: width/40, marginTop: 7, fontSize: 13, color: "#629DB9"}        
        }
        return {paddingLeft: width/40, marginTop: 5, fontSize: 17, color: "#629DB9"}        
    }
    const createFields1 = [
            {
                name: "species",
                value: species? species : "espécie",
                icon: require("../img/vIcon.png"),
                widthView: width/2.35,
                widthView2: width/2.5,
                widthText: width/5,
                marginLeftText: width/13,
            },
            {
                name: "race",
                value: race? race : "raça",
                icon: require("../img/vIcon.png"),
                widthView: width/2.35,
                widthView2: width/2.5,
                widthText: width/5,
                marginLeftText: width/8,
            },
    ]
    return(
        <View style={{flex: 1}}>
            <Bar center={"Novo Pet"} left={() => <GoBackIcon callFunc={goBack} />}  />
            <ScrollView >
                <ModalWithOptions options={optionsToModal} optFunc={setSpecies} modalVisible={modalVisible1} setModalVisible={setModalVisible1} />
                <ModalWithOptions options={optionsToModal2} optFunc={setRace} modalVisible={modalVisible2} setModalVisible={setModalVisible2} />
                <View style={container}>
                    <View style={{alignItems: "center"}}>
                        <View style={containerPetStyle}>
                            <Image style={petImageStyle} source={require("../img/petIcon.jpg")} />
                        </View>
                        <View style={containerPetNameStyle}>
                            <TextInput onChangeText={setName} placeholderTextColor={"#AEE4F8"} style={petNameStyle} placeholder="Nome"/>
                        </View>
                    </View>
                 
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
                    {createFields1.map((field, index) => (
                        <TouchableOpacity key={field.value} field={field.name} style={{
                                justifyContent: "space-between",
                                width: field.widthView, height: 37, borderWidth: 2,borderRadius: 20, borderColor: "#206D96",
                        }} key={index} onPress={() => fillModalWith(field.name)}>
                            <View style={{  
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignSelf: "center",
                                alignContent: "center",
                                width: field.widthView2,}}>
                                <Text style={field.value !== "espécie" && field.value !== "raça"?
                                    verifyLenghFromOption(field.value)
                                    :{marginLeft: field.marginLeftText, marginTop: 2, fontSize: 20, color: "#A6C2D4"}}>{field.value}</Text>
                                <View style={{width: width/20}}>
                                    <Image style={{marginTop: 5, width: 15, height: 15}} source={field.icon} />   
                                </View>
                            </View>
                        </TouchableOpacity>

                    ))}   
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
          <TouchableOpacity onPress={datePicker}>
            <View style={{ width: width/2.35, borderWidth: 2, height: 37,
                                alignItems: "center", 
                                borderRadius: 20, borderColor: "#206D96"}}>
                                <View style={{width: width/2.9, flexDirection: "row", justifyContent: "space-between"}}>

              <Text style={birthDate ? { marginTop: 5, fontSize: 17, color: "#629DB9"} : {marginTop: 1, fontSize: 20, color: "#A6C2D4"}}>
                {birthDate ? birthDate : "nascimento"}
              </Text>
              <Image style={{marginLeft: birthDate? width/10.6 : width/33, marginTop: 5, width: 15, height: 15}} source={require("../img/vIcon.png")} />   

              </View>
            </View>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={setDateEvent}
            />
          )}


                        {/* # */}
                        <Image style={{marginTop: 5, width: 25, height: 25}} source={require("../img/calendarIcon.png")} />   
                        <View style={{ width: width/3.2, borderWidth: 2, height: 37,
                            alignItems: "center", 
                            borderRadius: 20, borderColor: "#206D96"}}>
                                <TextInput placeholder={"peso"} placeholderTextColor={"#A6C2D4"}
                                    style={{marginTop: 1,fontSize: 20, color: "#A6C2D4"}}
                                />
                        </View>
                    </View>
                    {/* ## */}
                    <View style={{width: width- 40, flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <TouchableOpacity>
                                <View style={{ width: width/12, borderWidth: 2, height: 30,
                                    alignItems: "center", 
                                    borderRadius: 20, borderColor: "#206D96"}}>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10, fontSize: 20, color: "#A6C2D4"}}>Castrado</Text>
                        </View>
                        <View style={containerCastratedDate}>
                            <TextInput onChangeText={setName} placeholderTextColor={"#AEE4F8"} style={petNameStyle} placeholder="Data"/>
                        </View>
                    </View>
                    <View style={{width: width/1.39, flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <TouchableOpacity>
                                <View style={{ width: width/12, borderWidth: 2, height: 30,
                                    alignItems: "center", 
                                    borderRadius: 20, borderColor: "#206D96"}}>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10, fontSize: 20, color: "#A6C2D4"}}>Fêmea</Text>
                        </View>
                        <View style={{width: width/3.9,  flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <TouchableOpacity>
                                <View style={{ backGroundColor: "red", width: width/12, borderWidth: 2, height: 30,
                                    alignItems: "center", 
                                    borderRadius: 20, borderColor: "#206D96"}}>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10, fontSize: 20, color: "#A6C2D4"}}>Macho</Text>
                        </View>
                    </View>
                    <View style={notesStyle}>
                            <TextInput onChangeText={setName} placeholderTextColor={"#AEE4F8"} style={petNameStyle} placeholder="Notas"/>
                        </View>
                </View>
                <TouchableOpacity  style={{alignItems: "center"}}>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, backgroundColor: "#E5455A", width: 140, height: 40, marginTop: 10}}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "white"}}>Pronto!</Text>

                    </View>
                </TouchableOpacity> 
            </ScrollView>
      </View >
      );   
};

const container = {alignSelf: "center"}
const containerPetStyle = {alignItems: "center", justifyContent: "center"}
const petImageStyle = {marginTop: 20, width: width-40, height: 150}
const petNameStyle = {top: 2, fontSize: 24,  color: "#AEE4F8"}
const containerPetNameStyle = {marginTop: 5, width: width- 80,  alignItems: "center", borderBottomColor: "#206D96", borderBottomWidth: 2};
const containerCastratedDate = { width: width/2.35, alignItems: "center", borderBottomColor: "#206D96", borderBottomWidth: 2};
const notesStyle= {width: width- 40, alignItems: "flex-start", marginTop: 5, borderBottomColor: "#206D96", borderBottomWidth: 2};