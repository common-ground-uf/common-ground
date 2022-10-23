import React from 'react';
import {Button, Text, TextInput, View, StyleSheet, Image} from "react-native";
import {loginSignupStyles} from "../styles/LoginSingup";
import CommonGround from '../assets/CommonGround.png';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        alignSelf: 'center'
    },
});

type StartProps = {
    navigation: any,
};

function Start(props: StartProps) {
    return (
        <View>
            <Image style={styles.image} source={CommonGround} />
        </View>
    );
}

export { Start };
