import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useSelector } from "react-redux";

const BACKEND_ADDRESS = "https://cookingeasy-backend.vercel.app";

export default function EquipementScreen({ navigation }) {
  const [isFourClicked, setIsFourClicked] = useState(false); // Ajout d'un état local pour indiquer si l'image du four a été cliquée ou non
  const [isFriteuseClicked, setIsFriteuseClicked] = useState(false);
  const [isMicroOndesClicked, setIsMicroOndesClicked] = useState(false);
  const [isMixeurClicked, setIsMixeurClicked] = useState(false);
  const [isPlaqueClicked, setIsPlaqueClicked] = useState(false);
  const [isRobotClicked, setIsRobotClicked] = useState(false);
  const user = useSelector((state) => state.user.value);

  const selectedEquipements = [];

  if (isFourClicked) selectedEquipements.push("four");
  if (isFriteuseClicked) selectedEquipements.push("friteuse");
  if (isMicroOndesClicked) selectedEquipements.push("microOndes");
  if (isMixeurClicked) selectedEquipements.push("mixeur");
  if (isPlaqueClicked) selectedEquipements.push("plaque");
  if (isRobotClicked) selectedEquipements.push("robot");

  const handleNextPress = () => {
    fetch(`${BACKEND_ADDRESS}/preferences/equipement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        four: isFourClicked,
        mixeur: isMixeurClicked,
        plaque: isPlaqueClicked,
        friteuse: isFriteuseClicked,
        robot: isRobotClicked,
        microondes: isMicroOndesClicked,
        token: user.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    navigation.navigate("RegimeScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Mes équipements</Text>
      </View>

      <View style={styles.equipement}>
        <TouchableOpacity onPress={() => setIsFourClicked(!isFourClicked)}>
          <Image
            style={[styles.four, isFourClicked && styles.fourClicked]}
            source={require("../assets/four.png")}
          />
          <Text style={styles.appareil}>four</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsFriteuseClicked(!isFriteuseClicked)}
        >
          <Image
            style={[
              styles.friteuse,
              isFriteuseClicked && styles.friteuseClicked,
            ]}
            source={require("../assets/friteuse.png")}
          />
          <Text style={styles.appareil}>friteuse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsMicroOndesClicked(!isMicroOndesClicked)}
        >
          <Image
            style={[
              styles.microOndes,
              isMicroOndesClicked && styles.microOndesClicked,
            ]}
            source={require("../assets/micro-ondes.png")}
          />
          <Text style={styles.appareil}>micro-ondes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsMixeurClicked(!isMixeurClicked)}>
          <Image
            style={[styles.mixeur, isMixeurClicked && styles.MixeurClicked]}
            source={require("../assets/mixeur.png")}
          />
          <Text style={styles.appareil}>mixeur</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPlaqueClicked(!isPlaqueClicked)}>
          <Image
            style={[styles.plaque, isPlaqueClicked && styles.PlaqueClicked]}
            source={require("../assets/plaquesCuisson.png")}
          />
          <Text style={styles.appareil}>plaques de cuisson</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsRobotClicked(!isRobotClicked)}>
          <Image
            style={[styles.robot, isRobotClicked && styles.RobotClicked]}
            source={require("../assets/robot.png")}
          />
          <Text style={styles.appareil}>robot</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boutonsbasContainer}>
        <View style={styles.boutonsbas}>
          <TouchableOpacity
            style={styles.previous}
            onPress={() => navigation.navigate("FoyerScreen")}
          >
            <FontAwesome name="arrow-left" size={15} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.suivant}
            activeOpacity={0.8}
            onPress={handleNextPress}
          >
            <Text style={styles.textButton}>Suivant</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Progress.Bar
          width={250}
          borderWidth={1}
          progress={0.5}
          height={15}
          color={"#f4511e"}
          indeterminateAnimationDuration={2000}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
    fontWeight: "bold",
  },

  four: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  fourClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  friteuseClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  microOndesClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  MixeurClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  PlaqueClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  RobotClicked: {
    // Ajout du style pour la bordure ombrée
    borderColor: "#E3C7F9",
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: "#E3C7F9",
    //shadowOffset: { width: 5, height: 5 },
    //shadowOpacity: 0.8,
    //shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
  },

  friteuse: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  microOndes: {
    width: 150,
    height: 100,

    resizeMode: "contain",
  },
  mixeur: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  plaque: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  robot: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  equipement: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
    marginTop: 25,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  appareil: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
  },
  suivant: {
    width: "40%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#f4511e",
  },
  textButton: {
    fontSize: 20,
    color: "white",
    padding: 10,
  },
  previous: {
    width: 40,
    height: 40,
    backgroundColor: "#E3C7F9",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  boutonsbas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    margin: 30,
  },
  boutonsbasContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});
