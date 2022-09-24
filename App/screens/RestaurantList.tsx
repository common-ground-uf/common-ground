import React from 'react';
import {Restaurant} from '../commonTypes';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    padding: 12,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1.95, height: 1.95 },
    shadowOpacity: 0.15,
    shadowRadius: 2.6 
  },
  restaurantList: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
  },
  description: {
    marginTop: 6,
  },
  starRating: {
    marginLeft: 12,
  }
});

function RestaurantCard(props: Restaurant) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{props.name}</Text>
        {props.starRating && 
          <Text style={styles.starRating}>{props.starRating}⭐</Text>
        }
      </View>
      <Text style={styles.description}>{props.description}</Text>
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
      {restaurantList.map((restaurant, index) =>
        <TouchableOpacity key={index} onPress={() => props.navigation. navigate("Restaurant")}>
          <RestaurantCard {...restaurant}/>
        </TouchableOpacity>
      )}
      <View style={{height: 40}}/>
    </ScrollView>
  );
}

export {RestaurantList};
