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
    marginRight: 16,
  },
  text: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 8,
  },
  selected: {
    borderStyle: 'solid',
    borderColor: '#fdb346',
    borderWidth: 4,
  },
});

type ContactBubbleProps = {
  profilePic: string;
  firstName: string;
  lastName: string;
  onPress?: () => void;
  selected?: boolean;
};

function ContactBubble(props: ContactBubbleProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={[styles.image, props.selected ? styles.selected : null]}
        source={{ uri: props.profilePic }}
      />
      <Text style={styles.text}>
        {props.firstName} {props.lastName}
      </Text>
    </TouchableOpacity>
  );
}

export { ContactBubble };
