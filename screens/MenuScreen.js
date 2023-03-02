import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../component/menu';
import Recette from '../component/recette';

export default function MenuScreen({ navigation}) {

  
  return (
    <View style={styles.container}>
      <Menu  />
      <Text style={styles.title}>Menu de la semaine</Text>
      <Recette />
     <View style={styles.container}>
      <Text style={styles.title}>Bonjour !</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:20,
  },
});