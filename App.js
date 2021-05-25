import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home/Home';
import BollywoodMovie from './components/Home/BollywoodMovie/BollywoodMovie';
import SinglePageMovie from './components/Shared/SingleMoviePage';
import MovieLinks from './components/Shared/MovieList/MovieLinks';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BollywoodMovie" component={BollywoodMovie} />
        <Stack.Screen name="SinglePage" component={SinglePageMovie} />
        <Stack.Screen name="DownloadPage" component={MovieLinks} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
