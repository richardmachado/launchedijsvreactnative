
import React from 'react';

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/HomeScreen";
import Temas from "./Screens/Temas";
import BiblesScreen from "./Screens/BiblesScreen";
import EnglishOldTestament from "./Screens/Bibles/EnglishOldTestament";
import EnglishNewTestament from "./Screens/Bibles/EnglishNewTestament";
import SpanishOldTestament from "./Screens/Bibles/SpanishOldTestament";
import SpanishNewTestament from "./Screens/Bibles/SpanishNewTestament";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Temas" component={Temas} />
        <Stack.Screen name="Bibles" component={BiblesScreen} />
        <Stack.Screen
          name="EnglishOldTestament"
          component={EnglishOldTestament}
        />
        <Stack.Screen
          name="EnglishNewTestament"
          component={EnglishNewTestament}
        />
        <Stack.Screen
          name="Spanish Old Testament"
          component={SpanishOldTestament}
        />
        <Stack.Screen
          name="SpanishNewTestament"
          component={SpanishNewTestament}
        />
      </Stack.Navigator>
</NavigationContainer>
  );
}

