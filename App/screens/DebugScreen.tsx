import React from 'react';
import { ScrollView, Button, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    debugScreen: {
        paddingHorizontal: 20,
        marginVertical: 20,
    },
});

type DebugScreenProps = {
    navigation: {
        navigate: any,
    }
}

function DebugScreen(props: DebugScreenProps) {
    const onClick = (screen: string) => {
        props.navigation.navigate(screen);
    };
    const screens = [
        'Signup',
        'Forgot Password',
        'Reset Password',
        'Preferences',
        'Start New Table Screen',
        'Restaurant List',
        'Restaurant',
        'Gallery',
        'Profile',
        'Account',
        'Settings',
        'Privacy',
        'Settings',
        'Notifications',
        'Group Details',
        'Explore',
        'Strategic or random',
    ];
    return (
        <ScrollView style={styles.debugScreen}>
            <Text>Select a screen</Text>
            {screens.map((screen, index) => 
                <View style={styles.button} key={index}>
                    <Button title={screen} onPress={() => onClick(screen)} />
                </View>
            )}
        </ScrollView>
    );
}

export { DebugScreen };
