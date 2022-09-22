import React from 'react';
import { View, Button } from 'react-native';

type DebugScreenProps = {
  navigation: any;
}

function DebugScreen(props: DebugScreenProps) {
  const onClick = (screen: string) => {
    props.navigation.navigate(screen);
  };
  return (
    <View>
      <Button title="Login" onPress={() => onClick('Login')} color="#FEB346" />
      <Button title="Signup" onPress={() => onClick('Signup')} color="#FEB346" />
      <Button title="Forgor Password 💀" onPress={() => onClick('Forgor Password 💀')} color="#FEB346" />
      <Button title="Restaurant" onPress={() => onClick('Restaurant')} color="#FEB346" />
      <Button title="Restaurant List" onPress={() => onClick('Restaurant List')} color="#FEB346" />
      <Button title="Profile" onPress={() => onClick('Profile')} color="#FEB346" />
      <Button title="Home" onPress={() => onClick('Home')} color="#FEB346" />
      <Button title="GroupDetails" onPress={() => onClick('GroupDetails')} color="#FEB346" />
    </View>
  );
}

export { DebugScreen };
