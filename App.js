import { StatusBar } from 'expo-status-bar';
import React from 'react';

import 'react-native-gesture-handler';

import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
<AppNavContainer/>
    </GlobalProvider>
   

  );
}


export default App;