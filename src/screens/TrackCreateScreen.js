import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import {Map} from "../components/index"

const TrackCreateScreen = () => {
    return (
        <View >
            
            <Text>CREATE A TRACK</Text>
            <Map 
            style={styles.map}
            />



        </View>
    )
}


const styles = StyleSheet.create({
    map:{
        height:200,
        width:200
    }
})


export {TrackCreateScreen}
