import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { loginSignupStyles } from '../styles/LoginSingup';
import DropDownPicker from 'react-native-dropdown-picker';

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
  const [value, setValue] = React.useState(['mexican', '$-$$']);
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

  const onPressNext = () => {
    props.navigation.navigate('Waiting on Friends');
  };
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
        <Button title='Next' onPress={onPressNext}/>
      </View>
    </View>
  );
}

export { Preferences };
