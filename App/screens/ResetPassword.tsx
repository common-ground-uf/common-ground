import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';

type ResetPasswordProps = {
  navigation: any;
}

function ResetPassword(props: ResetPasswordProps) {
  const [newPassword, setNewPassword] = React.useState<string>('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState<string>('');
  const [errorExists, setErrorExists] = React.useState(false);

  const onPress = () => {
    if (newPassword === newPasswordConfirmation) {
      console.log('reset password');
      setErrorExists(false);
    }
    else {
      setErrorExists(true);
    }
  };

  return (
    <View style={loginSignupStyles.container}>
      <Text style={loginSignupStyles.title}>Reset password</Text>
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setNewPassword}
        value={newPassword}
        placeholder="New password"
      />
      <TextInput
        style={loginSignupStyles.input}
        onChangeText={setNewPasswordConfirmation}
        value={newPasswordConfirmation}
        placeholder="Confirm new password"
      />
      {errorExists &&
        <Text>
          The passwords do not match 😡
        </Text>
      }
      <View style={loginSignupStyles.loginButtonContainer}>
        <Button title="Reset password" color="#FEB346" onPress={onPress}/>
      </View>
    </View>
  );
}

export { ResetPassword };
