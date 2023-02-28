import { StyleSheet, Text, View , TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Progress from 'react-native-progress';
import { useState } from 'react'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function FoyerScreen({ navigation }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Mon Foyer</Text>
        {/* Ajout du nombre de personnes*/}
        <Text style={styles.h1}>Nombre de personnes pour mes recettes :</Text>
      <View style={styles.Button}>
      <TouchableOpacity style={styles.buttonMax}
          title= "+"
            onPress={() => setCount1(count1 + 1)} >
          <Text style={styles.Operator}>+</Text>
          </TouchableOpacity>
        <Text style={styles.Number}>{count1}</Text>
      <TouchableOpacity style={styles.buttonMin}
          title= "-"
            onPress={() => (count1 > 0 && setCount1(count1 - 1))} >
            <Text style={styles.Operator}>-</Text>
          </TouchableOpacity>
        </View>
        {/* Ajout du nombre de recette*/}
      <Text style={styles.h1} >Nombre de recettes pour la semaine :</Text>
      <View style={styles.Button}>
          <TouchableOpacity style={styles.buttonMax}
          title= "+"
            onPress={() => setCount2(count2 + 1)} >
          <Text style={styles.Operator}>+</Text>
          </TouchableOpacity>
      <Text style={styles.Number}>{count2}</Text>
      <TouchableOpacity style={styles.buttonMin}
          title= "-"
            onPress={() => (count2 > 0 && setCount2(count2 - 1))} >
            <Text style={styles.Operator}>-</Text>
          </TouchableOpacity>
        </View>
          {/* Ajout des boutons Suivant et Retour*/}
        <View style={styles.botomButon}>
        <TouchableOpacity style={styles.previous} onPress={() => navigation.navigate('InfoScreen')}>
            <FontAwesome name='arrow-left' size={15} color='#ffff' />
          </TouchableOpacity>

        <TouchableOpacity style={styles.next}
            title="Suivant"
            onPress={() => navigation.navigate('EquipementScreen')} >
            <Text style={styles.Suivant}>Suivant</Text>
            </TouchableOpacity>
        </View>

         <Progress.Bar width={250} borderWidth={1} progress={0.5} height={15} color={'#FA8C8E'} indeterminateAnimationDuration={2000} />
    </KeyboardAvoidingView>
    );
   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
//Style des text hors titre
  h1: {
    display: 'flex',
    fontSize: 15,
  },
//Style du nombre
  Number: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
//Style de + et -
  Operator: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
//Style des boutons
  Button: {
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 100,
  },
//Style du bouton +
  buttonMax: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#FA8C8E',
    borderRadius: 60,
    width: 40,
    marginRight: 10,
  },
//Style du Bouton -
  buttonMin: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#FA8C8E',
    borderRadius: 60,
    width: 40,
    marginLeft: 10,
  },
//Style du bouton Suivant
  next: {
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FA8C8E',
  },
//Style du text "suivant"
  Suivant: {
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
  },
//Style du bouton précedent
  previous: {
    width: 40,
    height: 40,
    backgroundColor: '#E3C7F9',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
//Style des boutons inférieurs
  botomButon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom:5,
  },
});