import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
      this.props.emailChanged(text);    
    }
    onPasswordChange(text) {
      this.props.passwordChanged(text);    
    }
    onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
      console.log('success');
    }
    renderButton() {
      if (this.props.loading) {
        return <Spinner />;
      } 
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }


    render() {
        return (
            <Card>
            <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>
    
            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            <CardSection>
                <Text style={styles.textStyle}>{this.props.error}</Text>
            </CardSection>

             <CardSection>
               {this.renderButton()}
            </CardSection>
          </Card>
            );
        }

    }
const mapStatetoProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};
export default connect(mapStatetoProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

const styles = {
    textStyle: { 
      color: 'red',
      fontSize: 20,
      alignSelf: 'center'
    }
};
