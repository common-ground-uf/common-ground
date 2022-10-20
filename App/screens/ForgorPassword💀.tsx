import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import forgot from '../assets/forgot.png';

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '10%',
    alignSelf: 'center',
    marginBottom: '5%'
  },
});

type ForgorPasswordProps = {
  navigation: {
    navigate: any,
  };
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
    props.navigation.navigate('ResetPassword');
  };

  return (

    <View style={loginSignupStyles.container}>
      <Image style={styles.image} source={forgot}/>
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
