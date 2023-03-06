import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Menu from "../component/menu";
import Recette from "../component/recette";
import { removeRecette } from "../reducers/recette";

export default function MenuScreen({ navigation }) {
  const [recette, setRecette] = useState([]);

  useEffect(() => {
    fetch(
      "http://192.168.1.15:3000/user/user/?token=FRtMxr4qfwowrV26PEGkbS5qNJcKK6Xq"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.preference._id);
        fetch(
          `http://192.168.1.15:3000/menu/recettes?userId=${data.data.preference._id}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            for (let i = 0; i < data.recettes.length; i++) {
              const recettes = {
                title: data.recettes[i].title,
                photo: data.recettes[i].photo,
              };
              if (recette.find((recette) => recette.title === recettes.title)) {
                console.log("recette déjà dans le menu");
              } else {
                setRecette((recette) => [...recette, recettes]);
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }, [NewRecettes]);

  const NewRecettes = recette.map((data, i) => {
    console.log(data);
    return <Recette key={i} title={data.title} photo={data.photo} />;
  });

  return (
    <ScrollView style={styles.container}>
      <Menu />
      <Text style={styles.title}>Menu de la semaine</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {NewRecettes}
      </ScrollView>
      <View style={styles.containerView}>
        <TouchableOpacity
          style={styles.moreRecette}
          onPress={() => navigation.navigate("NewRecetteScreen")}
        >
          <Text style={styles.titleWhite}>Ajouter une recette</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goRecette}
          onPress={() => navigation.navigate("CuisineEtape1Screen")}
        >
          <Text style={styles.titleWhite}>GO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  containerView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  moreRecette: {
    backgroundColor: "#f4511e",
    width: "50%",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  titleWhite: {
    color: "#fff",
    fontSize: 18,
  },
  goRecette: {
    backgroundColor: "#f4511e",
    width: "20%",
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    
  },
});
