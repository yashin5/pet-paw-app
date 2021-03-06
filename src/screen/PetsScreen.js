import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  Button,
  TouchableOpacity,
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

export default function PetsScreen({navigation}){
  const [drawer, setDrawer] = useState(null)
  const [edit, setEdit] = useState(false)

    const goBack = () => navigation.goBack();
    const openDrawer = () => drawer.openDrawer();
    const goEdit = () => edit? setEdit(false) : setEdit(true);
    const goToPet = (pet) => navigation.navigate('Pet', {petUrl: pet.petUrl});
    const goToNewPet = () => navigation.navigate('NewPet')
    useEffect(() => {  
      BackHandler.addEventListener("hardwareBackPress", goBack);
  
      return () =>
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    }, []);
      
    const pets = [
        {petImage: require("../img/petIcon.jpg"), petName: "Salém", petUrl: "salem"},
        {petImage: require("../img/petIcon.jpg"), petName: "José", petUrl: "jose"}
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
          renderNavigationView={() => <SideBarDrawer hideSideBar={drawer} navigation={navigation} userName={"Carol"} />} >
          <Bar center={"Mascotes"} left={() => <BurgerIcon callFunc={openDrawer} />} right={SearchIcon} />
            <ScrollView >
                <View style={container}>
                    {pets.map((item, index) => (
                        <View  key={index} style={containerPetStyle}>
                            <TouchableOpacity onPress={() => goToPet(item)} key={index}>
                                <Image style={petImageStyle}
                                        source={item.petImage} 
                                    />
                            </TouchableOpacity>
                            <Text style={petNameStyle} >{item.petName}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
                <View style={{alignItems: "center"}}>
                    <FloatingButton callFunc={() => goToNewPet()} icon={require("../img/addIcon.png")} />
                </View>
                <Bar style={bottomBar} bottom={true} left={() => <GoBackIcon callFunc={goBack} />}  height={50} />
          </DrawerLayout>
      </View >
      );   
};

const container = {marginTop: 20, flexDirection: "row", flexWrap: "wrap"};
const containerPetStyle = { marginBottom: 10, alignItems: "center", justifyContent: "center"};
const petImageStyle = {width: 148, height: 140, marginLeft: 20};
const petNameStyle = {margin: 0, fontSize: 20, color: "grey"};
const bottomBar = {flexDirection: "row", justifyContent: "space-between", marginTop: 10};