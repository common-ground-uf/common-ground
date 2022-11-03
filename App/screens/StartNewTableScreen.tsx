import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Button,
    TextInput,
} from 'react-native'
import { ContactBubble } from '../components/ContactBubble'
import { allUsers } from '../data/dummyUsers'

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
})

type StartNewTableScreenProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any
    }
}

function makeid(length: number) {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}

function StartNewTableScreen(props: StartNewTableScreenProps) {
    const contactList = allUsers
    const [selected, setSelected] = React.useState<boolean[]>(
        Array(allUsers.length).fill(false)
    )
    const [inviteCode, setInviteCode] = React.useState('')
    const [groupName, setGroupName] = React.useState('')

    const onPressContact = (clickedIndex: number) => {
        const newSelected = selected.map((contact, index) => {
            if (index === clickedIndex) {
                return !contact
            }
            return contact
        })
        setSelected(newSelected)
    }

    const onInvitePress = () => {
        setInviteCode(makeid(6))
        console.log(inviteCode)
    }

    const onPressNext = () => {
        props.navigation.navigate('Strategic or random')
    }

    return (
        <ScrollView style={styles.startNewTable}>
            <TextInput
                value={groupName}
                onChangeText={setGroupName}
                placeholder="Group name"
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
            <View>
                <Button onPress={onInvitePress} title="Generate invite link" />
                <Text>{inviteCode}</Text>
            </View>
            <Button title="Next" onPress={onPressNext} />
        </ScrollView>
    )
}

export { StartNewTableScreen }
