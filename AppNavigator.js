import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="THE MOVIE DB" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;