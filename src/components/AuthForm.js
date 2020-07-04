import React, {useState} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "./Spacer"

const AuthForm = ( {headerText, errorMessage, onSubmit, submitButtonText} ) => {

    
    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")

    return (
    <View style={styles.container}>

        <Spacer>
            <Text> {headerText} </Text>
        </Spacer>

        <Spacer>
            <TextInput
                label="Email"
                style={styles.input}
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </Spacer>
            
            <TextInput 
                label="Password"
                style={styles.input}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
            />


        { errorMessage ? 
            <Text style={styles.errorMessageStyle}> {errorMessage} </Text> : null
        }

        <Spacer>
            <TouchableOpacity                
                onPress={() => onSubmit({ email, password })}
                
                >
                <Text style={styles.intext}> {submitButtonText} </Text>
            </TouchableOpacity>
        </Spacer>




  
 

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
    errorMessageStyle:{
        fontSize:16,
        color:"red",
        marginLeft:15,
        marginTop:15
    },
    allreadyAcc:{
        color:"blue",

    }
})

export {AuthForm}
