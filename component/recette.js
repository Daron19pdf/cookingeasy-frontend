import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {Picker} from "@react-native-picker/picker";
import { removeRecette } from "../reducers/recette";

export default function Recette(props) {
    const dispatch = useDispatch();
    const Recette = useSelector((state) => state.recette.value);
    const navigation = useNavigation();
    const User = useSelector((state) => state.user.value);
    const [likedRecipe, setlikedRecipe] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("2");

     // like coeur 
    const handleLike = () => {
        if(likedRecipe) {
        setlikedRecipe(!likedRecipe)
    } else {
        setlikedRecipe(!likedRecipe)
    }
    };
    if (likedRecipe) {
        var likeHeart = 'heart'
        var colors = 'red'
    } else {
          likeHeart = 'heart-o'
          colors = '#000'
    }

    // modal
    const toggleModal = () => {
        setModalVisible(!modalVisible);
      };

      // picker
      const handleChangePeople = (itemValue) => {
        setSelectedValue(itemValue)
        setModalVisible(!modalVisible);
        }
        
        //test pour ajouter une image depuis le props
        const test = props.photo;


        
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image style={styles.image} source={require('../assets/plats/lasagnes-bolo.jpg')} />
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.userContainer} onPress={ () => toggleModal()}>
                    <FontAwesome name='user' size={16} color='#000' style={styles.icon}/>
                    <Text style={styles.text}>{selectedValue}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer}>
                    <FontAwesome name='refresh' size={16} color='#000' style={styles.icon} onPress={() => navigation.navigate("NewRecetteScreen")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer} onPress={() => handleLike()}>
                    <FontAwesome name={likeHeart} size={16} color={colors} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userContainer} onPress={() => dispatch(removeRecette())}>
                    <FontAwesome name='close' size={16} color='#000' style={styles.icon}/>
                </TouchableOpacity>
                <Modal 
                visible={modalVisible} 
                animationType='slide'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
                >
                    <View style={styles.modalView}>
                      <Picker numberOfLines={3} style={styles.picker}  onValueChange={(itemValue) => handleChangePeople(itemValue)}>
                        <Picker.Item label="Nombre de personnes pour cette recette :" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                      </Picker>
                    </View>
                </Modal>
                </View>
        
            </View>
    );
    };


const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 270,
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
        height: 42,
        textAlign: "center",
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
        width: '25%',
        height: 30,
    },
    text: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "bold",
    },
    picker: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        opacity: 0.8,
    },
    test: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        opacity: 0.8,
    },
    centeredView: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'red',
    },
    modalView: {
        marginTop: '60%',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    testView: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
});