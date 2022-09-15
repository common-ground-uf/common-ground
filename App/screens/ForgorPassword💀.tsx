import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';

type ForgorPasswordProps = {
  navigation: any;
}

function ForgorPassword(props: ForgorPasswordProps) {
  const [email, setEmail] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('');
  const [expectingEmail, setExpectingEmail] = React.useState<boolean>(true);

  const sendEmail = () => {
    if (email !== '') {// TODO: check that it's a valid email
      setExpectingEmail(false);
    }
  };

  const resetPassword = () => {
    //TODO: check that the code is correct
    console.log('reset password');
  };

  return (
    <View style={loginSignupStyles.container}>
      {expectingEmail ?
        <>
          <Text style={loginSignupStyles.title}>Reset password</Text>
          <TextInput
            style={loginSignupStyles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"

          />
          <View style={loginSignupStyles.loginButtonContainer}>
            <Button title="Reset password" onPress={sendEmail} color="#FEB346" />
          </View>
        </>
        :
        <>
          <Text style={loginSignupStyles.title}>Check your email</Text>
          <Text>An email has been sent to {email}</Text>
          <TextInput
            style={loginSignupStyles.input}
            onChangeText={setCode}
            value={code}
            placeholder="Code"
          />
          <View style={loginSignupStyles.loginButtonContainer}>
            <Button title="Reset password" onPress={resetPassword} color="#FEB346" />
          </View>
        </>
      }

    </View>
  );
}

export { ForgorPassword };
