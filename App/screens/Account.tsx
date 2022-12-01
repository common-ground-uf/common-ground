import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import axios from 'axios';
import { SERVER_URI } from '../Config';

function Account() {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');

  axios
    .get(`${SERVER_URI}/auth`)
    .then((response) => {
      if (response.data.message === 'login success') {
        console.log('login successful');
        // User Data object to be processed locally and saved as current login data (cleared after logout)
        setEmail(response.data.userData.email);
        setFirstName(response.data.userData.firstname);
        setLastName(response.data.userData.lastname);
        // TODO: Need to get location from user data
      }
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data.message === 'not logged in')
          console.log('Not logged in!');
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

  const onPressSave = () => {
    console.log('pressed save. Did not actually save.');
    // TODO: Actually change these fields in database
  };

  return (
    <View style={loginSignupStyles.container}>
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First name"
        autoCapitalize="words"
      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
        autoCapitalize="words"
      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Location"
      />
      <View style={loginSignupStyles.loginButtonContainer}>
        <Button title="Save" onPress={onPressSave} color="#FF6D6E" />
      </View>
    </View>
  );
}

export { Account };
