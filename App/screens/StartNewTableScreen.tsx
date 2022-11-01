import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { ContactBubble } from '../components/ContactBubble';
import { allUsers } from '../data/dummyUsers';

const styles = StyleSheet.create({
  startNewTable: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

type StartNewTableScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function StartNewTableScreen(props: StartNewTableScreenProps) {
    const contactList = allUsers;
    const [selected, setSelected] = React.useState([false, false, false]);
    const [inviteCode, setInviteCode] = React.useState("");

  const onPressContact = (clickedIndex) => {
    const newSelected = selected.map((contact, index) => {
      if (index === clickedIndex) {
        return !contact;
      }
      return contact;
    });
    setSelected(newSelected);
  };
  
      const onInvitePress = () => {
        setInviteCode(makeid(6));
        console.log(inviteCode)
    }

    const onPressNext = () => {
        props.navigation.navigate('Strategic or random');
    };

    return (
        <ScrollView style={styles.startNewTable}>
            <View style={styles.row}>
                {contactList.map((contact, index) =>
                    <ContactBubble key={index} {...contact} onPress={() => onPressContact(index)} selected={selected[index]} />
                )}
            </View>
            <Button title='Next' onPress={onPressNext}/>
            <View>
                <Button onPress={onInvitePress} title='Generate invite link'/>
                <Text>
                    {inviteCode}
                </Text>
            </View>
        </ScrollView>
    );
}

export { StartNewTableScreen };
