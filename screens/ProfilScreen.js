import {ScrollView, StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Menu from '../component/header';
import { useSelector } from 'react-redux';

export default function ProfilScreen({ navigation }) {
  
  const User = useSelector((state) => state.user.value);
console.log(User);
  return (
    <ScrollView style={styles.modalContainer}>
      <Menu  />
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/chef.png')} />
        <View>

        <TouchableOpacity style={styles.pseudo}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={styles.button} />
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity>
          <View>
            <Text>{User.nom}</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View>
            <Text>{User.prenom}</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View>
            <Text>{User.password}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View>
            <Text>{User.email}</Text>
          </View>
        </TouchableOpacity>
          
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
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pseudoText: {
    fontSize: 25,
  },
  button: {
    backgroundColor: 'black',
  }

});