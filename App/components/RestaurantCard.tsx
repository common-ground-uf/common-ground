import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Restaurant } from '../commonTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  card: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    margin: 8,
    display: 'flex',
    flexDirection: 'row',
    maxHWidth: '100%',
  },
  cardRight: {
    flexGrow: 1,
    flexShrink: 1,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#bbb',
  },
  thumbnail: {
    height: 60,
    width: 60,
    borderRadius: 4,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  topRow: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginBottom: 4,
  },
  horizontalSpace: {
    width: 16,
  },
});

type RestaurantCardProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  restaurant: Restaurant;
};

export function RestaurantCard(props: RestaurantCardProps) {
  const onPress = () => {
    props.navigation.navigate('Restaurant', {
      restaurant: props.restaurant,
    });
  };
  return (
    <>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image
          source={{ uri: props.restaurant.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.horizontalSpace} />
        <View style={styles.cardRight}>
          <Text style={styles.topRow}>
            <Text style={styles.cardTitle}>{props.restaurant.name}&nbsp;</Text>
            <Text>{props.restaurant.starRating}</Text>
            <Icon name="star" size={16} color="orange" />
          </Text>
          <Text>{props.restaurant.description}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine} />
    </>
  );
}
