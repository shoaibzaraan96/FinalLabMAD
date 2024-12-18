
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/navigation'; 
import supabase from './supabase'; 

export default function App() {
  console.log('Supabase Client:', supabase); 
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
