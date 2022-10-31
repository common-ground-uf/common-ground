import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  restaurantMain: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  text: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 8,
    width: 100,
    overflow: 'hidden',
  },
});

type RestaurantBubbleProps = {
  thumbnail: string;
  name: string;
  onPress: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
};

function RestaurantBubble(props: RestaurantBubbleProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Image style={styles.image} source={{ uri: props.thumbnail }} />
      <Text style={styles.text}>{props['name']}</Text>
    </TouchableOpacity>
  );
}

export { RestaurantBubble };
