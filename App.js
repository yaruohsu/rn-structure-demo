/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import JsonPlaceholderRepository from './src/core/data/api/JsonPlaceholderRepository';
import HomeScreen from './src/screen/HomeScreen';

const App = () => {
  JsonPlaceholderRepository.getTodos(1)
  return (
    <HomeScreen />
  );
};

export default App;
