import React, { Component } from 'react';
import { View } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, Text, H2, Spinner } from 'native-base';

import ButtonApp from '../components/Button/';
import InputApp from '../components/Input/';
import recoverService from '../services/recoverPassword/'
import Style from './styles'
import { config } from '../services/config/'
import { validateEmail } from '../services/utilities/'

export default class RecoverPassword extends Component {
  constructor (props) {
    super(props)  
    this.state = {
      isLoading: false,
      email: ''      
    }
  }

  handleSubmit = async () => {        
    this.setState({ isLoading: true })
    const { email } = this.state;
    const validateValue = validateEmail(email);

    if (validateValue === true){
      const data = await recoverService(email);

      if (data.status === 200){
        const { navigation } = this.props;
        navigation.navigate('Success', { msg: data.message});
        this.setState({errorMsg:'', isLoading: false});
      }else this.setState({errorMsg: config.errorMsg[data.status], isLoading: false});

    }else{
      this.setState({errorMsg: config.errorMsg[validateValue], isLoading: false})     
    }
  }

  render(){
    const { isLoading, email, errorMsg } = this.state

    return (
      <Container >
        <Grid style={Style.grid}>
          <Row>
            <View style={Style.form}>
              <H2 style={Style.title}>Forgot your password?</H2>
              <Text style={Style.subtitle}>Please enter the email address registered on your account.</Text>
            </View>             
          </Row>
          <Row>
            <Content>
              <View style={Style.sectionInput}>
                { isLoading
                  ? <Spinner color='red' />
                  : <View>
                      <InputApp 
                        placeholder='Email address' 
                        icon='envelope'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}                      
                        maxLength={20}
                        autoCapitalize='none'
                      />                    
                      <Text style={Style.error}>{errorMsg}</Text>
                    </View>
                }
              </View>
              <ButtonApp
                testID='submitButtom'
                textButton='Reset password'
                disabled={isLoading}
                onPress={() => this.handleSubmit()}
              />
            </Content>
          </Row>          
        </Grid>
      </Container>
    )
  } 
}