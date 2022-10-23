import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CommonGround from '../assets/CommonGround.png';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        alignSelf: 'center'
    },
});

function Start() {
    return (
        <View>
            <Image style={styles.image} source={CommonGround} />
        </View>
    );
}

export { Start };
