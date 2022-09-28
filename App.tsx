import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/context/auth';
import React from 'react';


export default function App() {
  return (
  <NavigationContainer>
      <AuthProvider>
       <Routes />
      <StatusBar />
    </AuthProvider>
  </NavigationContainer>
  );
}
