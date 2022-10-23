import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { GroupBubbles } from '../components/GroupBubbles';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { parties, saulProfile} from '../data/dummyUsers';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  startNewTableWrapper: {
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
  },
  restaurantBubble: {
    marginLeft: 20,
  },
  verticalSpace: {
    height: 20,
  },
});

type HomeProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any,
  };
};

function Home(props: HomeProps) {
  const restaurant = {
    name: 'Los Pollos Hermanos',
    thumbnail: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/05/01/15/lospolloshermanos.jpg?width=1200',
  };

  const onClickRestaurant = () => {
    props.navigation.navigate('Restaurant');
  };

  const onClickGroup = () => {
    props.navigation.navigate('Group Details');
  };

  const recentlyVisited = [restaurant, restaurant, restaurant];
  
  const onPressStartANewTable = () => {
    props.navigation.navigate('Start New Table');
  };

  return (
    <ScrollView>
        <Text style={styles.welcome}>
          Welcome back, {saulProfile.firstName}!
        </Text>
        <View style={styles.startNewTableWrapper}>
          <Button title='Start a new table' color='#FF6D6E' onPress={onPressStartANewTable}/>
        </View>
        <Text style={styles.sectionTitle}>Recently Visited</Text>
        <ScrollView style={styles.row} horizontal={true}>
          {recentlyVisited.map((restaurant, index) => 
            <RestaurantBubble
              key={index}
              {...restaurant}
              onPress={onClickRestaurant}
              style={styles.restaurantBubble}
            />
          )}
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} style={styles.restaurantBubble}/>
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} style={styles.restaurantBubble}/>
        </ScrollView>
        <Text style={styles.sectionTitle}>Parties</Text>
        <ScrollView style={styles.row} horizontal={true}>
          {parties.map((party, index) => 
            <GroupBubbles
              members={party.members}
              name={party.name}
              onClick={onClickGroup}
              style={styles.restaurantBubble}
              key={index}
            />
          )}
        </ScrollView>
        <Text style={styles.sectionTitle}>Saved restaurants</Text>
        <ScrollView style={styles.row} horizontal={true}>
          {recentlyVisited.map((restaurant, index) => 
            <RestaurantBubble
              key={index}
              {...restaurant}
              onPress={onClickRestaurant}
              style={styles.restaurantBubble}
            />
          )}
        </ScrollView>
        <View style={styles.verticalSpace}/>
    </ScrollView>
  );
}

export { Home };
