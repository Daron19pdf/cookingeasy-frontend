import { StyleSheet, Text, View , TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Progress from 'react-native-progress';
import { useState } from 'react'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";
//import CheckBox from '@react-native-community/checkbox';

export default function RegimeScreen({ navigation }) {
  //const [isSelected, setSelection] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Mon Régime Alimentaire</Text>
      <Text style={styles.h1}>Sélectionnez votre régime alimentaire :</Text>
      <View style={styles.CheckBoxContainer}>
      <BouncyCheckbox
          text="Vegan"
          onPress={(isChecked: Boolean) => {}}
      />
      <BouncyCheckbox
          text="Végétarien"
          onPress={(isChecked: boolean) => { }}
      />
      <BouncyCheckbox
          text="Péscétarien"
          onPress={(isChecked: boolean) => { }}
        /><BouncyCheckbox
        text="Sans porc"
        onPress={(isChecked: boolean) => { }}
      />
      <BouncyCheckbox
          text="Sans gluten"
          onPress={(isChecked: boolean) => { }}
      />
      <BouncyCheckbox
          text="Sans lactose"
          onPress={(isChecked: boolean) => { }}
      />
      <BouncyCheckbox
         onPress={(isChecked: boolean) => { }}
        text="Sans alcool"
      />
      <BouncyCheckbox
          text="Sans régime particulier"
          onPress={(isChecked: boolean) => { }}
        />
        </View>
      <View style={styles.botomButon}>
        <TouchableOpacity style={styles.previous} onPress={() => navigation.navigate('EquipementScreen')}>
          <FontAwesome name='arrow-left' size={15} color='#ffff' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.next}
          title="Suivant"
          onPress={() => navigation.navigate('AlimentExcluScreen')} >
          <Text style={styles.Suivant}>Suivant</Text>
        </TouchableOpacity>
      </View>

      <Progress.Bar width={250} borderWidth={1} progress={0.75} height={15} color={'#FA8C8E'} indeterminateAnimationDuration={2000} />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  //Style container Checkbox
  CheckBoxContainer: {
    padding: 5,
  },
  //Style des CheckBox
  BouncyCheckbox: {
    size: 20,
    fillColor: "red",
    unfillColor: "white",
    borderColor: "red",
    borderWidth: 2,
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
    marginBottom: 5,
  },
});
