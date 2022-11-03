import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { exploreSections } from '../data/dummyRestaurants';

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
  },
  verticalSpace: {
    width: '100%',
    height: 50,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    width: '90%',
    borderRadius: 20,
    marginHorizontal: '5%',
    paddingLeft: 10,
  },
  bubble: {
    marginLeft: 20,
  },
  headerRow: {
    marginTop: 30,
  },
});

type HomeProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
}

function Explore(props: HomeProps) {
  const [search, setSearch] = React.useState('');
  const onClickRestaurant = () => {
    props.navigation.navigate('Restaurant');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="search"
        style={styles.input}
      />
      {exploreSections.map((section, index1) => (
        <View key={index1}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
            <Button
              onPress={() => {
                console.log('see all');
              }}
              title="See all"
              color="#ff6e6e"
            />
          </View>
          <ScrollView style={styles.row} horizontal={true}>
            {section.contentData.map((restaurant, index2) => (
              <RestaurantBubble
                key={index2}
                {...restaurant}
                onPress={onClickRestaurant}
                style={styles.bubble}
              />
            ))}
          </ScrollView>
        </View>
      ))}
      <View style={styles.verticalSpace} />
    </ScrollView>
  );
}

export { Explore };
