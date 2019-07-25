import React, { Component } from 'react';
import { View } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { Container, Text } from 'native-base';

import SuccessView from "../components/Success/";
import Style from './styles'

export default class RecoverSuccess extends Component {
  constructor(props){
    super(props) 
    this.state = {
      isVisible: false
    }; 
  }

  componentDidMount() {
    setTimeout(() => {this.setState({isVisible: true})}, 800)
  }
  render(){
    const { isVisible } = this.state;
    const navigation = this.props.navigation
    const message = navigation.state.params.msg
    return(
      <Container>
        <Grid style={Style.grid}>
          <Row>              
              <View style={Style.success}>               
                <SuccessView isVisible={isVisible} />                           
                <Text style={Style.successMsg}>{message}</Text>
              </View>
          </Row>
        </Grid>
      </Container>
    )
  }  
}