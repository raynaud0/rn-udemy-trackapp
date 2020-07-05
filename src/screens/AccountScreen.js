import React, {useState, useContext} from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text } from "react-native"
import {Spacer} from "../components/index"
import { Context as AuthContext} from "../context/AuthContext"


const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <View>

        <Spacer>
            <TouchableOpacity
            onPress={() => signout() }
            >
                <Text>Sign OUT</Text>
            </TouchableOpacity>
        </Spacer>

        </View>
    )
}


const styles = StyleSheet.create({

})

export {AccountScreen}
