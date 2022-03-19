import Constants from "expo-constants";
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/favicon.png")}
                resize="contain"
                style={{height: 100}}
            />
        </SafeAreaView>
    )
    const styles = StyleSheet.create({
        header: {
            width: "100%",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            padding: 20
        }
    })
}

export default Header;