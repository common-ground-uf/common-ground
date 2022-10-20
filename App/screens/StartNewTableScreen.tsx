import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ContactBubble } from '../components/ContactBubble';
import { Finger } from '../data/dummyUsers';

const styles = StyleSheet.create({
    startNewTable: {
        marginHorizontal: 4,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
});

function StartNewTableScreen() {
    const contactList = [Finger, Finger, Finger];
    const [selected, setSelected] = React.useState([false, false, false]);

    const onPressContact = (clickedIndex) => {
        const newSelected = selected.map((contact, index) => {
            if (index === clickedIndex) {
                return !contact;
            }
            return contact;
        });
        setSelected(newSelected);
    };

    return (
        <View style={styles.startNewTable}>
            <Text>
                Start a new table
            </Text>
            <View style={styles.row}>
                {contactList.map((contact, index) =>
                    <ContactBubble key={index} {...contact} onPress={() => onPressContact(index)} selected={selected[index]} />
                )}
            </View>
            <Button title='Next' />
        </View>
    );
}

export { StartNewTableScreen };
