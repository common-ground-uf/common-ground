import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {Chip} from '../components/Chip';
import {ContactBubble} from '../components/ContactBubble';
import {RestaurantBubble} from '../components/RestaurantBubble';
import {saulProfile} from '../data/dummyUsers';

const styles = StyleSheet.create({
    profile: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
    settings: {
        width: 50,
        height: 50,
        paddings: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    center: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    name: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 12,
        flexGrow: 1,
    }
});

type ProfileProps = {
    navigation: any,
}

function Profile(props: ProfileProps) {
    const onPressRestaurant = () => {
        props.navigation.navigate('Restaurant');
    };

    const onPressContact = () => {
        props.navigation.navigate('Profile');
    };

    const onPressSettings = () => {
        props.navigation.navigate('Settings');
    };

    const onPressEditPreferences = () => {
        props.navigation.navigate('Preferences');
    };

    const onPressSeeAllPicks = () => {
        props.navigation.navigate('Restaurant List');
    };

    return (
        <ScrollView style={styles.profile}>
            <View style={styles.center}>
                <TouchableOpacity onPress={onPressSettings}>
                    <Image source={require('../assets/settings.png')} style={styles.settings} />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Image source={{ uri: saulProfile.profilePic }} style={styles.image} />
                <Text style={styles.name}>Saul Goodman</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sectionTitle}>
                    Your preferences
                </Text>
                <Button onPress={onPressEditPreferences} title="Edit"/>
                {saulProfile.preferences.map((preference, index) => <Chip text={preference} key={index}/>)}
            </View>
            <View style={styles.row}>
                <Text style={styles.sectionTitle}>
                    Past picks
                </Text>
                <Button onPress={onPressSeeAllPicks} title="See all"/>
            </View>
            <ScrollView style={styles.row} horizontal={true}>
                {saulProfile.pastPicks.map((restaurant, index) =>
                    <RestaurantBubble {...restaurant} onPress={onPressRestaurant} key={index}/>
                )}
            </ScrollView>
            <Text style={styles.sectionTitle}>
                Your contacts
            </Text>
            <View style={styles.row}>
                {saulProfile.recentContacts.map((contact, index) =>
                    <ContactBubble {...contact} onPress={onPressContact} key={index}/>
                )}
            </View>
        </ScrollView>
    );
}

export { Profile };
