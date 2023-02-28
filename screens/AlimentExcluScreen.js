import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredientToStore,
  removeIngredientToStore,
} from "../reducers/ingredient";
import {
  Platform,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function IngredientExclu({ navigation }) {
  const dispatch = useDispatch();
  const TabIngredients = useSelector((state) => state.ingredient.value);
  const [ingredients, setIngredients] = useState("");
  console.log(TabIngredients);

  const handleClick = () => {
    dispatch(addIngredientToStore(ingredients));
    setIngredients("");
  };

  const newIngredient = TabIngredients.map((data, i) => {
    return (
      <View key={i} style={styles.item}>
        <View>
          <Text style={styles.dataText}>{data}</Text>
        </View>
        <FontAwesome
          style={styles.cross}
          name="times"
          onPress={() => dispatch(removeIngredientToStore(data))}
        />
      </View>
    );
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Mes ingrédients à exclure</Text>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Rechercher un ingrédient"
            onChangeText={(value) => setIngredients(value)}
            value={ingredients}
          />
          <TouchableOpacity>
            <Text style={styles.validate} onPress={() => handleClick()}>
              Ok
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>{newIngredient}</View>
        <Text style={styles.exemple}>
          Exemples : Oeuf, ail, fruits sec, etc ...
        </Text>
      </View>
      <Image
        style={styles.assiette}
        source={require("../assets/excluAssiette.png")}
      />
      <View style={styles.botomContainer}>
        <View style={styles.botomButon}>
          <TouchableOpacity
            style={styles.previous} onPress={() => navigation.navigate("RegimeScreen")}
          >
            <FontAwesome name="arrow-left" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next} onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Fin</Text>
            <FontAwesome name="arrow-right" size={15} />
          </TouchableOpacity>
        </View>
        <Progress.Bar
          width={250}
          borderWidth={1}
          progress={0.8}
          height={15}
          color={"#FA8C8E"}
          indeterminateAnimationDuration={2000}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: 30,
  },
  assiette: {
    width: 250,
    height: 250,
  },
  next: {
    flexDirection: "row",
    backgroundColor: "#FA8C8E",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.1)",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  botomButon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    margin: 30,
  },
  buttonText: {
    marginRight: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 300,
    padding: 10,
    borderRadius: 5,
  },
  previous: {
    width: 40,
    height: 40,
    backgroundColor: "#E3C7F9",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  botomContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  exemple: {
    fontSize: 14,
    color: "#A9A9A9",
    marginTop: 20,
    textAlign: "center",
  },
  validate: {
    margin: 5,
  },
  items: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
  },
  cross: {
    marginLeft: 10,
    fontSize: 16,
  },
  dataText: {
    fontSize: 18,
  },
});
