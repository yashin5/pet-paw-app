import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text
} from 'react-native';
import HeaderBar from '../component/HeaderBar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import GoBackIcon from '../component/GoBackIcon'
import EditIcon from '../component/EditIcon'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideBarDrawer from '../component/SideBarDrawer';


export default function AccountScreen(props){
  const [name, setName] = useState("Yashin do Nascimento dos Santos")
  const [email, setEmail] = useState("yashinndsantos@gmail.com")
  
  useEffect(() => {  
    const goBack = () => {
      props.navigation.goBack()
  };

  BackHandler.addEventListener("hardwareBackPress", goBack);

    return () =>
    BackHandler.removeEventListener("hardwareBackPress", goBack);
  }, []);

    return (
      <View style={{ flex: 1}}>
        <DrawerLayout
          drawerWidth={230}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType='front'
          drawerBackgroundColor="white"
          edgeWidth={50}
          renderNavigationView={() => <SideBarDrawer navigation={props.navigation} userName={"Carol"} />} >
          <HeaderBar center={"CONTA"} left={BurgerIcon} right={SearchIcon} />
          <ScrollView>
          <View style={{alignItems: "center"}}>
          <View style={container}>
            <Image style={userImageStyle} source={require("../img/testImage.jpg")} />
            <View style={{ width: 300,  flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={labelStyle}>Nome</Text>
              <View style={containerText}>
              <Text style={dataFromUserStyle}>Paula Soarez da Silva</Text>
              </View>
            </View>
            <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>E-mail</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>yashinndsantosyashinndsantos@gmail.com</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>Nascimento</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>04/06/1996</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>Sexo</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>Masculino</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>País</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>Brasil</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>Endereço</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>Rua da Relação</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>Estado</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>Rio de Janeiro</Text>
              </View>
              </View>
              <View style={dataFromUserContainerStyle}>
              <Text style={labelStyle}>Telefone</Text>
              <View style={containerText}>
                <Text style={dataFromUserStyle}>21 983670452</Text>
              </View>
              </View>
              </View>
            </View>
            <HeaderBar center={EditIcon} style={bottomBar} left={GoBackIcon} height={50} />
          </ScrollView>
       </DrawerLayout>

      </View >);
};

const container = { marginBottom: 20, width: 300, marginTop: 20, justifyContent: "space-between"};
const userImageStyle = {alignSelf: "center", width: 150, marginBottom: 20, height: 150};
const dataFromUserContainerStyle = {
  marginTop: 10, alignItems: "center", width: 300, flexDirection: "row", justifyContent: "space-between"
};
const labelStyle = {fontSize: 22, color: "#979C9D"}
const dataFromUserStyle= {marginTop: 6,  flexWrap: "wrap", fontSize: 17, color: "#84CEE6", textAlign: "right"}
const containerText = {width: 181}
const bottomBar = {flexDirection: "row", justifyContent: "space-between", marginTop: 10}