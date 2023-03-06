// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import Menu from '../component/menu';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default function CuisineEtape2Screen({ navigation }) {
//   const [steps, setSteps] = useState({});
//   const recettes = useSelector((state) => state.recette.value);

//   useEffect(() => {
//     const recettesList = recettes.map((recette) => recette.title);

//     fetch(`http://192.168.10.150:3000/menuTer/miseenoeuvre?recettesList=${JSON.stringify(recettesList)}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSteps(data.steps);
//         console.log("steps:", data.steps); 
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [recettes]);

  

//   return (
//     <ScrollView style={styles.container}>
//       <Menu />
//       <View style={styles.generalContainer}>
//         <Text style={styles.title}>Je cuisine</Text>
//         <Text style={styles.title}>Etape 2</Text>

//         {steps.prep && (
//           <View style={styles.steps}>
//             <Text style={styles.stage}>Préparation</Text>
//             {steps.prep.map((step) => (
//               <View key={step.recette_id + step.step.steps}>
//                 <Text>{step.recette_title}</Text>
//                 <Text>{step.step.steps}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {steps.cuisson && (
//           <View style={styles.steps}>
//             <Text style={styles.stage}>Cuisson</Text>
//             {steps.cuisson.map((step) => (
//               <View key={step.recette_id + step.step.steps}>
//                 <Text>{step.recette_title}</Text>
//                 <Text>{step.step.steps}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {steps.assemblage && (
//           <View style={styles.steps}>
//             <Text style={styles.stage}>Assemblage</Text>
//             {steps.assemblage.map((step) => (
//               <View key={step.recette_id + step.step.steps}>
//                 <Text>{step.recette_title}</Text>
//                 <Text>{step.step.steps}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {steps["cuisson finale"] && (
//           <View style={styles.steps}>
//             <Text style={styles.stage}>Cuisson finale</Text>
//             {steps["cuisson finale"].map((step) => (
//               <View key={step.recette_id + step.step.steps}>
//                 <Text>{step.recette_title}</Text>
//                 <Text>{step.step.steps}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {steps["remise en oeuvre"] && (
//           <View style={styles.steps}>
//             <Text style={styles.stage}>Remise en oeuvre</Text>
//             {steps["remise en oeuvre"].map((step) => (
// <View key={step.recette_id + step.step.steps}>
// <Text>{step.recette_title}</Text>
// <Text>{step.step.steps}</Text>
// </View>
// ))}
// </View>
// )}
// <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate("NewRecetteScreen")}>
//       <Text style={styles.textWhite}>Etape suivante </Text>
//       <FontAwesome name="toggle-right" size={16} color='#fff' style={styles.icon}/>
//     </TouchableOpacity>
//   </View>
// </ScrollView>
// )
// }

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// },
// generalContainer: {
// flex: 1,
// alignItems: 'center',
// justifyContent: 'center',
// },
// title: {
// fontSize: 30,
// fontWeight: 'bold',
// margin:20,
// textAlign: 'center',
// },
// nextBtn: {
// flexDirection: 'row',
// alignItems: 'center',
// justifyContent: 'center',
// width: 200,
// height: 80,
// backgroundColor: '#f4511e',
// borderRadius: 15,
// margin: 15,
// },
// textWhite: {
// color: '#fff',
// fontSize: 18,
// },
// steps: {
// marginVertical: 10,
// padding: 20,
// backgroundColor: '#f9f9f9',
// borderRadius: 15,
// },
// stage: {
// fontSize: 20,
// fontWeight: 'bold',
// marginBottom: 10,
// },
// });


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from '../component/menu';

export default function CuisineEtape2Screen({ navigation }) {
  const [steps, setSteps] = useState({});
  const recettes = useSelector((state) => state.recette.value);

  useEffect(() => {
    const recettesList = recettes.map((recette) => recette.title);

    fetch(`http://192.168.10.150:3000/menuTer/miseenoeuvre?recettesList=${JSON.stringify(recettesList)}`)
      .then((response) => response.json())
      .then((data) => {
        setSteps(data.steps);
        console.log("steps:", data.steps); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [recettes]);

  return (
    <ScrollView style={styles.container}>
      <Menu />
      <View style={styles.generalContainer}>
        <Text style={styles.title}>Je cuisine</Text>
        <Text style={styles.title}>Etape 2</Text>

        {steps.prep && steps.prep.length > 0 && (
          <View style={styles.steps}>
            <Text style={styles.stage}>Préparation</Text>
            {steps.prep.map((step) => (
              <View key={step.recette_id + step.step.steps}>
                <Text>{step.recette_title}</Text>
                <Text>{step.step.steps}</Text>
              </View>
            ))}
          </View>
        )}
        {!steps.prep || steps.prep.length === 0 ? (
          <Text style={styles.error}>Aucune étape de préparation trouvée</Text>
        ) : null}
      </View>
    </ScrollView>
  );
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
    width: 200,
    height: 80,
    backgroundColor: '#f4511e',
    borderRadius: 15,
    margin: 15,
  },
  textWhite: {
    color: '#fff',
    fontSize: 18,
  },
  steps: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
  },
  stage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});