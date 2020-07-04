import React, {useState, useContext} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "../components/index"
import { Context} from "../context/AuthContext"
import {AuthForm, NavLink} from "../components/index"



const SigninScreen = ({navigation}) => {

    const { state, signin, clearErrorMessage } = useContext(Context)

    const listener = navigation.addListener('blur', clearErrorMessage);

    return (

    <View style={styles.container}>


        <AuthForm 
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Giriş Yap"
        onSubmit={signin}//or just signup
        />

        <NavLink 
        text="Don't have an account? Sign up instead!"
        routeName="SignupScreen"
        />
            
    </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        
    }
})
export {SigninScreen}
