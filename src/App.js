import React, { Component, Fragment } from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import { Root } from 'native-base'
import Navigation from './navigation';

console.disableYellowBox = true

export default class App extends Component{
  render(){
    return (
    <Root>
         <Navigation />
    </Root>
           
    )
  }
}
