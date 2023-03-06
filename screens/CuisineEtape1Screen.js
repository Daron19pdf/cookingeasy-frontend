import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Menu from '../component/menu';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CuisineEtape1Screen({ navigation}) {

  const recette = useSelector((state) => state.recette.value);
  const User = useSelector((state) => state.user);
  
 // console.log(recette[0].recettes[0].steps[0]);

  // attente de voir si necessaire de fetch les recettes
  // fetch(`http://192.168.1.250:3000/menu/recettes?userId=6401d2181f8665b3bd8b0e1c`)
  // .then((response) => response.json())
  // .then((data) => {
  //   if(data) {
  //    // console.log(data.recettes[0].steps);
  //   } else {
  //     console.log("error");
  //   }
  //   }
  // ) 
  // .catch((error) => {
  //     console.error(error);
  // });

  // for (let i = 0; i < recette.length; i++) {
  //   for (let j = 0; j < recette[i].recettes.length; j++) {
  //     for (let k = 0; k < recette[i].recettes[j].steps.length; k++) {
  //       console.log(recette[i].recettes[j].steps[k].stage);
  //       return (
  //         <View style={styles.generalContainer}>
  //           <Text>{recette[i].recettes[j].steps[k].steps}</Text>
  //         </View>
  //       )
  //     }
  //   }
  // }

  let blah = []
  const Test = recette.map((item, i) => {
    //console.log(item.recettes[0]);
    for (let x=0 ; x < 2; x++) {
      //console.log(item.recettes[0].steps[x]);
      blah.push(item.recettes[x].title)
      return (
        <View style={styles.generalContainer}>
          <Text>{item.recettes[x].steps[0].steps}</Text>
        </View>
      )
    }
  })

  //console.log(blah);
 
  //console.log(Test);


  return (
    <ScrollView style={styles.container}>
    <Menu  />
    <View style={styles.generalContainer}>
    <Text style={styles.title}>Je cuisine</Text>
    <Text style={styles.title}>Etape 1</Text>
    <Text>{Test}</Text>
    <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("NewRecetteScreen")}>
      <Text style={styles.textWhite}>Etape suivante </Text>
      <FontAwesome name="toggle-right" size={16} color='#fff' style={styles.icon}/>
    </TouchableOpacity>
   
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
    fontSize: 30,
    fontWeight: 'bold',
    margin:20,
    textAlign: 'center',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 80,
    backgroundColor: '#f4511e',
    margin: 15,
  },
  textWhite: {
    color: '#fff',
    fontSize: 18,
  },
  steps: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f4511e',
    borderRadius: 15,
  },
});