import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import PropTypes from 'prop-types';

import Style from './styles'

const ButtonApp = ({ textButton, disabled, onPress }) => (
  <Button 
    style={Style.button} 
    onPress={onPress}
    disabled={disabled}
    block>
    <Text>{textButton}</Text>
  </Button>
)

ButtonApp.propTypes = {
  textButton: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
}

export default ButtonApp