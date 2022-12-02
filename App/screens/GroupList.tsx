import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { GroupBubble } from '../components/GroupBubble';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    paddingVertical: 10,
  },
  groupBubbleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  partyName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

type GroupListProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};


export const GroupList = (props: GroupListProps) => {
  const onClickGroup = (party: any) => {
    props.navigation.navigate('Group Details', {
      members: party.members,
      name: party.name,
    });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>All parties</Text>
      <ScrollView>
        {parties.map((party, index) => (
          <View key={index} style={styles.groupBubbleContainer}>
            <GroupBubble
              users={party.members}
              onClick={() => onClickGroup(party)}
            />
            <Text style={styles.partyName}>{party.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
