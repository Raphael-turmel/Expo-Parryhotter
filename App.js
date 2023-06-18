import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Products from './components/products';
import AddProduct from './components/addProduct';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Add Product">
        <Tab.Screen name="Add product" component={AddProduct} />
        <Tab.Screen name="Products" component={Products} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
