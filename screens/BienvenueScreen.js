import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Image,
  ImageBackground,
  Platform,
  TextInput,
  TouchableOpacity,
  Dimensions,

} from "react-native";

import { Video } from "expo-av";
import React, { useRef, useEffect } from "react";

export default function BienvenueScreen({ navigation }) {
 
  const video1 = useRef(null);
  useEffect(() => {
    (async () => {
      if (video1.current !== null) {
        await video1.current.playAsync();
      }
       
    })();
  }, []);

  return (
<View style={styles.container}>
  <Video
    ref={video1}
    source={require("../assets/video.mp4")}
    style={styles.video}
    resizeMode="cover"
    isLooping
  />
  <View style={styles.content}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/COOKING_EASY1.png')}
        style={styles.logo}
      />
    </View>
    <Text style={styles.title}>Bienvenue</Text>
    <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("ConnectionScreen")}
      >
        <Text style={styles.text}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("InscriptionScreen")}
      >
      <Text style={styles.text2}>S'inscrire</Text>
    </TouchableOpacity>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    opacity: 0.9,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
   
    color : "white"
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    
    elevation: 3,
    backgroundColor: "#f4511e",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 13 },
    marginTop : 50
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    
    elevation: 3,
    backgroundColor: "white",
    marginTop: 15,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowRadius: 5,
   

shadowOffset: { width: 1, height: 13 },
},
text: {
fontSize: 16,
lineHeight: 21,
fontWeight: "bold",
letterSpacing: 0.25,
color: "white",
},
text2: {
fontSize: 16,
lineHeight: 21,
fontWeight: "bold"
,
letterSpacing: 0.25,
color: "#f4511e",
},
});