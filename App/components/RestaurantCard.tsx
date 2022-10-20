import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Restaurant } from '../commonTypes';

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

export function RestaurantCard(props: Restaurant & {navigation:any}) {
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