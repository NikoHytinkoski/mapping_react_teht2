import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker } from 'react-native-maps';
import LoginScreen from './fields/LoginScreen';
import HomeScreen from './fields/HomeScreen';
import * as Location from 'expo-location';
import Maps from './fields/Maps';
import Constants from 'expo-constants';

const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Kirjaudu" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Kartat" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}