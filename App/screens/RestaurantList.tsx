import React from 'react';
import {Restaurant} from '../commonTypes';
import {StyleSheet, ScrollView, TextInput, Text, TouchableOpacity, View} from 'react-native';
import {RestaurantCard} from '../components/RestaurantCard';

const styles = StyleSheet.create({
    restaurantList: {
        paddingTop: 0,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    searchBox: {
        padding: 8,
        marginHorizontal: 14,
        marginBottom: 12,
        borderRadius: 6,
        marginTop: 20,
        backgroundColor: '#ddd',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    sortButton: {
        padding: 8,
        borderRadius: 24,
        backgroundColor: '#FF6D6E',
        marginLeft: 10,
    },
    sortButtonText: {
        color: 'white',
    },
});

type RestaurantListProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
    route: {
        params: {
            restaurantList: Restaurant[];
        }
    };
    restaurantList: Restaurant[];
};

function RestaurantList(props: RestaurantListProps) {
    const [searchText, setSearchText] = React.useState<string>('');

    const [restaurantList, setRestaurantList] = React.useState<Restaurant[]>(props.route.params.restaurantList);


    if (!restaurantList || restaurantList.length === 0) {
        return null;
    }

    React.useEffect(() => {
        // Force rerender on search to effectively filter through restaurants
    }, [searchText]);

    const onPressFilterPriceButton = () => {
        const temp = restaurantList.sort(function (r1, r2) {
            return r1.priceRating - r2.priceRating;
        });
        console.log(temp);
        setRestaurantList([...temp]);
    };

    const onPressFilterRatingButton = () => {
        const temp = restaurantList.sort(function (r1, r2) {
            return (r1.starRating || 1) - (r2.starRating || 1);
        });
        console.log(temp);
        setRestaurantList([...temp]);
    };

    const onPressFilterDistanceButton = () => {
        const temp = restaurantList.sort(function (r1, r2) {
            return (r1.distanceMiles || 1000) - (r2.distanceMiles || 1000);
        });
        console.log(temp);
        setRestaurantList([...temp]);
    };

    return (
        <ScrollView style={styles.restaurantList}>
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search"
                autoCapitalize="words"
                style={styles.searchBox}
            />
            <View style={styles.row}>
                <Text>Sort by:</Text>
                <TouchableOpacity onPress={onPressFilterPriceButton} style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressFilterRatingButton} style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Rating</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressFilterDistanceButton} style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Distance</Text>
                </TouchableOpacity>
            </View>
            {restaurantList.filter(restaurant => restaurant.name.toUpperCase().includes(searchText.toUpperCase())).map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                    restaurant={restaurant}
                    navigation={props.navigation}
                />
            ))}
        </ScrollView>
    );
}

export {RestaurantList};
