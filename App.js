/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import Router from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="rgb(29, 157, 158)" barStyle='light-content' />
      <Router />
    </>
  );
};

export default App;
