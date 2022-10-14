import React from 'react';
import {Restaurant} from '../commonTypes';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

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
  restaurantList: {
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 10,
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
  starIcon: {
    height: 16,
    width: 16,
    marginTop: -2.15,
    marginRight: 2,
  },
  topRow: {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginBottom: 4,
  },
});

function RestaurantCard(props: Restaurant & {navigation:any}) {
  const onPress = () => {
    props.navigation.navigate('Restaurant');
  };
  return (
    <>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{uri:props.thumbnail}} style={styles.thumbnail}/>
        <View style={{width:16}}/>
        <View style={styles.cardRight}>
          <Text style={styles.topRow}>
            <Text style={styles.cardTitle}>{props.name}</Text>&nbsp;
            <Text>{props.starRating}</Text>
            <Image style={styles.starIcon} source={require('../assets/star.png')} />
          </Text>
          <Text>{props.description}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.horizontalLine}/>
    </>
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
        <RestaurantCard key={index} {...restaurant} navigation={props.navigation}/>
      )}
    </ScrollView>
  );
}

export {RestaurantList};
