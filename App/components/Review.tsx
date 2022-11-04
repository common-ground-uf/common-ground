import React from 'react';
import { ReviewProps } from '../commonTypes';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  gridItem: {
    padding: 10,
  },
  rating: {
    flexBasis: 1,
    flexShrink: 1,
    minWidth: 50,
  },
  text: {
    flexBasis: 1,
    flexGrow: 1,
  },
});

function Review(props: ReviewProps) {
  return (
    <View style={styles.grid}>
      <View style={[styles.gridItem, styles.rating]}>
        <Text>
          {props.starRating}
          <Icon name="star" size={16} color="orange" />
        </Text>
      </View>
      <View style={[styles.gridItem, styles.text]}>
        <Text>{props.bodyText}</Text>
      </View>
    </View>
  );
}

export { Review };
