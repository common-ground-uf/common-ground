import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { GroupBubbles } from '../components/GroupBubbles';
import { parties } from '../data/dummyUsers';

const styles = StyleSheet.create({
  restaurantBubble: {
    marginLeft: 20,
  },
});

type GroupListProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};


export const GroupList = (props: GroupListProps) => {
  const onClickGroup = () => {
    props.navigation.navigate('Group Details');
  };

  return (
    <View>
      <Text>All parties</Text>
      <ScrollView>
        {parties.map((party, index) => (
          <GroupBubbles
            members={party.members}
            name={party.name}
            onClick={onClickGroup}
            style={styles.restaurantBubble}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};
