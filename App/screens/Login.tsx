import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { loginSignupStyles as styles } from '../styles/LoginSingup';
import { SERVER_URI } from '../Config';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires

type LoginProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

// type requestLoginProps = {
//     email: string;
//     password: string;
// }

function Login(props: LoginProps) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorState, setErrorState] = React.useState<boolean>(false);

  const onPressForgotPassword = () => {
    props.navigation.navigate('Forgot Password');
  };

  const onPressLogin = () => {
    axios
      .post(`${SERVER_URI}/login`, {
        username: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message === 'login success') {
          console.log('login successful');
          // User Data object to be processed locally and saved as current login data (cleared after logout)
          const userData = {
            email: response.data.userData.email,
            firstname: response.data.userData.firstname,
            lastname: response.data.userData.lastname,
            role: response.data.userData.role,
          };
          console.log(userData);
          props.navigation.navigate('Home');
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.data.message === 'login failed')
            console.log('login unsuccessful');
          else {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
  };

  const onPressSignUp = () => {
    props.navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoComplete="password"
      />
      {errorState && (
        <Text style={styles.errorMessage}>
          email and password do not match 😭
        </Text>
      )}
      <Text onPress={onPressForgotPassword} style={styles.link}>
        Forgot password
      </Text>
      <Text onPress={onPressSignUp} style={styles.link}>
        Sign up
      </Text>
      <View style={styles.loginButtonContainer}>
        <Button title="Login" onPress={onPressLogin} color="#FF6D6E" />
      </View>
    </View>
  );
}

export { Login };
