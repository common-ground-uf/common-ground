import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { generateExploreSections } from '../api/yelpHelper';
import { Restaurant, SectionProps } from '../commonTypes';
import { useIsFocused } from '@react-navigation/native';

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
  bubble: {
    paddingRight: 20,
  },
  headerRow: {
    marginTop: 30,
  },
  errorText: {
    marginLeft: 20,
    marginTop: 20,
  }
});

type HomeProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function Explore(props: HomeProps) {
  const onClickRestaurant = (restaurant: Restaurant) => {
    props.navigation.navigate('Restaurant', {
      restaurant,
    });
  };

  const defaultExploreSections: SectionProps[] = [];
  const [exploreSections, setExploreSections] = React.useState(
    defaultExploreSections
  );

  const getExploreSections = async () => {
    setExploreSections(await generateExploreSections());
  };

  const isFocused = useIsFocused();

  React.useEffect(() => {
    getExploreSections();
  }, [isFocused]);

  return (
    <ScrollView style={styles.scrollView}>
      {exploreSections.map((section: SectionProps, index1: number) => {
        if (section.contentData && section.contentData.length > 0) {
          return (
            <View key={index1}>
              <View style={[styles.row, styles.headerRow]}>
                <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
                <Button
                  onPress={() => {
                    props.navigation.navigate('Restaurant List', {
                      restaurantList: section.contentData.map(
                        (restaurant: Restaurant) => {
                          return restaurant;
                        }
                      ),
                    });
                  }}
                  title="See all"
                  color="#ff6e6e"
                />
              </View>
              <ScrollView style={styles.row} horizontal={true}>
                {section.contentData.map(
                  (restaurant: Restaurant, index2: number) => (
                    <RestaurantBubble
                      key={index2}
                      {...restaurant}
                      onPress={() => onClickRestaurant(restaurant)}
                      style={styles.bubble}
                    />
                  )
                )}
              </ScrollView>
            </View>
          );
        }
        return <Text style={styles.errorText} key={index1}>No restaurants found with tag {section.sectionTitle}</Text>;
      })}
      <View style={styles.verticalSpace} />
    </ScrollView>
  );
}

export { Explore };
