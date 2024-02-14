import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import DetailsScreen from './Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
         <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
