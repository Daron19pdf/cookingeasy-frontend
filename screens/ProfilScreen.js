import {ScrollView, StyleSheet, Text, View , Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Menu from '../component/menu';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfilScreen({ navigation }) {
  
  const User = useSelector((state) => state.user.value);
  const [text, setText] = useState("");
  const [isPseudo, setPseudo] = useState(`${User.pseudo}`);
  const [isNom, setNom] = useState(`${User.nom}`);
  const [isPrenom, setPrenom] = useState(`${User.prenom}`);
  const [isPassword, setPassword] = useState(`${User.password}`);
  const [isEmail, setEmail] = useState(`${User.email}`); 

  return (
    <ScrollView style={styles.modalContainer}>
      <Menu  />
      <View style={styles.container}>
        <View style={styles.pseudoContainer}>

        <Image style={styles.logo} source={require('../assets/profil.png')} />
        <View>

          <TouchableOpacity style={styles.pseudo}>
            <TextInput style={styles.pseudoText} value={isPseudo}
                onChangeText={(value)=>setPseudo(value)} />
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.info}>
            <View style={styles.InputView}>
            <Text>Nom : </Text>
        <TouchableOpacity style={styles.button}>
            <TextInput style={styles.text} value={isNom}
                onChangeText={(value)=>setNom(value)}/>
          </TouchableOpacity>
          </View>

            <View>
              <Text>Prenom : </Text>
          <TouchableOpacity style={styles.button}>
              <TextInput style={styles.text} value={isPrenom}
                onChangeText={(value)=>setPrenom(value)}/>
          </TouchableOpacity>
          </View>

            <View>
            <Text>Mot de passe : </Text>
          <TouchableOpacity style={styles.button}>
          <TextInput style={styles.text}value={isPassword}
                onChangeText={(value)=>setPassword(value)}/>
          </TouchableOpacity>
          </View>

          <View>
            <Text>Email : </Text>
          <TouchableOpacity style={styles.button}>
          <TextInput style={styles.text}value={isEmail}
                onChangeText={(value)=>setEmail(value)}/>
        </TouchableOpacity>
          </View>
          <View style={styles.logos}>
          <TouchableOpacity style={styles.logoText}>
              <Image style={styles.image} source={require('../assets/accueil.gif')} />
              <Text> Foyer </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoText}>
              <Image style={styles.image} source={require('../assets/four-micro-onde.gif')} />
              <Text> Aliments Exclus </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={require('../assets/nourriture-vegetalienne.gif')} />
              <Text> Aliments Exclus </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.image} source={require('../assets/pas-doeuf.gif')} />
              <Text> Aliments Exclus </Text>
            </TouchableOpacity>
          </View>
        </View>
          <TouchableOpacity style={styles.next}>
              <Text style={styles.buttonText}> OK </Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    height: 80,
    width: 80,
  },
  pseudoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pseudoText: {
    fontSize: 20,
    fontWeight: "bold",
    height: 40,
    width: 150,
    borderWidth: 1,
    marginLeft: 10,
  },
  text: {
    width: "100%",
  },  
  button: {
    height: 40,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor:'#C0C0C0',

  },
  info: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  InputView: {
    flexDirection: 'column',
  },
  logos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  logoText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
  },
  next: {
    width: 50,
    height: 40,
    backgroundColor: "#F4511E",
    fontSize: 15,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  }
});
