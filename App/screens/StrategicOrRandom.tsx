import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 50,
        margin: 20,
        borderColor: 'orange',
    },
    strategicOrRandom: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        textAlign: 'center',
    },
});

export function StrategicOrRandom() {
    return (
        <View style={styles.strategicOrRandom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Strategic
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Random
                </Text>
            </TouchableOpacity>
        </View>
    );
}
