import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  priceRating: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gray: {
    color: '#818181',
  },
});

function PriceRating(props: { rating: number }) {
  return (
    <View style={styles.priceRating}>
      <Text>$</Text>
      <Text style={props.rating >= 2 ? null : styles.gray}>$</Text>
      <Text style={props.rating >= 3 ? null : styles.gray}>$</Text>
      <Text style={props.rating >= 4 ? null : styles.gray}>$</Text>
      <Text style={props.rating >= 5 ? null : styles.gray}>$</Text>
    </View>
  );
}

export { PriceRating };
