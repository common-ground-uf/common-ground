import React from 'react';
import { Text, View, TextInput, Button  } from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';

function Signup() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');
  
  const onPressSignup = () => {
    console.log('sign up');
  };

  const onPressHaveAccount = () => {
    console.log('sign up');
  };

  return (
    <View style={loginSignupStyles.container}>
      <Text style={loginSignupStyles.title}>Sign up</Text>
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"

      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoComplete='password'
      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setPasswordConfirmation}
        value={passwordConfirmation}
        placeholder="Confirm password"
      />
      <Text onPress={onPressHaveAccount} style={loginSignupStyles.link}>Already have an account?</Text>
      <View style={loginSignupStyles.loginButtonContainer}>
        <Button title="Signup" onPress={onPressSignup} color="#FEB346"/>
      </View>
    </View>
  );
}

export { Signup };
