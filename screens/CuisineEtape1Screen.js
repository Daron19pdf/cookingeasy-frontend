import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../component/menu';

export default function CuisineEtape1Screen({ navigation}) {
  return (
    <View style={styles.container}>
      <Menu  />
     <View style={styles.container}>
      <Text>Favoris</Text>
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
});