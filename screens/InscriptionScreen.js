import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';

export default function InscriptionScreen({ navigation}) {
    
  const [pseudo, setPseudo] = useState('');
  const [nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <FontAwesome name='arrow-left' size={20} color='#FA8C8E' style={styles.icon}/>
    <Text style={styles.headerText}>Inscription</Text>
    </View>
    <View style={styles.inputContainer}>
    <TextInput 
            placeholder="Pseudo"
            onChangeText={(value) => setPseudo(value)}
            value={pseudo}
            style={styles.input}
      />
      <TextInput 
            placeholder="Nom"
            onChangeText={(value) => setNom(value)}
            value={nom}
            style={styles.input}
      />
      <TextInput 
            placeholder="Prenom"
            onChangeText={(value) => setPrenom(value)}
            value={Prenom}
            style={styles.input}
      />
      <TextInput 
            placeholder="Mot de passe"
            onChangeText={(value) => setPassword(value)}
            value={password}
            style={styles.input}
      />
      <TextInput 
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 6,
    backgroundColor: 'white',
    marginTop: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset : { width: 1, height: 13}
  },
  headerText: {
    marginLeft: 60,
    marginTop: -25,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 27,
  },
  icon: {
    marginTop: 35,
    marginLeft: 20,

  },
  container: {
    flex:1,
    padding: 0,
  },
  inputContainer: {
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    marginBottom: 20,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth:2,
    borderRadius:4,
    height: 45,
    width: 350,
    borderColor:'#FA8C8E',
    borderTopWidth: 2,
    zIndex: 1,
    overflow: 'visible',
  },
  input: {
    height: 50, 
    fontSize: 14, 
    color: '#000', 
    marginLeft: 20,
    marginBottom: 20,
  }
});
