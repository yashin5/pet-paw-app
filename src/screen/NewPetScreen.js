import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import Bar from '../component/Bar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import GoBackIcon from '../component/GoBackIcon'
import EditIcon from '../component/EditIcon'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import ModalWithOptions from '../component/ModalWithOptions';
import FloatingButton from '../component/FloatingButton';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;

export default function NewPetScreen(props){
  const [drawer, setDrawer] = useState(null);
  const [modalVisible1, setModalVisible1] = useState(null);
  const [modalVisible2, setModalVisible2] = useState(null);
  const [optionsToModal, setOptionsToModal] = useState([]);
  const [optionsToModal2, setOptionsToModal2] = useState([]);
  const [optFunc, setOptFunc] = useState(null);
  const [edit, setEdit] = useState(null);
  const [race, setRace] = useState(null);
  const [species, setSpecies] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [weight, setWeight] = useState(null);
  const [castrated, setCastrated] = useState(null);
  const [castratedDate, setCastratedDate] = useState(null)
  const [female, setFemale] = useState(null);
  const [male, setMale] = useState(null);
  const [notes, setNotes] = useState(null);



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
            <Bar center={"Novo Pet"} left={() => <GoBackIcon callFunc={goBack} />} right={SearchIcon} />
            <ScrollView >
                <ModalWithOptions options={optionsToModal} optFunc={setSpecies} modalVisible={modalVisible1} setModalVisible={setModalVisible1} />
                <ModalWithOptions options={optionsToModal2} optFunc={setRace} modalVisible={modalVisible2} setModalVisible={setModalVisible2} />
                <View style={container}>
                    <View style={{alignItems: "center"}}>
                        <View style={containerPetStyle}>
                            <Image style={petImageStyle} source={require("../img/petIcon.jpg")} />
                        </View>
                        <View style={containerPetNameStyle}>
                            <TextInput placeholderTextColor={"#AEE4F8"} style={petNameStyle} placeholder="Nome"/>
                        </View>
                    </View>
                 
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 20, justifyContent: "space-between"}}>
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
                                    :{marginLeft: field.marginLeftText, fontSize: 20, color: "#A6C2D4"}}>{field.value}</Text>
                                <View style={{width: width/20}}>
                                    <Image style={{marginTop: 5, width: 15, height: 15}} source={field.icon} />   
                                </View>
                            </View>
                        </TouchableOpacity>

                    ))}   
                    </View>
               
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
                        <TouchableOpacity>
                            <View style={{ width: width/2.35, borderWidth: 2, height: 37,
                                alignItems: "center", 
                                borderRadius: 20, borderColor: "#206D96"}}>
                                <View style={{width: width/2.9, flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 20, color: "#A6C2D4"}}>nascimento</Text>
                                <Image style={{marginLeft: width/34, marginTop: 5, width: 15, height: 15}} source={require("../img/vIcon.png")} />   
                                </View>     
                            </View>
                        </TouchableOpacity>
                        <Image style={{marginTop: 5, width: 25, height: 25}} source={require("../img/calendarIcon.png")} />   
                        <View style={{ width: width/3.2, borderWidth: 2, height: 37,
                            alignItems: "center", 
                            borderRadius: 20, borderColor: "#206D96"}}>
                                <TextInput placeholder={"peso"} placeholderTextColor={"#A6C2D4"}
                                    style={{marginTop: 1,fontSize: 20, color: "#A6C2D4"}}
                                />
                        </View>
                    </View>
                </View>
            </ScrollView>
                <View style={{alignItems: "center"}}>
                    {/* <FloatingButton callFunc={() => goTo()} icon={require("../img/addIcon.png")} /> */}
                </View>
      </View >
      );   
};

const container = {alignSelf: "center"}
const containerPetStyle = {alignItems: "center", justifyContent: "center"}
const petImageStyle = {width: width-40, height: 200}
const petNameStyle = { fontSize: 24,  color: "#AEE4F8"}
const containerPetNameStyle = {width: width- 80, marginTop: 5, alignItems: "center", borderBottomColor: "#206D96", borderBottomWidth: 2};
const optionSelected = {}
