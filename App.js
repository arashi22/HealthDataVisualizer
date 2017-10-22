/**
 * Health Data visualizer
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configure-store'
import AppWithNavigationState from './src/components/AppNavigator/AppNavigator';
import navReducer from './src/reducers/nav';

export const store = configureStore(navReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}