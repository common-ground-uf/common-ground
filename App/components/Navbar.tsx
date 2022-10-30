import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import group from '../assets/group.png';
import person from '../assets/person.png';
import search from '../assets/search.png';

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#FFF9E2',
        marginHorizontal: '5%',
        padding: 20,
        borderRadius: 28.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {},
    image: {
        height: 20,
        width: 20,
        borderWidth: 1,
    },
});

const navbarItems = [
    {
        image: group,
        screen: 'Home',
    },
    {
        image: person,
        screen: 'Profile',
    },
    {
        image: search,
        screen: 'Home',
    },
];

export function Navbar() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selected, setSelected] = React.useState<number>(0);
    const navigation = React.useContext(NavigationContext);
    const onPress = (index: number) => {
        navigation?.navigate(navbarItems[index].screen);
        setSelected(index);
    };
    return (
        <View style={styles.navbar}>
            {navbarItems.map((item, index: number) => (
                <TouchableOpacity key={index} onPress={() => onPress(index)}>
                    <View style={styles.image} />
                </TouchableOpacity>
            ))}
        </View>
    );
}
