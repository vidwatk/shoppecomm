//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


//Navigator
import Main from './Navigators/Main';


//Screens
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from './Shared/Header';


export default function App() {
  return (
    <NavigationContainer>
        <Header />
        <Main />
    </NavigationContainer>
    
  );
}

