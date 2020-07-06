import React, {useEffect} from 'react'
import { View, StyleSheet, Text, Alert } from "react-native"
import {Map} from "../components/index"
import {Permission, PERMISSION_TYPE} from "../permissions/AppPermission"




const TrackCreateScreen = () => {

    useEffect(() => {
        Permission.checkPermission(PERMISSION_TYPE.photo)
        //Permission.requestMultiple(PERMISSION_TYPE.photo, PERMISSION_TYPE.location)

    }, [])


    return (
        <View >
            
            <Map />


        </View>
    )
}


const styles = StyleSheet.create({

})


export {TrackCreateScreen}
