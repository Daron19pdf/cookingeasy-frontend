import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";


export default function Recette() {
    const User = useSelector((state) => state.user.value);


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/penne.jpg')} />
            </View>
    );
    };


const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'red'
    },
});