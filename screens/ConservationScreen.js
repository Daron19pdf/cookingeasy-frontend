import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Menu from '../component/menu';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CuisineEtape1Screen({ navigation}) {
 
  const BACKEND_ADDRESS = "https://cookingeasy-backend.vercel.app/";
  const recette = useSelector((state) => state.recette.value);
  const [ right, setRight ] = useState(false)
  
  sToken = 'FRtMxr4qfwowrV26PEGkbS5qNJcKK6Xq'
  
  let conservationElement = []
  for (let i = 0; i < recette[0].recettes.length; i++) {
    const encart = {
     title: recette[0].recettes[i].title,
     photo: recette[0].recettes[i].photo,
     conservation: recette[0].recettes[i].preservation_duration,
    }
    conservationElement.push(encart)
  }
  

  console.log(conservationElement);

    const renderConservation = conservationElement.map((data,i) => {
      console.log(data);
      
       
      return (
        <View key={i} style={styles.containerConservation} >
          <Image source={{uri: data.photo}} style={styles.image} />
          <View style={styles.titreContainer}>
          <Text style={styles.titre}>{data.title}</Text>
          <Text style={styles.texteInside}>{data.conservation}</Text>
          </View>
        </View>
      )
      
    })

  return (
    <ScrollView style={styles.container}>
      <Menu  />
         <View style={styles.generalContainer}>
             <Text style={styles.title}>C'est fini</Text>
             <Text style={styles.title}>Je conserve mes plats</Text>
             <Text >Laissez refroidir (pas plus de 2h). On ferme tout hermétiquement ou on met sous vide</Text>
        {renderConservation}
          <View style={styles.btnContainer}>
             <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("CuisineEtape4Screen")}>
                 <FontAwesome name="toggle-left" size={16} color='#fff' style={styles.icon}/>
                 <Text style={styles.textWhite}>Etape précédente </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("FelicitationsScreen")}>
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
    fontSize: 30,
    fontWeight: 'bold',
    margin:20,
    textAlign: 'center',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "45%",
    height: 80,
    backgroundColor: '#f4511e',
    borderRadius: 15,
    margin: 5,
  
  },
  textWhite: {
    color: '#fff',
    fontSize: 18,
    margin: 5,
  },
  containerConservation: {
    width: '80%',
    borderRadius: 15,
    borderColor: '#f4511e',
    borderWidth: 2,
    margin: 10,
    flexDirection: 'row',
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 10,
  },
  titre: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 180,
  },
  titreContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  texteInside: {
    fontSize: 14,
    textAlign: 'center',
  },
});