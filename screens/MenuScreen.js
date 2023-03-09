import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import Menu from '../component/menu';
import Recette from '../component/recette';
import {  useDispatch, useSelector } from "react-redux";
import {addRecette} from '../reducers/recette';

export default function MenuScreen({ navigation}) {
    const BACKEND_ADDRESS = 'https://cookingeasy-backend.vercel.app/';
    const dispatch = useDispatch();
    const [recette, setRecette] = useState([]);
    const [NbrRecette, setNbrRecette] = useState(0);
    const [NbrPersonne, setNbrPersonne] = useState(0);
    const User = useSelector((state) => state.user.value);
   //console.log(User.token);

   let Stoken = "ii8V8wTkU-YR47Tu1iIPR3kQ4_L5NPZm"
   let userId = "640757eb627d15842471ae81"
   let blah = "http://192.168.30.111:3000/"
      
  //récupère les recettes



useEffect(() => { 

  fetch(`${BACKEND_ADDRESS}user/user/?token=ii8V8wTkU-YR47Tu1iIPR3kQ4_L5NPZm`)
  .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      dispatch(addRecette(data)); 
      for (let i = 0; i < 5; i++) {
        const recettes = {
          title: data.recettes[i].title,
          photo: data.recettes[i].photo,   
          prep_duration: data.recettes[i].prep_duration,
          cook_duration: data.recettes[i].cook_duration,
          steps: data.recettes[i].steps,
          ingredients: data.recettes[i].ingredients,
          servings: data.recettes[i].servings,
          description: data.recettes[i].description,
      }
      if (recette.find((recette) => recette.title === recettes.title)) {
        return;
      } else {
        setRecette((recette) => [...recette, recettes]);
      }
    }
    })
.catch((error) => {
    console.error(error);
});
}
);
 

  //génère les recettes
  let NewRecettes = (<ActivityIndicator style={styles.load} size="large"  color="red" />)
  if (recette.length > 0) {
 NewRecettes = recette.map((data, index) => {
    return <Recette key={index} title={data.title} photo={data.photo} prep_duration={data.prep_duration} cook_duration={data.cook_duration} steps={data.steps} ingredients={data.ingredients} servings={data.servings} description={data.description} NbrPersonne={NbrPersonne}  />;
});
  }

  return (
    <ScrollView style={styles.container}>
      <Menu  />
      {/* <Image style={styles.image} source={require('../assets/homer.gif')} /> */}
      <View style={[styles.container, styles.horizontal]}>
    
  </View>
      <Text style={styles.title}>Menu de la semaine</Text>
         <ScrollView contentContainerStyle={styles.contentContainer}>
           {NewRecettes}
           </ScrollView>
     <View style={styles.containerView}>
         <TouchableOpacity style={styles.moreRecette} onPress={() => navigation.navigate("NewRecetteScreen")}>
            <Text style={styles.titleWhite}>Ajouter une recette</Text>
         </TouchableOpacity>
          <TouchableOpacity style={styles.goRecette} onPress={() => navigation.navigate("CuisineEtape1Screen")} >
              <Text style={styles.titleWhite}>GO</Text>
         </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:20,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  moreRecette: {
    backgroundColor: '#f4511e',
    width: "50%",
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  titleWhite: {
    color: '#fff',
    fontSize: 18,
  },
  goRecette: {
    backgroundColor: '#f4511e',
    width: "20%",
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  load: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});