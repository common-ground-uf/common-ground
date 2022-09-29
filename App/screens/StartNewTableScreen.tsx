import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import {ContactBubble} from '../components/ContactBubble';
import {Finger} from '../data/dummyData';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
});

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

function StartNewTableScreen() {
    const contactList = [Finger, Finger, Finger];
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

    console.log(selected);

    return (
        <View>
            <Text>
                Start a new table
            </Text>
            <View style={styles.row}>
                {contactList.map((contact, index) =>
                    <ContactBubble key={index} {...contact} onPress={() => onPressContact(index)}
                                   selected={selected[index]}/>
                )}
            </View>
            <Button title='Next'/>
            <View>
                <Button onPress={onInvitePress} title='Generate invite link'/>
                    <Text>
                        {inviteCode}
                    </Text>
            </View>
        </View>
    );
}

export {StartNewTableScreen};
