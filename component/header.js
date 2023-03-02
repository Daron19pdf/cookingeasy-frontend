import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements'
import { useState } from 'react';
import Modal from 'react-native-modal';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
  const navigation = useNavigation();
  const User = useSelector((state) => state.user.value);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
    <Header 
        backgroundColor='#f4511e'
        leftComponent={{ icon: 'menu', color: '#fff' , onPress:(toggleModal) }} 
        centerComponent={{ text: 'Cooking Easy', style: { color: '#fff' } , img: require('../assets/COOKING_EASY.png'), imgStyle: {width: 100, height: 100} , onPress: () => navigation.navigate('HomeScreen') }}
     />
    <View style={styles.container}>
      <ScrollView>
        <Modal 
          isVisible={isModalVisible}
          backdropOpacity={0.7}
          animationType="fade"
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          animationInTiming={500}

        >
        <View style={styles.containerModal}>
          <View style={styles.imgContainer}>
            <Image source={require('../assets/COOKING_EASY.png')} style={{width: 100, height: 100}} />
          </View>
          <View style={styles.sommaireContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 15, textAlign: 'center'}}>Mon tableau de bord</Text>
            <View style={styles.align}>
            <FontAwesome name='home' size={20} color='#FA8C8E' style={styles.icon}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin:15}}  onPress={() =>navigation.navigate('HomeScreen')} >Accueil</Text>
            </View>
            <View style={styles.align} >
            <FontAwesome name='spoon' size={20} color='#FA8C8E' style={styles.icon}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin:15}} onPress={() => navigation.navigate("MenuScreen")} >Mon Menu</Text>
            </View>
            <View style={styles.align}>
            <FontAwesome name='star' size={20} color='#FA8C8E' style={styles.icon}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin:15}} onPress={() => navigation.navigate("FavorisScreen")} >Mes Favoris</Text>
            </View>
            <View style={styles.align}>
            <FontAwesome name='user' size={20} color='#FA8C8E' style={styles.icon}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin:15}} onPress={() => navigation.navigate("ProfilScreen")} >Mon Profil</Text>
            </View>
            <View style={styles.align}>
            <FontAwesome name='book' size={20} color='#FA8C8E' style={styles.icon}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', margin:15, marginBottom:10}}>Ma liste de course</Text>
            </View>

          </View>
          <View style={styles.bottomContainer}>
            <Image source={require('../assets/cute.jpg')} style={{width: 200, height: 100}} />
            </View>
            <View style={styles.deco}>
              <Text style={{fontSize: 15, margin:5}}>Deconnexion</Text>
              <Text style={{fontSize: 15,  margin:5}}>Supprimer votre compte</Text>
            </View>
          </View>
        </Modal>
        </ScrollView>
        
    </View>
    
      
    </View>
   
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    padding: 10,
    margin: 5,
    width: "90%",
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#f4511e',
    borderWidth: 2,
  },
  sommaireContainer: {
    padding: 10,
    borderColor: '#f4511e',
    width: "90%",
    borderWidth: 2,
    margin: 5,
    zIndex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',

  },
  bottomContainer: {
    padding: 10,
    borderColor: '#f4511e',
    width: "90%",
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  deco: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

