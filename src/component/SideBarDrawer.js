import React from 'react';
import {
  Text, 
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const height = Dimensions.get('window').height;

export default function SideBarDrawer(props){
        return (
            <View style={{alignItems: "center", width: 200, borderBottomColor: "#CFD1D1", alignSelf: "center", borderBottomWidth: 1, height: height - 40}}>
          <View>
          <View style={container}>
          <View style={containerNameStyle}>
            <Text style={nameStyle}>Olá, {props.userName}</Text>
            <Image style={userImageStyle} source={require('../img/upImage.png')} />
            </View>
          </View>
           <View style={routesContainer}>
              <View style={{flexDirection: "row"}}>
                <Image style={{marginRight: 20, width: 18, height: 25}} source={require('../img/iconAccount.png')} />
                <Text style={routesName}>Conta</Text>
              </View>
              <TouchableOpacity onPress={() => props.navigation.navigate('Mural')}>
              <View style={routesContainerRoutes}>
                <Image style={routesIcon} source={require('../img/iconMural.png')} />
                <Text style={routesName}>Mural</Text>
              </View>
              </TouchableOpacity>
              <View style={routesContainerRoutes}>
                <Image style={routesIcon} source={require('../img/iconHelp.png')} />
                <Text style={routesName}>Ajuda</Text>
              </View>
              <View style={routesContainerRoutes}>
                <Image style={routesIcon} source={require('../img/iconConfig.png')} />
                <Text style={routesName}>Configurações</Text>
              </View>
            </View>
            </View>
          </View>
        );
};

const container = {alignItems: "center", width: 200, borderBottomColor: "#CFD1D1", alignSelf: "center", borderBottomWidth: 1}
const containerNameStyle = {marginBottom: 10, width: 230, flexDirection: "row", justifyContent: "space-between", marginTop: 40}
const nameStyle = {flexWrap: "wrap", width: 100, marginLeft: 20, fontSize: 40, color: "#29AAE1"}
const userImageStyle = {marginTop: 10, marginRight: 20, width: 70, height: 70}
const routesContainer = {marginTop: 10, width: 200, marginLeft: 15}
const routesIcon = {marginRight: 20, width: 25, height: 25}
const routesName = {fontSize: 20, color: "grey"}
const routesContainerRoutes = {marginTop: 8, flexDirection: "row"}