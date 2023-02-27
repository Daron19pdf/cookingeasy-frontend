import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';


export default function FoyerScreen({ navigation }) {
    const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.title}>Mon Foyer</Text>
      <Text>Nombre de personnes pour mes recettes</Text>
      <Text style={styles.Number}>{count1}</Text>
      <View style={styles.Button}>
      <Button style={styles.buttonMax}
          title=" + "
          color={'#FA8C8E'}
        onPress={() => setCount1(count1 + 1)}
      />
      <Button style={styles.buttonMin}
          title=" - "
          color={'#FA8C8E'}
        onPress={() => (count1 > 0 && setCount1(count1 - 1))}
      />
      </View>
      <Text>Nombre de recettes pour la semaine</Text>
      <Text style={styles.Number}>{count2}</Text>
      <View style={styles.Button}>
      <Button style={styles.buttonMax}
          title="+"
          color={'#FA8C8E'}
        onPress={() => setCount2(count2 + 1)}
      />
      <Button style={styles.buttonMin}
          title="-"
          color={'#FA8C8E'}
        onPress={() => (count2 > 0 &&setCount2(count2 - 1))}
      />
      </View>
        <View style={styles.botomButon}>
        <TouchableOpacity style={styles.previous} onPress={() => navigation.navigate('InfoScreen')}>
        <FontAwesome name='arrow-left' size={15} />
        </TouchableOpacity>
        <Button style={styles.suivant}
            title="Suivant"
            color={'#FA8C8E'}
        onPress={() => navigation.navigate('EquipementScreen')}
      />
        </View>
         <Progress.Bar width={250} borderWidth={1} progress={0.5} height={15} color={'#FA8C8E'} indeterminateAnimationDuration={2000} />
    </KeyboardAvoidingView>
    );
   }
