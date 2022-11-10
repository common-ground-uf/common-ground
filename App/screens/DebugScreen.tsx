import React from 'react';
import { ScrollView, Button, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginVertical: 1,
    marginHorizontal: 8,
  },
  debugScreen: {
    paddingHorizontal: 20,
    // marginVertical: 20,
  },
  verticalSpace: {
    height: 10,
  },
});

type DebugScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
}

function DebugScreen(props: DebugScreenProps) {
  const onClick = (screen: string) => {
    props.navigation.navigate(screen);
  };
  const screens = [
    'Start',
    'Login',
    'Logout',
    'Signup',
    'Forgot Password',
    'Reset Password',
    'Preferences',
    'Start New Table',
    'Join Group',
    'Restaurant List',
    'Restaurant',
    'Gallery',
    'Account',
    'Privacy',
    'Settings',
    'Notifications',
    'Group Details',
    'Explore',
    'Strategic or random',
    'Random Restaurant',
    'All Contacts',
    'Waiting on Friends',
  ];
  return (
    <ScrollView style={styles.debugScreen}>
      <View style={styles.verticalSpace} />
      <Text>Select a screen</Text>
      {screens.map((screen, index) => (
        <View style={styles.button} key={index}>
          <Button title={screen} onPress={() => onClick(screen)} />
        </View>
      ))}
    </ScrollView>
  );
}

export { DebugScreen };
