import React from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { Restaurant } from '../commonTypes';
import {PriceRating} from '../components/PriceRating';
import {Review} from '../components/Review';
import {gallery} from '../data/dummyData';
import Icon from 'react-native-vector-icons/FontAwesome';

type RestaurantScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
  restaurant: Restaurant;
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
  sectionTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18
  },
  averageReviewRating: {
    fontSize: 18,
    marginBottom: 10,
  },
  averageReview: {
    fontSize: 12,
    color: '#444444',
  },
  gallery: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
    marginHorizontal: -20,
  },
  galleryImage: {
    height: 100,
    width: 100,
    borderRadius: 2,
    marginLeft: 20,
  }
});

function RestaurantScreen(props: RestaurantScreenProps) {
  const restaurant = props.route.params.restaurant;

  if (!restaurant) {
    return null;
  }

  const onPressSeeAllGallery = () => {
    props.navigation.navigate('Gallery');
  };

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
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={{display: 'flex'}}>
          <Text style={styles.averageReviewRating}>{restaurant.starRating}<Icon name="star" size={16} color="orange" /></Text>
          <Text style={styles.averageReview}>  average review on Yelp</Text>
        </Text>
        {restaurant.reviews.map((review, index) => <Review key={index} {...review}/>)}
        <View>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <ScrollView style={styles.gallery} horizontal={true}>
            {gallery.map((image, index) => 
              <Image style={styles.galleryImage} source={{uri: image}} key={index} />
            )}
          </ScrollView>
          <Button title="See all" onPress={onPressSeeAllGallery}/>
        </View>
      </View>
    </View>
  );
}

export { RestaurantScreen };
