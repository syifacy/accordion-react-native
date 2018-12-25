/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FancyBoard from './src/Screen/FancyBoard';
import ScrollAccordion from './src/Screen/ScrollAccordion';




export default class App extends Component{
  render() {
    return (
     
        <ScrollAccordion />
      
    );
  }
}

