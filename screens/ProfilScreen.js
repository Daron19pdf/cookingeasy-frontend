import {ScrollView, StyleSheet, Text, View , Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Menu from '../component/menu';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfilScreen({ navigation }) {
  
  const User = useSelector((state) => state.user.value);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput('');
  };

  const handleValidation = () => {
    fetch(`${BACKEND_ADDRESS}/user/signup`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pseudo: pseudo,
        nom: nom,
        prenom: prenom,
        password: password,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      dispatch(login({ pseudo: pseudo, nom: nom, prenom: prenom, password: password, email: email, token: data.token }));
      console.log(data.token);
          setPseudo('');
          setNom('');
          setPrenom('');
          setPassword('');
          setEmail('');
        if (!EMAIL_REGEX.test(email)) {
          setEmailError(true)
        } else {
          navigation.navigate("InfoScreen");
        }
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <ScrollView style={styles.modalContainer}>
      <Menu  />
      <View style={styles.container}>
        <View style={styles.profil}>

        <Image style={styles.logo} source={require('../assets/profil.png')} />
        <View>

          <TouchableOpacity style={styles.pseudo}>
            <TextInput style={styles.pseudoText}>   {User.pseudo}</TextInput>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.info}>
            <View style={styles.InputView}>
            <Text>Nom : </Text>
        <TouchableOpacity style={styles.button}>
            <TextInput style={styles.pseudoText}>{User.nom}</TextInput>
          </TouchableOpacity>
          </View>

            <View>
              <Text>Prenom : </Text>
          <TouchableOpacity style={styles.button}>
          <TextInput style={styles.pseudoText}>{User.prenom}</TextInput>
          </TouchableOpacity>
          </View>

            <View>
            <Text>Mot de passe : </Text>
          <TouchableOpacity style={styles.button}>
          <TextInput style={styles.pseudoText}>{User.password}</TextInput>
          </TouchableOpacity>
          </View>

          <View>
            <Text>Email : </Text>
          <TouchableOpacity style={styles.button}>
          <TextInput style={styles.pseudoText}>{User.email}</TextInput>
        </TouchableOpacity>
          </View>
          <View style={styles.logos}>
          <TouchableOpacity style={styles.logoText} onPress={() => navigation.navigate('FoyerScreen')}>
              <Image style={styles.image} source={require('../assets/accueil.gif')} />
              <Text> Foyer </Text>
            </TouchableOpacity  >
            <TouchableOpacity style={styles.logoText} onPress={() => navigation.navigate('EquipementScreen')}>
              <Image style={styles.image} source={require('../assets/four-micro-onde.gif')} />
              <Text> Mon Equipement </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegimeScreen')}>
              <Image style={styles.image} source={require('../assets/nourriture-vegetalienne.gif')} />
              <Text> Mon Régime </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AlimentExcluScreen')}>
              <Image style={styles.image} source={require('../assets/pas-doeuf.gif')} />
              <Text> Aliments Exclus </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginBottom:5,
  },

  profil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  pseudoText: {
    height: 40,
    width: '100%',
    borderWidth: 1,
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
    padding: 25,
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
  }
});
