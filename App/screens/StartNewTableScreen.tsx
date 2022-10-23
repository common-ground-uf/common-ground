import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import { ContactBubble } from '../components/ContactBubble';
import { Finger } from '../data/dummyUsers';

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
        navigate: any,
    },
}

function StartNewTableScreen(props: StartNewTableScreenProps) {
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
        </ScrollView>
    );
}

export { StartNewTableScreen };
