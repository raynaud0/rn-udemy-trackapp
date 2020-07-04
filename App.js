import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

import {
AccountScreen,
SigninScreen,
SignupScreen,
TrackCreateScreen,
TrackListScreen,
TrackDetailScreen,
ResolveAuthScreen,

} from "./src/screens/index"

import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//OTHER
import {Provider as PaperProvider  } from "react-native-paper"
import { useIsFocused } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons"
import {navigationRef} from "./src/navigationRef/RootNavigation"

import {Provider as AuthProvider} from "./src/context/AuthContext"



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();
const StackSignup = createStackNavigator()
const StackTrack = createStackNavigator()



const navOptionHandler = ()=> ({
  headerShown:false
})



function TabNavigator(props){
  const navigation = useNavigation();
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Search';

  const isFocused = useIsFocused();

  let icon = 'feather';

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default :
      icon = 'feather';
      break;

  }
  return(
<React.Fragment>
  <Tab.Navigator 
  shifting={true}
  screenOptions={({route}) => ({
  tabBarIcon:({color,size}) => {
    let iconName;
    if(route.name == "TrackListScreen")
    { 
      iconName = "md-home"
    }
    else if(route.name =="TrackCreateScreen")
    {
      iconName ="ios-search"
    }

    else if(route.name =="AccountScreen")
    {
      iconName ="ios-notifications"
    }

    return <Icon name={iconName} style={{width:20 , height:20}} size={size} color={color} />
  }
})}

tabBarOptions= {{
  activeTintColor:"#6441A6",
  inactiveTintColor:"black"
}}
>
  <Tab.Screen name="TrackListScreen" component={TrackStack} />  

  <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />  
                  
  <Tab.Screen name="AccountScreen" component={AccountScreen}/>

</Tab.Navigator>

</React.Fragment>
)}



function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="TrackStack" >
        <Drawer.Screen name = "TrackStack" component={TabNavigator} />
    </Drawer.Navigator>

  )
}



function SignupStack(){
  return(
    <StackSignup.Navigator initialRouteName="ResolveAuthScreen" >
      <StackSignup.Screen name ="ResolveAuthScreen" component={ResolveAuthScreen} options={navOptionHandler} />
      <StackSignup.Screen name ="SignupScreen" component={SignupScreen} options={navOptionHandler} />
      <StackSignup.Screen name ="SigninScreen" component={SigninScreen} options={navOptionHandler} />
    </StackSignup.Navigator>
  )
}


function TrackStack(){
  return(
  <StackTrack.Navigator initialRouteName="TrackListScreen" >
    <StackTrack.Screen name ="TrackListScreen" component={TrackListScreen} options={navOptionHandler} />
    <StackTrack.Screen name ="TrackDetailScreen" component={TrackDetailScreen} options={navOptionHandler} />
  </StackTrack.Navigator>
  )
}
1
function App() {
  return (
<AuthProvider>
  <PaperProvider>
    <NavigationContainer ref={navigationRef}>
      <StackApp.Navigator initialRouteName="ResolveAuthScreen">

            <StackApp.Screen name="HomeApp" component={DrawerNavigator} />
            <StackApp.Screen name="ResolveAuthScreen" component={SignupStack} options={navOptionHandler} />

      </StackApp.Navigator>
    </NavigationContainer>
  </PaperProvider>
</AuthProvider>
  );
}


export default App
