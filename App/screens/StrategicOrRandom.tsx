import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 50,
        margin: 20,
        borderColor: '#FF6D6E',
    },
    strategicOrRandom: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center',
    },
});

type StrategicOrRandomProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
};

export function StrategicOrRandom(props: StrategicOrRandomProps) {
    const onPressStrategic = () => {
        props.navigation.navigate('Restaurant List');
    };

    const onPressRandom = () => {
        props.navigation.navigate('Random Restaurant');
    };

    return (
        <View style={styles.strategicOrRandom}>
            <TouchableOpacity style={styles.button} onPress={onPressStrategic}>
                <Text style={styles.text}>Strategic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressRandom}>
                <Text style={styles.text}>Random</Text>
            </TouchableOpacity>
        </View>
    );
}
