import React from 'react'
import { View, StyleSheet, Text , TouchableOpacity} from "react-native"

const SigninScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={ () => navigation.navigate("HomeApp")}
            >
                <Text>
                    go to tracklist feed
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

})
export {SigninScreen}
