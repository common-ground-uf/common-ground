import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { RestaurantCard } from '../components/RestaurantCard';
import { losPollosHermanos } from '../data/dummyRestaurants';

const styles = StyleSheet.create({
  randomRestaurantScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadeInView: {
    width: '80%',
  },
});

const FadeInView = (props) => {
  // Initial value for opacity: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        // eslint-disable-next-line react/prop-types
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {/* eslint-disable-next-line react/prop-types*/}
      {props.children}
    </Animated.View>
  );
};

type RandomRestaurantProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

// You can then use your `FadeInView` in place of a `View` in your components:
export function RandomRestaurantScreen(props: RandomRestaurantProps) {
  return (
    <View style={styles.randomRestaurantScreen}>
      <Text>Random restaurant:</Text>
      <FadeInView style={styles.fadeInView}>
        <RestaurantCard navigation={props.navigation} {...losPollosHermanos} />
      </FadeInView>
    </View>
  );
}
