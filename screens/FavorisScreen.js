import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../component/menu';
import LikedRecette from '../component/LikedRecette';

export default function FavorisScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Menu/>
     <View style={styles.content}>
      <Text style={styles.title}>Mes recettes préférées</Text>
      <LikedRecette/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
});