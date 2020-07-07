import React, {useState, useEffect, Component} from 'react';
import {
  ScrollView,
  BackHandler,
  Text, 
  View,
  Image
} from 'react-native';
import ButtonList from '../component/ButtonList'
import HeaderBar from '../component/HeaderBar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import ImageHeader from '../component/ImageHeader'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideBarDrawer from '../component/SideBarDrawer';

export default function Home(props){
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


    return (
      <View style={{flex: 1}}>
        <DrawerLayout
          drawerWidth={230}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType='front'
          drawerBackgroundColor="white"
          edgeWidth={50}
          style={{backgroundColor: "red"}}
          renderNavigationView={() => <SideBarDrawer navigation={props.navigation} userName={"Carol"} />} >
          <HeaderBar center={ImageHeader} left={BurgerIcon} right={SearchIcon} />
          <ButtonList icons={icons} />
          </DrawerLayout>

      </View >);

};

const icons = [{
  image: require("../img/iconPat.png"),
  logoStyle: {width: 90, height: 79, marginTop: 30},
  name: "Mascotes",
  nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
},
{
  name: "Agenda",
  image: require("../img/iconSchedul.png"),
  logoStyle: {width: 82, height: 85, marginTop: 30},
  nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
},
  {
    name: "Profissionais",
    image: require("../img/iconVet.png"),
  logoStyle: {width: 93, height: 90, marginTop: 30},
  nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
},
  {
    name: "Ongs",
    image: require("../img/iconOngs.png"),
    logoStyle: {width: 90, height: 88, marginTop: 30},
    nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
  },
  {
    name: "Leis",
    image: require("../img/iconRules.png"),
    logoStyle: {width: 92, height: 90, marginTop: 30},
    nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
  },
  {
    name: "Blog",
    image: require("../img/ICONPrancheta55.png"),
    logoStyle: {width: 80, height: 90,  marginTop: 30},
    nameStyle: {fontSize: 17, color: "grey", marginTop: 10}
  },
];