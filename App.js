// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Apps/Routes/Index';


function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
