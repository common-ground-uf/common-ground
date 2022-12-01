import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Contact } from '../commonTypes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 100,
  },
  touchable: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd',
    position: 'relative',
    padding: 20,
    marginBottom: 10,
  },
  image: {
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#ddd',
  },
  image0: {
    width: 65,
    height: 65,
    borderRadius: 30,
    top: 10,
  },
  image1: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    top: 5,
    right: 5,
  },
  image2: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    bottom: 5,
    right: 5,
  },
  plusBubble: {
    backgroundColor: '#999',
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

type GroupBubbleProps = {
  members: Contact[]
  name: string
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
}

function GroupBubble(props: GroupBubbleProps) {
  if (props.members.length === 0) {
    return null;
  }
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onClick} style={styles.touchable}>
        {props.members.length === 3 && (
          <Image
            source={{ uri: props.members[2].profilePic }}
            style={[styles.image2, styles.image]}
          />
        )}
        {props.members.length > 3 && (
          <View style={[styles.image2, styles.plusBubble, styles.image]}>
            <Text>+{props.members.length - 2}</Text>
          </View>
        )}
        {props.members[1] && (
          <Image
            source={{ uri: props.members[1].profilePic }}
            style={[styles.image1, styles.image]}
          />
        )}
        <Image
          source={{ uri: props.members[0].profilePic }}
          style={[styles.image0, styles.image]}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

export { GroupBubble };
