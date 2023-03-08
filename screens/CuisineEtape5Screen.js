import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Menu from '../component/menu';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { colors } from 'react-native-elements';

export default function CuisineEtape1Screen({ navigation}) {
  const BACKEND_ADDRESS = "https://cookingeasy-backend.vercel.app/";
  const recette = useSelector((state) => state.recette.value);
  const [steps, setSteps] = useState([]);
  
  //rendre accessible le titre de la recette car on ne peut pas envoyer en l'état dans le fetch
 let titleList = []
 for (let x=0 ; x < recette.length; x++) {
    titleList.push(recette[x].recettes[x].title)
  }
  titleList = titleList.map((e) => JSON.stringify(e));

  // Recupérer les étapes de la recette
  fetch(`${BACKEND_ADDRESS}menuTer/miseenoeuvre?recettesList=[${titleList}]`)
    .then((response) => response.json())
    .then((data) => {
      for (let x=0 ; x < data.steps.remise_en_oeuvre.length; x++) {
      //console.log(data.steps.remise_en_oeuvre[x]);
      const Recipe = {
        action: data.steps.remise_en_oeuvre[x].step.action,
        duration: data.steps.remise_en_oeuvre[x].step.duration,
        title: data.steps.remise_en_oeuvre[x].recette_title,
      }
      //console.log(data.steps);
      if (steps.find((steps) => steps.target === Recipe.target)) {
        return;
      } else {
        setSteps((prev) => [...prev, Recipe]);
      }
    }
    })
    .catch((error) => {
      console.error(error);
    });

    const renderSteps = steps.map((step,i) => {
      return (
        <View key={i} style={styles.steps} backgroundColor={steps.colors}>
          <Text style={styles.titleComponent}>{step.title}</Text>
          <Text style={styles.texte}>{step.action} {step.target}</Text>
          <Text style={styles.texte}>{step.duration} min</Text>
        </View>
      )
      
    })

  return (
    <ScrollView style={styles.container}>
      <Menu  />
         <View style={styles.generalContainer}>
             <Text style={styles.title}>Je cuisine</Text>
             <Text style={styles.title}>Etape 5 : Remise en oeuvre </Text>
        {renderSteps}
          <View style={styles.btnContainer}>
             <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("CuisineEtape4Screen")}>
                 <FontAwesome name="toggle-left" size={16} color='#fff' style={styles.icon}/>
                 <Text style={styles.textWhite}>Etape précédente </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("ConservationScreen")}>
                  <Text style={styles.textWhite}>Etape suivante </Text>
                  <FontAwesome name="toggle-right" size={16} color='#fff' style={styles.icon}/>
             </TouchableOpacity>
           </View>
          </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  generalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin:20,
    textAlign: 'center',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45%",
    height: 50,
    backgroundColor: '#f4511e',
    borderRadius: 15,
    margin: 5,
  
  },
  textWhite: {
    color: '#fff',
    fontSize: 18,
    margin: 5,
  },
  steps: {
    width: 300,
    borderRadius: 15,
    borderColor: '#f4511e',
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texte: {
    fontSize: 20,
    margin: 10,
  },
  titleComponent: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});