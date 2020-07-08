import React, {useState, useEffect} from 'react';
import {
  BackHandler,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text
} from 'react-native';
import Bar from '../component/Bar'
import BurgerIcon from '../component/BurgerIcon'
import SearchIcon from '../component/SearchIcon'
import GoBackIcon from '../component/GoBackIcon'
import EditIcon from '../component/EditIcon'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import SideBarDrawer from '../component/SideBarDrawer';
import InputField from '../component/InputField';


export default function AccountScreen(props){
  const [drawer, setDrawer] = useState(null)
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState("Yashin do Nascimento dos Bocovis")
  const [email, setEmail] = useState("yashinndsantos@gmail.com")
  const [birthDate, setBirthDate] = useState("04/06/1843")
  const [sex, setSex] = useState("Masculino")
  const [adress, setAdress] = useState("Rua da Relação")
  const [state, setState] = useState("Rio de Janeiro")
  const [country, setCountry] = useState("Brasil")
  const [tel, setTel] = useState("21 980320345")

  const goBack = () => props.navigation.goBack();
  const openDrawer = () => drawer.openDrawer();

  useEffect(() => {  
    BackHandler.addEventListener("hardwareBackPress", goBack);

    return () =>
    BackHandler.removeEventListener("hardwareBackPress", goBack);
  }, []);

  const goEdit = () => edit? setEdit(false) : setEdit(true);

  const fieldsList = [
    {label: "E-mail", data: email, onChange: setEmail},
    {label: "Nascimento", data: birthDate, onChange: setBirthDate},
    {label: "Sexo", data: sex, onChange: setSex},
    {label: "Endereço", data: adress, onChange: setAdress},
    {label: "Estado", data: state, onChange: setState},
    {label: "País", data: country, onChange: setCountry},
    {label: "Telefone", data: tel, onChange: setTel},
  ]
    return (
      <View style={{ flex: 1}}>
        <DrawerLayout
          ref={ drawer => setDrawer(drawer)}
          drawerWidth={230}
          drawerPosition={DrawerLayout.positions.Left}
          drawerType='front'
          drawerBackgroundColor="white"
          edgeWidth={50}
          renderNavigationView={() => <SideBarDrawer hideSideBar={drawer} navigation={props.navigation} userName={"Carol"} />} >
          <Bar center={"CONTA"} left={() => <BurgerIcon callFunc={openDrawer} />} right={SearchIcon} />
          <ScrollView>
          <View style={{alignItems: "center"}}>
          <View style={container}>
            <Image style={userImageStyle} source={require("../img/testImage.jpg")} />
            <View style={{ width: 300,  flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={edit? labelStyleEditMode : labelStyle}>Nome</Text>
              <View style={containerText}>
              {edit? <InputField  fields={[
              {
                container: {borderBottomColor: "grey", borderBottomWidth: 0.2},
                placeholder: "Nome",
                placeholderTextColor: '#A9DBF2',
                onChangeText: setName,
                value: name,
                style: dataFromUserStyle              
                }]}/> : <Text style={dataFromUserStyle}>Yashin do Nascimento dos Bocovis</Text>}
              </View>
            </View>
            {fieldsList.map(item =>(
              <View key={item.label} style={dataFromUserContainerStyle}>
                <Text style={edit? labelStyleEditMode : labelStyle}>{item.label}</Text>
                <View style={containerText}>
                  {edit? <InputField  fields={[
              {
                container: {borderBottomColor: "grey", borderBottomWidth: 0.2},
                placeholder: item.label,
                placeholderTextColor: '#A9DBF2',
                onChangeText: item.onChange,
                value: item.data,
                style: dataFromUserStyle              
                }]}/> : <Text style={dataFromUserStyle}>{item.data}</Text>}
                </View>
              </View>
              ))}
              </View>
            </View>
            <Bar center={() => <EditIcon callFunc={goEdit} />} style={bottomBar} left={() => <GoBackIcon callFunc={goBack} />}  height={50} />
          </ScrollView>
       </DrawerLayout>
      </View >);
};

const container = { marginBottom: 20, width: 300, marginTop: 20, justifyContent: "space-between"};
const userImageStyle = {alignSelf: "center", width: 150, marginBottom: 20, height: 150};
const dataFromUserContainerStyle = {
  marginTop: 10, alignItems: "center", width: 300, flexDirection: "row", justifyContent: "space-between"
};
const labelStyle = {fontSize: 22, color: "#979C9D"};
const labelStyleEditMode = {marginTop: 4, fontSize: 22, color: "#979C9D"};
const dataFromUserStyle= {marginTop: 6,  flexWrap: "wrap", fontSize: 17, color: "#84CEE6", textAlign: "right"};
const containerText = {width: 181};
const bottomBar = {flexDirection: "row", justifyContent: "space-between", marginTop: 10};