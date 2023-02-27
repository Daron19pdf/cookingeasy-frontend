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
  },
});
