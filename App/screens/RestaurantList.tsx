import React from 'react';
import {Restaurant} from '../commonTypes';
import { StyleSheet, ScrollView } from 'react-native';
import { RestaurantCard } from '../components/RestaurantCard';

const styles = StyleSheet.create({
  restaurantList: {
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});

type RestaurantListProps = {
  navigation: {
    navigate: any
  };
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
        <RestaurantCard key={index} {...restaurant} navigation={props.navigation}/>
      )}
    </ScrollView>
  );
}

export {RestaurantList};
