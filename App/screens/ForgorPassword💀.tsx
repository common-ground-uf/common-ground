import React from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import { loginSignupStyles as styles } from '../styles/LoginSingup';
import forgot from '../assets/forgot.png';

type ForgorPasswordProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function ForgorPassword(props: ForgorPasswordProps) {
  const [email, setEmail] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('');
  const [expectingEmail, setExpectingEmail] = React.useState<boolean>(true);

  const sendEmail = () => {
    if (email !== '') {
      // TODO: check that it's a valid email
      setExpectingEmail(false);
    }
  };

  const resetPassword = () => {
    props.navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={forgot} />
      {expectingEmail ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <View style={styles.loginButtonContainer}>
            <Button
              title="Reset password"
              onPress={sendEmail}
              color="#FF6D6E"
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.title}>Check your email</Text>
          <Text>An email has been sent to {email}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCode}
            value={code}
            placeholder="Code"
          />
          <View style={styles.loginButtonContainer}>
            <Button
              title="Reset password"
              onPress={resetPassword}
              color="#FF6D6E"
            />
          </View>
        </>
      )}
    </View>
  );
}

export { ForgorPassword };
