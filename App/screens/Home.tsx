/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { GroupBubbles } from '../components/GroupBubbles';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { SERVER_URI } from '../Config';
import { parties, saulProfile } from '../data/dummyUsers';
import { Storage } from '../data/Storage';

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
    paddingHorizontal: 20,
    marginRight: 'auto',
    marginVertical: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
    marginTop: 8,
  },
  sectionHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
    marginTop: 20,
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
  
  const getProfileInfo = async () => {
    //Get profile info from async storage
    const profile = await Storage.get('profile');
    if (profile) {
      const profileInfo = JSON.parse(profile);
      setFirstName(profileInfo.firstName);
      setLastName(profileInfo.lastName);
      setEmail(profileInfo.email);
      setLocation(profileInfo.location);
    } else {
      //TODO: redirect to login page
    }
  };

  const getParties = async () => {
    axios.get(`${SERVER_URI}/groups`, {
      params: {
        name: true,
      },
    }).then((res) => {
      console.log(res.data);
      // setParties(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const [firstName, setFirstName] = React.useState<string>(saulProfile.firstName);
  const [lastName, setLastName] = React.useState<string>(saulProfile.lastName);
  const [email, setEmail] = React.useState<string>(saulProfile.email);
  const [location, setLocation] = React.useState<string>(saulProfile.location);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    getProfileInfo();
    getParties(); 
  }, [isFocused]);

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

  const onPressSeeAllSaved = () => {
    props.navigation.navigate('Restaurant List');
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
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Parties</Text>
        </View>
        <ScrollView style={styles.row} horizontal={true} contentContainerStyle={{alignItems:'flex-start'}}>
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
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Saved restaurants</Text>
          <Button
            onPress={onPressSeeAllSaved}
            title="See all"
            color="#ff6e6e"
          />
        </View>
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
