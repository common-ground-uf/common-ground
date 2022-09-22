import React from 'react';
import {TouchableOpacity, Image, View, Text, StyleSheet} from 'react-native';
import {Chip} from '../components/Chip';
import {ContactBubble} from '../components/ContactBubble';
import {RestaurantBubble} from '../components/RestaurantBubble';
import {saulProfile} from '../data/dummyData';

const styles = StyleSheet.create({
    profile: {
        padding: 20,
    },
    settings: {
        width: 50,
        height: 50,
        paddings: '100%',
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
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 12,
    }
});

type ProfileProps = {
    navigation: any,
}

function Profile(props: ProfileProps) {
    const onClickRestaurant = () => {
        props.navigation.navigate('Restaurant');
    };

    const onClickContact = () => {
        props.navigation.navigate('Profile');
    };

    const onClickSettings = () => {
        props.navigation.navigate('Settings');
    };

    return (
        <View style={styles.profile}>
            <View style={styles.center}>
                <TouchableOpacity onPress={onClickSettings}>
                    <Image source={require('../assets/settings.png')} style={styles.settings}/>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Image source={{uri: saulProfile.profilePic}} style={styles.image}/>
                <Text style={styles.name}>Saul Goodman</Text>
            </View>
            <Text style={styles.sectionTitle}>
                Your preferences
            </Text>
            <View style={styles.row}>
                {saulProfile.preferences.map((preference, index) => <Chip key={index} text={preference}/>)}
            </View>
            <Text style={styles.sectionTitle}>
                Past picks
            </Text>
            <View style={styles.row}>
                {saulProfile.pastPicks.map((restaurant, index) =>
                    <RestaurantBubble {...restaurant} key={index} onClick={onClickRestaurant}/>
                )}
            </View>
            <Text style={styles.sectionTitle}>
                Your contacts
            </Text>
            <View style={styles.row}>
                {saulProfile.recentContacts.map((contact, index) =>
                    <ContactBubble {...contact} key={index} onClick={onClickContact}/>
                )}
            </View>
        </View>
    );
}

export {Profile};
