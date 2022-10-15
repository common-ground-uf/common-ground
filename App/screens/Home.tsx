import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { GroupBubbles } from '../components/GroupBubbles';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { Finger, Gus, Walter } from '../data/dummyUsers';

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
  }
});

type HomeProps = {
  navigation: {
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
  const members = [Gus, Walter, Finger];

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.welcome}>
          Welcome back, Saul!
        </Text>
        <View style={styles.startNewTableWrapper}>
          <Button title='Start a new table' color='#FEB346'/>
        </View>
        <Text style={styles.sectionTitle}>Recently Visited</Text>
        <View style={styles.row}>
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
        </View>
        <Text style={styles.sectionTitle}>Parties</Text>
        <View style={styles.row}>
          <GroupBubbles members={members} name='The boys' onClick={onClickGroup} />
          <GroupBubbles members={members} name='Your mom fan club' onClick={onClickGroup} />
          <GroupBubbles members={members} name='Work' onClick={onClickGroup} />
          <GroupBubbles members={members} name='Family' onClick={onClickGroup} />
        </View>
        <Text style={styles.sectionTitle}>Saved restaurants</Text>
        <View style={styles.row}>
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
          <RestaurantBubble {...restaurant} onPress={onClickRestaurant} />
        </View>
      </View>
    </ScrollView>
  );
}

export { Home };
