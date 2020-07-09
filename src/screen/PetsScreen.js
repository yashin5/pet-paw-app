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

const height = Dimensions.get('window').height;

export default function PetsScreen(props){
  const [drawer, setDrawer] = useState(null)
  const [edit, setEdit] = useState(false)

    const goBack = () => props.navigation.goBack();
    const openDrawer = () => drawer.openDrawer();
    const goEdit = () => edit? setEdit(false) : setEdit(true);


    useEffect(() => {  
      BackHandler.addEventListener("hardwareBackPress", goBack);
  
      return () =>
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    }, []);
      
    const pets = [
        {petImage: require("../img/petIcon.jpg"), petName: "Salém"},
        {petImage: require("../img/petIcon.jpg"), petName: "José"},
        {petImage: require("../img/petIcon.jpg"), petName: "Fred"},
        {petImage: require("../img/petIcon.jpg"), petName: "Sal"},
        {petImage: require("../img/petIcon.jpg"), petName: "Açucar"},
        {petImage: require("../img/petIcon.jpg"), petName: "Limão"},



    ]
    return(
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
          <Bar center={"Mascotes"} left={() => <BurgerIcon callFunc={openDrawer} />} right={SearchIcon} />
            <ScrollView>
                <View style={container}>

                    {pets.map((item, index) => (
                        <View key={index} style={containerPetStyle}>
                            <Image style={petImageStyle}
                                    source={item.petImage} 
                                />
                            <Text style={petNameStyle} >{item.petName}</Text>
                        </View>
                    ))}
                </View>
            <Bar style={bottomBar} left={() => <GoBackIcon callFunc={goBack} />}  height={50} />
            </ScrollView>
                <View style={{alignItems: "center"}}>
                    <FloatingButton icon={require("../img/addIcon.png")} />
                </View>
          </DrawerLayout>
      </View >
      );   
};

const container = {marginTop: 20, flexDirection: "row", flexWrap: "wrap"}
const containerPetStyle = { marginBottom: 10, alignItems: "center", justifyContent: "center"}
const petImageStyle = {width: 148, height: 140, marginLeft: 20}
const petNameStyle = {margin: 0, fontSize: 20, color: "grey"}
const bottomBar = {flexDirection: "row", justifyContent: "space-between", marginTop: 10};