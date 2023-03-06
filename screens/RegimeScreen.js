import { StyleSheet, Text, View , TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Progress from 'react-native-progress';
import { useState } from 'react'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector } from 'react-redux';
import user from '../reducers/user';

//import CheckBox from '@react-native-community/checkbox';

export default function RegimeScreen({ navigation }) {
  const BACKEND_ADDRESS = 'https://cookingeasy-backend.vercel.app';

  const user = useSelector((state) => state.user.value);
  console.log(user)
  const [isVegetalien, setVegetalien] = useState(false);
  const [isVegetarien, setVegetarien] = useState(false);
  const [isPescetarien, setPescetarien] = useState(false);
  const [isPorc, setPorc] = useState(false);
  const [isLactose, setLactose] = useState(false);
  const [isGluten, setGluten] = useState(false);
  const [isAlcool, setAlcool] = useState(false);
  const [isNone, setNone] = useState(false);

    const handleValidation = () => {
    fetch(`${BACKEND_ADDRESS}/preferences/regime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        vegetarien: isVegetarien,
        vegetalien: isVegetalien,
        pescetarien: isPescetarien,
        gluten: isGluten,
        porc: isPorc, 
        alcool: isAlcool,
        lactose: isLactose, 
        sansRegimeParticulier : isNone,
        token: user.token
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigation.navigate('AlimentExcluScreen')
    })
    .catch(error => {
      console.error(error);
    });
  };

    const [isPressed, setIsPressed] = useState(false);
  
    const onPressHandler = (regime, setRegime) => {
      setIsPressed(!isPressed);
    };
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Mon Régime Alimentaire</Text>
      <Text style={styles.h1}>Sélectionnez votre régime alimentaire :</Text>
      <View style={styles.CheckBoxContainer}>
        <BouncyCheckbox
          text="Vegetarien"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
          onPress={isVegetarien ? null : setVegetarien(!isVegetarien)}
      />
        <BouncyCheckbox
          text="Vegetalien"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
          onPress={isVegetalien ? null : setVegetalien(!isVegetalien)}
      />
      
      <BouncyCheckbox
          text="Pescetarien"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
          onPress={isPescetarien ? null : setPescetarien(!isPescetarien)}
        />
        <BouncyCheckbox
          text="Sans porc"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
        onPress={isPorc ? null : setPorc(!isPorc)}
      />
      <BouncyCheckbox
          text="Sans lactose"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
        onPress={isLactose ? null : setLactose(!isLactose)}
      />
      <BouncyCheckbox
          text="Sans gluten"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
          onPress={isGluten ? null : setGluten(!isGluten)}
      />
      <BouncyCheckbox
          text="Sans alcool"
          fillColor="red"
          marginBottom={15}
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
         onPress={isAlcool ? null : setAlcool(!isAlcool)}
      />
      <BouncyCheckbox
          text="Sans régime particulier"
          fillColor="red"
          iconStyle={{ borderColor: "red" }}
          textStyle={{ textDecorationLine: 'none' }}
          onPress={isNone ? null : setNone(!isNone)}
      />
        </View>
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.previous} onPress={() => navigation.navigate('EquipementScreen')}>
          <FontAwesome name='arrow-left' size={15} color='#ffff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.next}
          title="Suivant"
          onPress={handleValidation} >
          <Text style={styles.Suivant}>Suivant</Text>
        </TouchableOpacity>
      </View>

      <Progress.Bar width={250}
        borderWidth={1}
        progress={0.75}
        height={15}
        color={'#FA8C8E'}
        indeterminateAnimationDuration={2000} />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  //Style des text (hors titre)
  h1: {
    display: 'flex',
    fontSize: 15,
  },

  //Style container Checkbox
  CheckBoxContainer: {
    justifyContent: 'space-between',
  },

  //Style des CheckBox
  BouncyCheckbox: {
    size: 20,
    unfillColor: "white",
    borderColor: "red",
    borderWidth: 2,
    textDecorationLine: 'none'
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
  bottomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});
