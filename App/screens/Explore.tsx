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
// import { exploreSections } from '../data/dummyRestaurants';
import { generateExploreSections } from '../api/yelpHelper';

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginVertical: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 8,
  },
  verticalSpace: {
    width: '100%',
    height: 50,
  },
  input: {
    height: 40,
    marginBottom: 10,
    width: '90%',
    borderRadius: 6,
    marginHorizontal: '5%',
    paddingLeft: 10,
    backgroundColor: '#ddd',
  },
  bubble: {
    paddingRight: 20,
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

  let defaultExploreSections: any[] = [];
  const [exploreSections, setExploreSections] = React.useState(defaultExploreSections);

  const getExploreSections = async () => {
    setExploreSections(await generateExploreSections());
  };

  React.useEffect(() => {
    getExploreSections();
  }, [search]);

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="search"
          style={styles.input}
        />
      </View>
      {exploreSections.map((section: any, index1: number) => (
        <View key={index1}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
            <Button
              onPress={() => {
                props.navigation.navigate('Restaurant List');
              }}
              title="See all"
              color="#ff6e6e"
            />
          </View>
          <ScrollView style={styles.row} horizontal={true}>
            {section.contentData.map((restaurant: any, index2: number) => (
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
