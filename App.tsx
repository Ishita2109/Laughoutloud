/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './screens/homepage';
import JokesListScreen from './screens/JokesListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="JokesList" component={JokesListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
