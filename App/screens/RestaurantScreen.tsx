import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Restaurant } from '../commonTypes';
import {PriceRating} from '../components/PriceRating';
import {Review} from '../components/Review';

type RestaurantScreenProps = {
  navigation: any,
  route: any,
  restaurant: Restaurant,
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  padding: {
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  reviews: {
    marginVertical: 12,
    fontSize: 20
  },
  averageReviewRating: {
    fontSize: 18,
    marginBottom: 10,
  },
  averageReview: {
    fontSize: 12,
    color: '#444444',
  }
});

function RestaurantScreen(props: RestaurantScreenProps) {
  const restaurant = props.route.params.restaurant;

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: restaurant.thumbnail}}
      />
      <View style={styles.padding}>
        <Text style={styles.title}>
          {restaurant.name}
        </Text>
        <PriceRating rating={3}/>
        <Text style={{marginTop: 12}}>
          {restaurant.address.line1}
        </Text>
        <Text>
          {restaurant.address.line2}
        </Text>
        <Text style={{marginTop: 12}}>
          {restaurant.description}
        </Text>
        <Text style={styles.reviews}>Reviews</Text>
        <Text style={{display: 'flex'}}>
          <Text style={styles.averageReviewRating}>{restaurant.starRating}⭐</Text>
          <Text style={styles.averageReview}>  average review on Yelp</Text>
        </Text>
        {restaurant.reviews.map((review, index) => <Review key={index} {...review}/>)}
      </View>
    </View>
  );
}

export { RestaurantScreen };
