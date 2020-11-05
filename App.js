/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar
} from 'react-native';
import Home from './src/screen/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="rgb(29, 157, 158)" barStyle='light-content' />
      <Home />
    </>
  );
};

export default App;
