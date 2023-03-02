import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Recette() {
    const navigation = useNavigation();
    const User = useSelector((state) => state.user.value);
    const [likedMovies, setlikedMovies] = useState(false)

     // like coeur 
    const handleLike = () => {
        if(likedMovies) {
        setlikedMovies(!likedMovies)
    } else {
        setlikedMovies(!likedMovies)
    }
    };
    if (likedMovies) {
        var likeHeart = 'heart'
        var colors = 'red'
    } else {
          likeHeart = 'heart-o'
          colors = '#000'
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lasagnes Bolognaise</Text>
            <Image style={styles.image} source={require('../assets/plats/lasagnes-bolo.jpg')} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.userContainer}>
                    <FontAwesome name='user' size={16} color='#000' style={styles.icon}/>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer}>
                    <FontAwesome name='refresh' size={16} color='#000' style={styles.icon} onPress={() => navigation.navigate("NewRecetteScreen")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer} onPress={() => handleLike()}>
                    <FontAwesome name={likeHeart} size={16} color={colors} style={styles.icon}/>
                </TouchableOpacity>
                </View>
        
            </View>
    );
    };


const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 250,
        alignItems: "center",
        backgroundColor:'#fff',
        opacity: 0.8,
        margin:10,
        borderRadius: 10,
    },
    image: {
        width: 160,
        height: 180,
        borderRadius: 10,
        marginTop: 5,
    },
    title: {
        fontSize: 15,
        marginTop: 5,
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 30,
    },
    text: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold",
    },
});