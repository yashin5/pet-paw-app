import React, {useState, useEffect, Component} from 'react';
import {
  BackHandler,
  View,
} from 'react-native';
import ButtonList from '../component/ButtonList'
import Bar from '../component/Bar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import ImageHeader from '../component/ImageHeader'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideBarDrawer from '../component/SideBarDrawer';

export default function HomeScreen(props){
  const [drawer, setDrawer] = useState(null)

  const backAction = () => {
    return true;
  };
  const openDrawer = () => drawer.openDrawer();

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

    return (
      <View style={{flex: 1}}>
        <DrawerLayout
          ref={ drawer => setDrawer(drawer)}
          drawerWidth={230}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType='front'
          drawerBackgroundColor="white"
          edgeWidth={50}
          style={{backgroundColor: "red"}}
          renderNavigationView={() => <SideBarDrawer hideSideBar={drawer} navigation={props.navigation} userName={"Carol"} />} >
          <Bar center={ImageHeader} left={() => <BurgerIcon callFunc={openDrawer} />} right={SearchIcon} />
          <ButtonList  icons={icons} />
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