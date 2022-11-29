import axios from 'axios';
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { ContactBubble } from '../components/ContactBubble';
import { SERVER_URI } from '../Config';
import { allUsers } from '../data/dummyUsers';

const styles = StyleSheet.create({
  startNewTable: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactBubble: {
    marginBottom: 8,
    marginRight: 20,
    marginTop: 12,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 4,
  },
});

type StartNewTableScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
}

function StartNewTableScreen() {
  const contactList = allUsers;
  const [selected, setSelected] = React.useState<boolean[]>(
    Array(allUsers.length).fill(false)
  );
  const [groupName, setGroupName] = React.useState('');

  const onPressContact = (clickedIndex: number) => {
    const newSelected = selected.map((contact, index) => {
      if (index === clickedIndex) {
        return !contact;
      }
      return contact;
    });
    setSelected(newSelected);
  };

    const onPressCreate = () => {

      const selectedContacts = [];
      for (let i = 0; i < selected.length; i++) {
        if (selected[i]) {
          selectedContacts.push(contactList[i].id);
        }
      }
      

        axios.post(`${SERVER_URI}/groups`, {
                userIds: selectedContacts,
                name: groupName,
              }).then((response) => {
            console.log('Group created');
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
            console.log(error.response.data);
        });

        //TODO: Navigate to newly created table screen
        // props.navigation.navigate('Strategic or random');
    };

    return (
      <ScrollView style={styles.startNewTable}>
        <TextInput
          value={groupName}
          onChangeText={setGroupName}
          placeholder='Group name'
          style={styles.input}
        />
        <View style={styles.row}>
          {contactList.map((contact, index) => (
            <ContactBubble
              key={index}
              {...contact}
              onPress={() => onPressContact(index)}
              selected={selected[index]}
              style={styles.contactBubble}
            />
          ))}
        </View>
        <Button title='Create' onPress={onPressCreate}/>
      </ScrollView>
    );
}

export { StartNewTableScreen };
