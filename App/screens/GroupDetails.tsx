import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import { Finger, Gus, Walter } from '../data/dummyData';

const styles = StyleSheet.create({
  groupDetails: {
    padding: 20,
  },
  memberContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 20,
  }
});

type ContactProps = {
  name: string,
  pic: string,
};

const Member = (props: ContactProps) => {
  return (
    <>
      <View style={styles.memberContainer}>
        <Image style={styles.image} source={{ uri: props.pic }} />
        <Text>{props.name}</Text>
      </View>
      <View style={styles.horizontalLine} />
    </>
  );
};

function GroupDetails() {
  const members = [Finger, Gus, Walter];

  return (
    <View style={styles.groupDetails}>
      <FlatList
        data={members}
        renderItem={(member) => <Member {...member.item} />}
      />
    </View>
  );
}

export { GroupDetails };
