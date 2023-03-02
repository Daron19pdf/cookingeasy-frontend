import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Menu from '../component/menu';

export default function MenuScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Menu  />
      <Text>Menu de la semaine</Text>
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
});