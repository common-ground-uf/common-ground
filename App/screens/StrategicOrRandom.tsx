import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 20,
    },
    strategicOrRandom: {
        display: 'flex',
        flexDirection: 'column',
    }
});

export function StrategicOrRandom() {
    return (
        <View style={styles.strategicOrRandom}>
            <Button title='Strategic'/>
            <Button title='Random'/>
        </View>
    );
}
