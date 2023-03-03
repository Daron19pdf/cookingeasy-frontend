import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Menu from '../component/menu';
import Recette from '../component/recette';

export default function MenuScreen({ navigation}) {

    const [recette, setRecette] = useState([]);
 
//   const recette = [
//     {
//         id: 1,
//         title: "Lasagnes Bolognaise",
//         image: require("../assets/plats/lasagnes-bolo.jpg"),
//         user: 4,
//         refresh: 0,
//         heart: 0,
//     },
//     {
//         id: 2,
//         title: "Lasagnes Bolognaise",
//         image: require("../assets/plats/lasagnes-bolo.jpg"),
//         user: 4,
//         refresh: 0,
//         heart: 0,
//     },
//     {
//         id: 3,
//         title: "Lasagnes Bolognaise",
//         image: require("../assets/plats/lasagnes-bolo.jpg"),
//         user: 4,
//         refresh: 0,
//         heart: 0,
//     },
//     {
//         id: 4,
//         title: "Lasagnes Bolognaise",
//         image: require("../assets/plats/lasagnes-bolo.jpg"),
//         user: 4,
//         refresh: 0,
//         heart: 0,
//     },
//     // {
//     //     id: 5,
//     //     title: "Lasagnes Bolognaise",
//     //     image: require("../assets/plats/lasagnes-bolo.jpg"),
//     //     user: 4,
//     //     refresh: 0,
//     //     heart: 0,
//     // },
//     // {
//     //     id: 6,
//     //     title: "Lasagnes Bolognaise",
//     //     image: require("../assets/plats/lasagnes-bolo.jpg"),
//     //     user: 4,
//     //     refresh: 0,
//     //     heart: 0,
//     // },
// ];


fetch('http://192.168.10.143:3000/user/user/?token=yVdFZY5_i_LLMB1lvOcRGXoOBwS1MzwK')
.then((response) => response.json())
.then((data) => {
    fetch(`http://192.168.10.143:3000/menu/recettes?userId=6400daf1ffdb77e94203c1eb`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const recettes = {
            title: data.title,
            photo: data.photo,
        }
        
    })
})
.catch((error) => {
    console.error(error);
});







const NewRecettes = recette.map((data, i) => {
    return <Recette key={i} data={data} />;
});

  return (
    <ScrollView style={styles.container}>
      <Menu  />
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
});