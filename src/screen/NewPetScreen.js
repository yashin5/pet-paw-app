import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableNativeFeedback,
  Text,
} from 'react-native';
import Bar from '../component/Bar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import GoBackIcon from '../component/GoBackIcon'
import EditIcon from '../component/EditIcon'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideBarDrawer from '../component/SideBarDrawer';
import FloatingButton from '../component/FloatingButton';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;

export default function NewPetScreen(props){
  const [drawer, setDrawer] = useState(null)
  const [edit, setEdit] = useState(false)

    const goBack = () => props.navigation.goBack();
    const openDrawer = () => drawer.openDrawer();
    const goTo = () => props.navigation.navigate("PetsScreen", {screen: "PetsScreen"})

    useEffect(() => {  
      BackHandler.addEventListener("hardwareBackPress", goBack);
  
      return () =>
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    }, []);
      
    const pets = [
        {petImage: require("../img/petIcon.jpg")}


    ]
    return(
        <View style={{flex: 1}}>
      
          <Bar center={"Novo Pet"} left={() => <GoBackIcon callFunc={goBack} />} right={SearchIcon} />
            <ScrollView>
                <View style={container}>
                    <View style={{alignItems: "center"}}>
                        <View style={containerPetStyle}>
                            <Image style={petImageStyle} source={require("../img/petIcon.jpg")} />
                        </View>
                        <View style={containerPetNameStyle}>
                            <TextInput placeholderTextColor={"#A6C2D4"} style={petNameStyle} placeholder="Nome"/>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 20, justifyContent: "space-between"}}>
                    <TouchableOpacity>
                            <View style={{ width: 155, borderWidth: 2, height: 37,
                                alignItems: "center", 
                                borderRadius: 20, borderColor: "#206D96"}}>
                                <View style={{width: 79, flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 20, color: "#A6C2D4"}}>espécie</Text>
                                <Image style={{marginLeft: 20, marginTop: 5, width: 15, height: 15}} source={require("../img/vIcon.png")} />   
                                </View>     
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ width: 155, borderWidth: 2, height: 37,
                                alignItems: "center", 
                                borderRadius: 20, borderColor: "#206D96"}}>
                                <View style={{width: 70, flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 20, color: "#A6C2D4"}}>raça</Text>
                                <Image style={{marginLeft: 45, marginTop: 5, width: 15, height: 15}} source={require("../img/vIcon.png")} />   
                                </View>     
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10, justifyContent: "space-between"}}>
                    <TouchableOpacity>
                            <View style={{ width: 155, borderWidth: 2, height: 37,
                                alignItems: "center", 
                                borderRadius: 20, borderColor: "#206D96"}}>
                                <View style={{width: 130, flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 20, color: "#A6C2D4"}}>nascimento</Text>
                                <Image style={{marginLeft: 5, marginTop: 5, width: 15, height: 15}} source={require("../img/vIcon.png")} />   
                                </View>     
                            </View>
                        </TouchableOpacity>
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
const petImageStyle = {width: width- 40, height: 200}
const petNameStyle = { fontSize: 24,  color: "#36AAE3"}
const bottomBar = {flexDirection: "row", justifyContent: "space-between", marginTop: 10};
const containerPetNameStyle = {width: width- 80, marginTop: 5, alignItems: "center", borderBottomColor: "#206D96", borderBottomWidth: 2};
