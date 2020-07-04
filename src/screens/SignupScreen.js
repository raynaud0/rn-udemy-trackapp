import React, {useState, useContext, useEffect} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "../components/index"
import { Context as AuthContext} from "../context/AuthContext"
import {AuthForm, NavLink} from "../components/index"

const SignupScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext)

    const listener = navigation.addListener('blur', clearErrorMessage);//baska screene gececekken addlistener
        
    useEffect(() => {
        tryLocalSignin()
    }, [])

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
        flex:1
    }
})
export {SignupScreen}
