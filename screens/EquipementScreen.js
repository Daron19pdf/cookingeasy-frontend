import React from 'react';
import { Image, View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const BACKEND_ADDRESS = 'http://BACKEND_IP:3000';

export default function EquipementScreen () {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Mes équipements</Text>
      </View>

      <View style={styles.equipement}>

        <View>
          <Image style={styles.four} source={require("../assets/four.png")} />
          <Text style={styles.appareil}>four</Text>
        </View>

        <View>
          <Image
            style={styles.friteuse}
            source={require("../assets/friteuse.png")}/>
          <Text style={styles.appareil}>friteuse</Text>
        </View>

        <View>
          <Image
            style={styles.microOndes}
            source={require("../assets/micro-ondes.png")}/>
          <Text style={styles.appareil}>micro-ondes</Text>
        </View>

        <View>
          <Image
            style={styles.mixeur}
            source={require("../assets/mixeur.png")}/>
          <Text style={styles.appareil}>mixeur</Text>
        </View>

        <View>
          <Image
            style={styles.plaque}
            source={require("../assets/plaquesCuisson.png")}/>
          <Text style={styles.appareil}>plaques de cuisson</Text>
        </View>
      
        <View>
          <Image style={styles.robot} source={require("../assets/robot.png")} />
          <Text style={styles.appareil}>robot</Text>
        </View>
      </View>

      <View style={styles.boutonsbas}>
      <TouchableOpacity onPress={() => {console.log('Le bouton a été appuyé');}} style={styles.suivant} activeOpacity={0.8}>
              <Text style={styles.textButton}>Suivant</Text>
            </TouchableOpacity>
      </View>


      <View> 	
        <Progress.Bar width={250} borderWidth={1} progress={0.2} height={15} color={'#FA8C8E'} indeterminateAnimationDuration={2000} />
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 65,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },

  four: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
   
  },
  friteuse: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  microOndes: {
    width: 150,
    height: 100,

    resizeMode: 'contain',
  },
  mixeur: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  plaque: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  robot: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  equipement: {
 flexDirection: 'row',
 flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    marginTop: 25,
  },

  container: {
    flex:1,
    backgroundColor: 'ffffff',
    alignItems: 'center',
  
  },
  appareil: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  suivant: {
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FA8C8E',
  },
  textButton: {
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
    fontFamily: 'Helvetica',
    },
  });


