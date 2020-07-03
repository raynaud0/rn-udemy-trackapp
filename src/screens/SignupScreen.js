import React, {useState, useContext} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "../components/index"
import { Context as AuthContext} from "../context/AuthContext"
import {AuthForm, NavLink} from "../components/index"

const SignupScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext)




return (
    <View style={styles.container}>

        <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Kayıt Ol"
        onSubmit={({email, password}) => signup({email, password})}//or just signup
        />

        <NavLink 
        text="Allready have an account? Sign in instead!"
        routeName="SigninScreen"
        />
            
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,

    },
    input:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:25,
        width:300,
        height:50,

    },
    intext:{
        height:50,
        alignSelf:"center",

    },
    errorMessage:{
        fontSize:16,
        color:"red",
        marginLeft:15,
        marginTop:15
    },
    allreadyAcc:{
        color:"blue",

    }
})
export {SignupScreen}
