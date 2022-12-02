import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { GroupInfo } from '../commonTypes';
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
  route: {
    params: {
      groups: GroupInfo[];
    }
  };
  groups: GroupInfo[];
};


export const GroupList = (props: GroupListProps) => {
  const groups = props.route.params.groups;
  const onClickGroup = (party: GroupInfo) => {
    console.log('clicked group' + party.users);
    props.navigation.navigate('Group Details', {
      users: party.users,
      name: party.name,
      id: party.id,
      inviteCode: party.inviteCode,
    });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>All parties</Text>
      <ScrollView>
        {groups.map((group, index) => (
          <View key={index} style={styles.groupBubbleContainer}>
            <GroupBubble
              users={group.users}
              onClick={() => onClickGroup(group)}
            />
            <Text style={styles.partyName}>{group.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
