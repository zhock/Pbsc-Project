import React from "react";
import { View, Animated } from "react-native";
import posed from "react-native-pose";
import { Icon } from 'native-base';
import Style from './styles'

const SuccessView = posed.View({
  
  visible: {
    opacity: 1,
    scaleY: 1,
    rotate: '360deg',    
    transition: {      
      opacity: { ease: 'easeOut', duration: 900 },
      default: { type: 'spring', stiffness: 900 }
    }
  }
});

export default ({ isVisible }) => (
  <SuccessView pose={isVisible ? "visible" : "hidden"}>
    <Icon style={Style.bigIcon} type="FontAwesome" name="paper-plane" />
  </SuccessView>
);