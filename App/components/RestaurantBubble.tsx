import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    marginRight: 16
  },
});

type RestaurantBubbleProps = {
  source: string
}

function RestaurantBubble(props: RestaurantBubbleProps) {
  return (
    <Image style={styles.image} source={{ uri: props.source}}/>
  );
}

export { RestaurantBubble };
