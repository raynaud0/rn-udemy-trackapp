import React, {useState, useContext} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import { Context as AuthContext} from "../context/AuthContext"
import {AuthForm, NavLink} from "../components/index"


const SignupScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    const listener = navigation.addListener('blur', clearErrorMessage);//baska screene gececekken addlistener


return (
    <View style={styles.container}>

        <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Kayıt Ol"
        onSubmit={signup}//or just signup
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
        flex:1
    }
})
export {SignupScreen}
