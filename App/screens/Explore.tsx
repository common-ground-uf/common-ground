import React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { RestaurantBubble } from '../components/RestaurantBubble';
import {exploreSections} from '../data/dummyRestaurants';

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
    },
    verticalSpace: {
        width: '100%',
        height: 50,
    },
    input: {
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 20,
    },
});

type HomeProps = {
    navigation: {
        navigate: any,
    };
};

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
            {exploreSections.map((section, index1) => 
                <View key={index1}>
                    <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {section.contentData.map((restaurant, index2) => 
                            <RestaurantBubble key={index2} {...restaurant} onPress={onClickRestaurant} />
                        )}
                    </ScrollView>
                </View>
            )}
            <View style={styles.verticalSpace}/>
        </ScrollView>
    );
}

export { Explore };