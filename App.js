import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IngredientScreen from './screens/AlimentExcluScreen';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ingredient from './reducers/ingredient';


const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: {ingredient},
 });

export default function App() {
  

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Exclu" component={IngredientScreen} />
       </Stack.Navigator>
       </NavigationContainer>
      </Provider>
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
  display: 'flex',
  width: '80%',
  fontSize: 35,
  fontWeight: '600',
  justifyContent: 'center',
  marginTop: 50,
  },
  Number: {
    fontSize: 30,
  },
  Button: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 100,
  },
  buttonMax: {
    width: 100,
    marginRight: 20,
  },
  buttonMin: {
    width: 150,
    marginLeft: 20,

  },
  botomButon: {
    flexDirection: 'row',
    alignItems: 'space-around',
    marginRight: 20,
    marginLeft: 20,
  },
});
