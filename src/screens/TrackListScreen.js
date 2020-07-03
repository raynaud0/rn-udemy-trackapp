import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={()=> navigation.navigate("TrackDetailScreen")}
            >
                <Text> GO TO  TRACK DETAIL</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

})
export {TrackListScreen}
