import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { ContactBubble } from '../components/ContactBubble';
import { Finger } from '../data/dummyData';

const styles = StyleSheet.create({
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

    console.log(selected);

    return (
        <View>
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
