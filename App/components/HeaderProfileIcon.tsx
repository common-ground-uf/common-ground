import React from 'react';
import {StyleSheet, Image,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
});

type HeaderProfileIconProps = {
    image: string;
    navigation: {
        navigate: any;
    };
};

const HeaderProfileIcon = (props: HeaderProfileIconProps) => {
    const onPress = () => {
        props.navigation.navigate('Profile');
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.image} source={{uri: props.image}}/>
        </TouchableOpacity>
    );
};

export {HeaderProfileIcon};