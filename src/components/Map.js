import React from 'react'
import { View, StyleSheet,TextInput, TouchableOpacity, Text , SafeAreaView} from "react-native"
import MapView from 'react-native-maps'

const Map = () => {
    return (
        <MapView />
    )
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
})

export {Map}
