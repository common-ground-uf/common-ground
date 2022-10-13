import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image,View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    justifyContent: 'center',
  },
  text: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  touchable: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#ddd',
    position: 'relative',
    padding: 20,
    marginBottom: 10
  },
  image: {
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#ddd',
  },
  image0: {
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 0,
    right: 0,
  },
  image1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    top: 0,
    right: 0,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    top: 10,
  },
});

type GroupBubblesProps = {
  members: any,
  name: string,
  onClick: () => void,
}

function GroupBubbles(props: GroupBubblesProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onClick} style={styles.touchable}>
        <Image source={{ uri: props.members[0].profilePic }} style={[styles.image0, styles.image]}/>
        <Image source={{ uri: props.members[1].profilePic }} style={[styles.image1, styles.image]}/>
        <Image source={{ uri: props.members[2].profilePic }} style={[styles.image2, styles.image]}/>
      </TouchableOpacity>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

export { GroupBubbles };
