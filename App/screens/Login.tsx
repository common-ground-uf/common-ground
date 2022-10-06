import React from 'react';
import { Text, View, TextInput, Button  } from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';

type LoginProps = {
  navigation: any;
}

function Login(props: LoginProps) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  
  const onPressForgotPassword = () => {
    props.navigation.navigate('Forgot Password');
  };

  const onPressLogin = () => {
    console.log('log in');
  };

  const onPressSignUp = () => {
    props.navigation.navigate('Signup');
  };

  return (
    <View style={loginSignupStyles.container}>
      <Text style={loginSignupStyles.title}>Login</Text>
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
      <Text onPress={onPressForgotPassword} style={loginSignupStyles.link}>Forgot password</Text>
      <Text onPress={onPressSignUp} style={loginSignupStyles.link}>Sign up</Text>
      <View style={loginSignupStyles.loginButtonContainer}>
        <Button title="Login" onPress={onPressLogin} color="#FEB346"/>
      </View>
    </View>
  );
}

export { Login };
