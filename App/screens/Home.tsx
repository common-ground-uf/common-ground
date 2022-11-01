/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { GroupBubbles } from '../components/GroupBubbles';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { parties, saulProfile } from '../data/dummyUsers';

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
    navigate: any;
  };
};

function Home(props: HomeProps) {

  const [firstName, setFirstName] = React.useState<string>(saulProfile.firstName);
  const [lastName, setLastName] = React.useState<string>(saulProfile.lastName);
  const [email, setEmail] = React.useState<string>(saulProfile.email);
  const [location, setLocation] = React.useState<string>(saulProfile.location);

  axios.get('http://192.168.86.93:3000/auth')
      .then(response => {
        if(response.data.message === 'login success') {
          console.log('auth successful');
          // User Data object to be processed locally and saved as current login data (cleared after logout)
          setEmail(response.data.userData.email);
          setFirstName(response.data.userData.firstname);
          setLastName(response.data.userData.lastname);
          // TODO: Need to get location from user data
        }
      })
      .catch((error)=> {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if(error.response.data.message === 'not logged in')
            console.log('Not logged in!');
          else {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });

  const restaurant = {
    name: 'Los Pollos Hermanos',
    thumbnail:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/05/01/15/lospolloshermanos.jpg?width=1200',
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
          Welcome back, {firstName}!
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
