import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { SERVER_URI } from '../Config';
import { Storage } from '../data/Storage';
import yelpCategories from '../api/yelpCategories';

export const styles = StyleSheet.create({
  next: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
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

  const parents = new Set();
  const values = new Set();

  yelpCategories.forEach((category) => {
    const value = category.alias;
    values.add(value);
    const parent = category.parents[0];
    parents.add(parent);
  });

  const nonValueParents = new Set(
    [...parents].filter((element) => !values.has(element))
  );

  // const parentsItems = nonValueParents.map((value: string)=>{
  //   return {label: value.charAt(0).toUpperCase() + value.slice(1), value: value};
  // });

  const yelpItems = yelpCategories.map((category) => {
    const label = category.title;
    const value = category.alias;
    const parent = category.parents[0];

    // We don't want preferences that have a parent that isnt a value... causes issues with dropdownpicker
    return nonValueParents.has(parent)
      ? { label: label, value: value }
      : { label: label, value: value, parent: parent };
  });

  const [items, setItems] = React.useState(yelpItems);

  const onPressSave = async () => {
    const profile = await Storage.get('profile');
    if (!profile) {
      props.navigation.navigate('Login');
      return;
    }
    const profileInfo = JSON.parse(profile);
    const preferencesToAdd: string[] = [];
    const preferencesToRemove: string[] = [];
    for (let i = 0; i < value.length; i++) {
      if (!oldValue.includes(value[i])) {
        preferencesToAdd.push(value[i]);
      }
    }
    for (let i = 0; i < oldValue.length; i++) {
      if (!value.includes(oldValue[i])) {
        preferencesToRemove.push(oldValue[i]);
      }
    }

    if (preferencesToAdd.length > 0) {
      axios.post(`${SERVER_URI}/users/${profileInfo.id}/prefs`, {
        preferences: preferencesToAdd,
      });
    }
    if (preferencesToRemove.length > 0) {
      axios.delete(`${SERVER_URI}/users/${profileInfo.id}/prefs`, {
        data: {
          preferences: preferencesToRemove,
        },
      });
    }
    Storage.get('profile').then((profile) => {
      if (profile) {
        const profileInfo = JSON.parse(profile);
        profileInfo.pastPicks = value;
        Storage.set('profile', JSON.stringify(profileInfo)).then(() => {
          props.navigation.navigate('Explore');
        });
      } else {
        props.navigation.navigate('Login');
      }
    });
    setOldValue(value);
  };

  const onScreenFocus = async () => {
    const profile = await Storage.get('profile');
    if (!profile) {
      props.navigation.navigate('Login');
      return;
    }
    const profileInfo = JSON.parse(profile);

    axios
      .get(`${SERVER_URI}/users/${profileInfo.id}/prefs`)
      .then((response) => {
        setValue(response.data.prefs);
        setOldValue(response.data.prefs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    onScreenFocus();
  }, []);

  return (
    <View style={loginSignupStyles.container}>
      <DropDownPicker
        searchable={true}
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
        <Button title="Save" onPress={onPressSave} />
      </View>
    </View>
  );
}

export { Preferences };
