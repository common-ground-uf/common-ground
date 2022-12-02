import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { SERVER_URI } from '../Config';
import { Storage } from '../data/Storage';

export const styles = StyleSheet.create({
  next: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  }
});

type PreferencesProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function Preferences(props: PreferencesProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([]);
  const [oldValue, setOldValue] = React.useState([]);
  const [items, setItems] = React.useState([
    { label: 'American', value: 'american' },
    { label: 'Mexican', value: 'mexican' },
    { label: 'Sushi', value: 'sushi' },
    { label: 'BBQ', value: 'BBQ' },
    { label: 'KBBQ', value: 'kbbq', parent: 'BBQ' },
    { label: 'AYCE', value: 'ayce' },
    { label: 'Halal', value: 'halal' },
    { label: '$', value: '$' },
    { label: '$-$$', value: '$-$$' },
    { label: '$$', value: '$$' },
    { label: '$$-$$$', value: '$$-$$$' },
    { label: '$$$', value: '$$$' },
  ]);

  const onPressSave = async () => {

    const profile = await Storage.get('profile');
    if (!profile) {
      props.navigation.navigate('Login');
      return;
    }
    const profileInfo = JSON.parse(profile);
    const preferencesToAdd : string[] = [];
    const preferencesToRemove : string[] = [];
    for(let i = 0; i < value.length; i++) {
      if(!oldValue.includes(value[i])) {
        preferencesToAdd.push(value[i]);
      }
    }
    for(let i = 0; i < oldValue.length; i++) {
      if(!value.includes(oldValue[i])) {
        preferencesToRemove.push(oldValue[i]);
      }
    }

    if(preferencesToAdd.length > 0) {
      axios.post(`${SERVER_URI}/users/${profileInfo.id}/prefs`, {
        preferences: preferencesToAdd,
      });
    }
    if(preferencesToRemove.length > 0) {
      axios.delete(`${SERVER_URI}/users/${profileInfo.id}/prefs`, {
        data: {
          preferences: preferencesToRemove
        }
      });
    }
    Storage.get('profile').then((profile) => {
      if (profile) {
        const profileInfo = JSON.parse(profile);
        profileInfo.pastPicks = value;
        Storage.set('profile', JSON.stringify(profileInfo)).then(() => {
          props.navigation.navigate('SettingsScreen');
        });
      }else{
        props.navigation.navigate('Login');
      }
    });
    setOldValue(value);
  };

  const onScreenFocus = async () => {
    console.log('Preferences screen focused');
    const profile = await Storage.get('profile');
    if (!profile) {
      props.navigation.navigate('Login');
      return;
    }
    const profileInfo = JSON.parse(profile);

    axios.get(`${SERVER_URI}/users/${profileInfo.id}/prefs`).then((response) => {
      setValue(response.data.prefs);
      setOldValue(response.data.prefs);
    }).catch((error) => {
      console.log(error);
    });
  };

  React.useEffect(() => {
    onScreenFocus();
  }, []);

  return (
    <View style={loginSignupStyles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
        multiple={true}
        mode="BADGE"
        badgeDotColors={[
          '#e76f51',
          '#00b4d8',
          '#e9c46a',
          '#e76f51',
          '#8ac926',
          '#00b4d8',
          '#e9c46a',
        ]}
      />
      <View style={styles.next}>
        <Button title='Save' onPress={onPressSave}/>
      </View>
    </View>
  );
}

export { Preferences };
