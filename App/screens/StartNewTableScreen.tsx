import axios from 'axios';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
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
    marginBottom: 10,
  },
});

type StartNewTableScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function StartNewTableScreen(props: StartNewTableScreenProps) {
    const contactList = allUsers;
    const [selected, setSelected] = React.useState([false, false, false, false, false, false]);

  const onPressContact = (clickedIndex:number) => {
    const newSelected = selected.map((contact, index) => {
      if (index === clickedIndex) {
        return !contact;
      }
      return contact;
    });
    setSelected(newSelected);
  };

    const onPressCreate = () => {
      let inviteCode = makeid(6);
      console.log(inviteCode);

      let selectedContacts = [];
      for (let i = 0; i < selected.length; i++) {
        if (selected[i]) {
          selectedContacts.push(contactList[i].id);
        }
      }
      

        axios.post(`${SERVER_URI}/groups`, {
                inviteCode: inviteCode,
                userIds: selectedContacts,
              }).then((response) => {
            console.log("Group created");
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
            <View style={styles.row}>
                {contactList.map((contact, index) =>
                    <ContactBubble key={index} {...contact} onPress={() => onPressContact(index)} selected={selected[index]} style={styles.contactBubble}/>
                )}
            </View>
            <Button title='Create' onPress={onPressCreate}/>
        </ScrollView>
    );
}

export { StartNewTableScreen };
