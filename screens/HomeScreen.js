import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Menu from '../component/menu';

export default function HomeScreen({ navigation}) {
  const User = useSelector((state) => state.user.value);
  return (
    <View style={styles.container}>
      <Menu  />
     <View style={styles.container}>
      <Text>Bonjour {User.pseudo} !</Text>
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



