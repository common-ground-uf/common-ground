import React from 'react';
import {View, FlatList, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Contact, Profile} from '../commonTypes';
import {ContactListItem} from '../components/ContactListItem';
import image from '../assets/settings.png';

const styles = StyleSheet.create({
    groupDetails: {
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
    },
    settings: {
        width: 32,
        height: 32,
        paddings: '100%',
        opacity: 0.6,
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    groupName: {
        fontSize: 20,
    },
});

type GroupDetailsProps = {
    name: string;
    members: Contact[];
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    route: any;
};

function GroupDetails(props: GroupDetailsProps) {
    const [members, setMembers] = React.useState<Array<Profile>>(props.route.params.members);
    const [editMode, setEditMode] = React.useState(false);

    const onClickSettings = () => {
        setEditMode(!editMode);
    };

    const onDelete = (toDelete: number) => {
        const newMembers = members.filter((member, index) => index !== toDelete);
        setMembers(newMembers);
    };

    const groupName: string = props.route.params.name;

    return (
        <View style={styles.groupDetails}>
            <View style={styles.topRow}>
                <Text style={styles.groupName}>{groupName}</Text>
                <TouchableOpacity onPress={onClickSettings}>
                    <Image source={image} style={styles.settings} />
                </TouchableOpacity>
            </View>
            {members.length === 0 ? (
                <Text>Group is empty</Text>
            ) : (
                <FlatList
                    data={members}
                    renderItem={member => (
                        <ContactListItem
                            memberData={member.item}
                            onDelete={() => onDelete(member.index)}
                            editMode={editMode}
                            last={member.index === members.length - 1}
                            navigate={props.navigation.navigate}
                        />
                    )}
                />
            )}
        </View>
    );
}

export {GroupDetails};
