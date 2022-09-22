import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  contactMain: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    marginRight: 16
  },
  text: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 8
  }
});

type ContactBubbleProps = {
  pic: string,
  name: string,
  onClick: () => void,
}

function ContactBubble(props: ContactBubbleProps) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Image style={styles.image} source={{ uri: props.pic}}/>
      <Text style={styles.text}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

export { ContactBubble };
