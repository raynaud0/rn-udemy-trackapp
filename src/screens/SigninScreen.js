import React, {useState, useContext} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "../components/index"
import { Context as AuthContext} from "../context/AuthContext"
import {AuthForm, NavLink} from "../components/index"

const SigninScreen = ({navigation}) => {
    return (

    <View style={styles.container}>

        <AuthForm 
        headerText="Sign In for Tracker"
        errorMessage=""
        submitButtonText="Giriş Yap"
        onSubmit={() => {}}//or just signup
        />

        <NavLink 
        text="Don't have an account? Sign up instead!"
        routeName="TrackListScreen"
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

    }
})
export {SigninScreen}
