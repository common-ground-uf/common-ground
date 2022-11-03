import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import { Contact } from '../commonTypes';
import { parties } from '../data/dummyUsers';

const styles = StyleSheet.create({
  memberContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 38,
    marginRight: 10,
  },
  name: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    marginRight: 'auto',
  },
});

type ContactListItemProps = {
  memberData: Contact
  loading: boolean
}

const ContactListItem = (props: ContactListItemProps) => {
  return (
    <>
      <View style={styles.memberContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.memberData.profilePic }}
        />
        <View>
          <Text style={styles.name}>
            {props.memberData.firstName} {props.memberData.lastName}
          </Text>
          <Text>{props.loading ? 'Waiting...' : 'Ready'}</Text>
        </View>
      </View>
    </>
  );
};

const WaitingOnFriends = () => {
  const group = parties[0];

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.sectionTitle}>{group.name}</Text>
      <View>
        {group.members.map((member, index) => (
          <ContactListItem key={index} memberData={member} loading={true} />
        ))}
      </View>
    </ScrollView>
  );
};

export { WaitingOnFriends };
