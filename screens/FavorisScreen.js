import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Menu from '../component/menu';
import LikedRecetteComponent from '../component/LikedRecette';


export default function FavorisScreen({ props }) {

  const Liked = useSelector((state) => state.recette.liked);
  let Recipes = <Text>Vous n'avez encore rien enregistré</Text>;
  
 

  return (
    <View style={styles.container}>
      <ScrollView>
      <Menu/>
     <View style={styles.content}>
      <Text style={styles.title}>Mes recettes préférées</Text>
      {Recipes}
      <LikedRecetteComponent />
      </View>
      </ScrollView>
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
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
  },
});