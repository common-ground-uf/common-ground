import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  chip: {
    height: 30,
    borderRadius: 25,
    backgroundColor: '#ff6d6e',
    alignItems: 'center',
    padding: 8,
    marginRight: 8,
  },
  text: {
    color: 'white',
  },
});

type ChipProps = {
  text: string;
};

function Chip(props: ChipProps) {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

export { Chip };
