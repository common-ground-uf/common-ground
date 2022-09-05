import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

function LoginPage() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const onPressForgotPassword = () => {

  };

  const onPressLogin = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        autoComplete='password'
      />
      <StatusBar style="auto" />
      <Text onPress={onPressForgotPassword} style={styles.forgotPassword}>Forgot password?</Text>
      <View style={styles.loginButtonContainer}>
        <Button title="Login" onPress={onPressLogin} color="#FEB346"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '8%',
    paddingVertical: 32,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  loginButtonContainer: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 10
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    marginVertical: 12,
    color: '#818181'
  }
});

export { LoginPage };
