import React from "react"
import {StyleSheet, Text, View} from "react-native"

function Loading () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    text:{
        fontSize : 50,
        color : "#000000",
    }
})

export default Loading