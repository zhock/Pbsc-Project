import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Icon, Input } from 'native-base';
import PropTypes from 'prop-types';

import Style from './styles'

const InputApp = ({ 
    placeholder, 
    icon,
    maxLength,
    autoCapitalize,
    value = '',
    onChangeText
  }) => (
  <Item>
    <Icon style={Style.icon} active type="EvilIcons" name={icon} />
    <Input 
      placeholder={placeholder} 
      autoCorrect={false}
      autoCapitalize={autoCapitalize}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
    />
  </Item>
)

InputApp.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default InputApp