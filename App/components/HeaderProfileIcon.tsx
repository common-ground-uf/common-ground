import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Storage } from '../data/Storage';

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

type HeaderProfileIconProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

const HeaderProfileIcon = (props: HeaderProfileIconProps) => {
  const [profileIcon, setProfileIcon] = React.useState();

  const getProfileInfo = async () => {
    //Get profile info from async storage
    const profile = await Storage.get('profile');
    if (profile) {
      const profileInfo = JSON.parse(profile);
      setProfileIcon(profileInfo.profilePic);
    } else {
      props.navigation.navigate('Login');
    }
  };
  React.useEffect(() => {
    getProfileInfo();
  }, []);
  const onPress = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{ uri: profileIcon }} />
    </TouchableOpacity>
  );
};

export { HeaderProfileIcon };
