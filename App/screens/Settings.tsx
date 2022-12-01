import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { SERVER_URI } from '../Config';
import { Storage } from '../data/Storage';

const styles = StyleSheet.create({
  memberContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 24,
    marginRight: 12,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#bbb',
    marginTop: 15,
  },
});

type SettingsProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

type SettingProps = {
  onClick: () => void;
  name: string;
  image: string;
};

const Setting = (props: SettingProps) => {
  return (
    <>
      <TouchableOpacity onPress={props.onClick} style={styles.memberContainer}>
        <Icon size={24} name={props.image} style={styles.image} />
        <Text>{props.name}</Text>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </>
  );
};

function Settings(props: SettingsProps) {
  const onPressLogout = () => {
    axios
      .post(`${SERVER_URI}/logout`)
      .then((response) => {
        if (response.data === 'OK') {
          console.log('logout successful');
          Storage.delete('profile');
          props.navigation.navigate('Login');
          
        }
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
        props.navigation.navigate('Login');
      });
  };

  const Account = {
    name: 'Account',
    image: 'user',
    onClick: () => {
      props.navigation.navigate('Account');
    },
  };
  const Preferences = {
    name: 'Preferences',
    image: 'asterisk',
    onClick: () => {
      props.navigation.navigate('Preferences');
    },
  };
  const Logout = {
    name: 'Logout',
    image: 'power-off',
    onClick: onPressLogout,
  };
  const members = [Account, Preferences, Logout];
  return (
    <View style={loginSignupStyles.container}>
      <FlatList
        data={members}
        renderItem={(member) => <Setting {...member.item} />}
        style={{ width: '100%' }}
      />
    </View>
  );
}

export { Settings };
