import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  BackHandler,
  View
} from 'react-native';
import ButtonList from '../component/ButtonList'

export default function Home(){
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
      <ScrollView>
          <ButtonList icons={icons} />
      </ScrollView>);

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