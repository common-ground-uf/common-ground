import React from 'react';
import { View, Button } from 'react-native';
import { loginSignupStyles as styles } from '../styles/LoginSingup';
import axios from 'axios';
import { SERVER_URI } from '../Config';

// eslint-disable-next-line @typescript-eslint/no-var-requires

type LogoutProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

// type requestLoginProps = {
//     email: string;
//     password: string;
// }

function Logout(props: LogoutProps) {
  const onPressLogout = () => {
    axios
      .post(`${SERVER_URI}/logout`)
      .then((response) => {
        if (response.data === 'OK') {
          console.log('logout successful');
        }
        props.navigation.navigate('Login');
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
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

  return (
    <View style={styles.container}>
      <View style={styles.loginButtonContainer}>
        <Button title="Logout" onPress={onPressLogout} color="#FF6D6E" />
      </View>
    </View>
  );
}

export { Logout };
