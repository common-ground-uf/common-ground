import axios from 'axios';
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  Text
} from 'react-native';
import { Profile } from '../commonTypes';
import { ContactBubble } from '../components/ContactBubble';
import { SERVER_URI } from '../Config';

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

function StartNewTableScreen(props: StartNewTableScreenProps) {
  const userIds = ['a9c529deb69447b78cba5c5a0e7b33c9', 'a9c529deb69447b78cba5c5a0e7b33c9', 'a9c529deb69447b78cba5c5a0e7b33c9', 'a9c529deb69447b78cba5c5a0e7b33c9'];
  const [contactList, setContactList] = React.useState<Profile[]>([]);

  const getUsersByIds = async () => {
    // eslint-disable-next-line prefer-const
    let newUsers: Profile[] = [];
    newUsers = await Promise.all(
      userIds.map(async (id: string) => {
        const res2 = await axios.get(`${SERVER_URI}/users/${id}`);
        console.log('successully got a user by ID');
        return res2.data.data;
      })
    );

    console.log('newUsers');
    console.log(newUsers);
    setContactList(newUsers);
  };

  React.useEffect(() => {
    getUsersByIds();
  }, []);
  
  const [selected, setSelected] = React.useState<boolean[]>(
    Array(contactList.length).fill(false)
  );
  const [errorState, setErrorState] = React.useState<boolean>(false);
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
        if (groupName === '') {
          setErrorState(true);
          return;
        }
        setErrorState(false);
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
        
        props.navigation.navigate('Group Details', {
          name: groupName,
          members: selectedContacts,
        });
    };

    if (contactList.length === 0) {
      console.log('no recent contacts');
    }

    return (
      <ScrollView style={styles.startNewTable}>
        <TextInput
          value={groupName}
          onChangeText={setGroupName}
          placeholder='Group name'
          style={styles.input}
        />
        {errorState && <Text>A group name is required</Text>}
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
