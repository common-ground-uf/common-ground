import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Contact, Profile } from '../commonTypes';
import { ContactListItem } from '../components/ContactListItem';

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
    opacity: .6,
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
  }
});

type AllContactsScreenProps = {
  members: Contact[];
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
};

function AllContactsScreen(props: AllContactsScreenProps) {
  const [members, setMembers] = React.useState<Array<Profile>>(props.route.params.members);

  return (
    <View style={styles.groupDetails}>
      {members.length === 0 ?
        <Text>Group is empty</Text> :
        <FlatList
          data={members}
          renderItem={(member) => (
            <ContactListItem
              memberData={member.item}
              last={member.index === members.length - 1}
              navigate={props.navigation.navigate}
            />
          )}
        />
      }
    </View>
  );
}

export { AllContactsScreen };
