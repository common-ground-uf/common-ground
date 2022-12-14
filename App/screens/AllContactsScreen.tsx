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
});

type AllContactsScreenProps = {
  members: Contact[];
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
};

function AllContactsScreen(props: AllContactsScreenProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [members, setMembers] = React.useState<Array<Profile>>(
    props.route.params.members
  );

  return (
    <View style={styles.groupDetails}>
      <View>
        {!members || members.length === 0 ? (
          <Text>Group is empty</Text>
        ) : (
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
        )}
      </View>
    </View>
  );
}

export { AllContactsScreen };
