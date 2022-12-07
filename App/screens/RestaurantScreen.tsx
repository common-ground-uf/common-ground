import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Restaurant } from '../commonTypes';
import { PriceRating } from '../components/PriceRating';
import { Review } from '../components/Review';
import { getBusinessDetails } from '../api/yelpApi';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  padding: {
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 12,
    marginTop: 18,
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 18,
    marginRight: 'auto',
    marginTop: 30,
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
  },
  marginTop: {
    marginTop: 12,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});

type RestaurantScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: {
    params: {
      restaurant: Restaurant;
    };
  };
  restaurant: Restaurant;
};

function RestaurantScreen(props: RestaurantScreenProps) {
  const restaurant = props.route.params.restaurant;

  const [galleryPhotos, setGalleryPhotos] = React.useState<string[]>([]);

  const getGalleryPhotos = async () =>
    getBusinessDetails(restaurant.id).then((data) => {
      return data.photos;
    });

  React.useEffect(() => {
    getGalleryPhotos().then((photos) => {
      setGalleryPhotos(photos);
    });
  }, []);

  if (!restaurant) {
    return null;
  }

  const distanceFormatted = restaurant.distanceMiles
    ? Math.floor(restaurant.distanceMiles * 100) / 100
    : undefined;

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: restaurant.thumbnail }} />
      <View style={styles.padding}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <PriceRating rating={restaurant.priceRating} />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginRight: 8,
            }}
          >
            <Icon
              name="directions"
              size={16}
              color="#FF6D6E"
              style={{ alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 8 }}>Directions</Text>
          </TouchableOpacity>
          {restaurant.address ? (
            <View>
              {restaurant.address.line1 ? (
                <Text style={styles.marginTop}>{restaurant.address.line1}</Text>
              ) : null}
              {restaurant.address.line2 ? (
                <Text>{restaurant.address.line2}</Text>
              ) : null}
            </View>
          ) : null}
          {restaurant.distanceMiles ? (
            <Text>{distanceFormatted} miles away</Text>
          ) : null}
        </View>
        <Text style={styles.marginTop}>{restaurant.description}</Text>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {restaurant.reviews && restaurant.reviews.length > 0 ? (
            <Button
              title="See all"
              onPress={() => {
                console.log('see all');
              }}
              color="#ff6e6e"
            />
          ) : null}
        </View>
        <Text style={{ display: 'flex' }}>
          <Text style={styles.averageReviewRating}>
            {restaurant.starRating}
            <Icon name="star" size={16} color="orange" />
          </Text>
          <Text style={styles.averageReview}> average review on Yelp</Text>
        </Text>
        {restaurant.reviews ?
          restaurant.reviews.map((review, index) => (
            <Review key={index} {...review} />
          )) : null}
        {galleryPhotos && galleryPhotos.length > 0 ? (
          <View>
            <View style={styles.row}>
              <Text style={styles.sectionTitle}>Gallery</Text>
            </View>
            <ScrollView style={styles.gallery} horizontal={true}>
              {galleryPhotos.map((image: string, index: number) => (
                <Image
                  style={styles.galleryImage}
                  source={{ uri: image }}
                  key={index}
                />
              ))}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

export { RestaurantScreen };
