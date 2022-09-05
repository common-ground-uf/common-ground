import React from 'react';
import {Restaurant} from '../commonTypes';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    padding: 12,
    margin: 8,
    // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  restaurantList: {
    paddingTop: 0,
    paddingBottom: 20,
  }
});

function RestaurantCard(props: Restaurant) {
  return (
    <View style={styles.card}>
      <Text>{props.name}</Text>
      <Text>{props.starRating}⭐</Text>
      <Text>{props.description}</Text>
    </View>
  );
}

type RestaurantListProps = {
  navigation: any,
  route: any,
  restaurantList: Restaurant[],
}

function RestaurantList(props: RestaurantListProps) {
  const restaurantList = props.route.params.restaurantList;

  if (!restaurantList || restaurantList.length === 0) {
    return null;
  }
  
  return (
    <ScrollView style={styles.restaurantList}>
      {restaurantList.map((restaurant, index) => <RestaurantCard key={index} {...restaurant}/>)}
    </ScrollView>
  );
}

export {RestaurantList};
