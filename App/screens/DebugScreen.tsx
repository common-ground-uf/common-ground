import React from 'react';
import { ScrollView, Button, View, StyleSheet, Text, Linking } from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    debugScreen: {
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    verticalSpace: {
        height: 40,
    },
});

type DebugScreenProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    }
}

function DebugScreen(props: DebugScreenProps) {
    const onClick = (screen: string) => {
        props.navigation.navigate(screen);
    };
    const screens = [
        'Start',
        'Login',
        'Signup',
        'Forgot Password',
        'Reset Password',
        'Preferences',
        'Start New Table',
        'Restaurant List',
        'Restaurant',
        'Gallery',
        'Profile',
        'Account',
        'Privacy',
        'Settings',
        'Notifications',
        'Group Details',
        'Explore',
        'Strategic or random',
        'Random Restaurant',
    ];
    const onPressBreakinBadWithCommentarySeason1Episode1_Pilot_wWalterJesseSkylerHankMarieWJ = () => {
        Linking.openURL('https://www.youtube.com/watch?v=gf0xPOS1Bdg');
    };
    return (
        <ScrollView style={styles.debugScreen}>
            <View style={styles.verticalSpace}/>
            <Text>Select a screen</Text>
            <Button
                title='Breaking Bad With Commentary Season 1 Episode 1 - Pilot | w/Walter, Jesse, Skyler, Hank, Marie & WJ'
                onPress={onPressBreakinBadWithCommentarySeason1Episode1_Pilot_wWalterJesseSkylerHankMarieWJ}
            />
            {screens.map((screen, index) => 
                <View style={styles.button} key={index}>
                    <Button title={screen} onPress={() => onClick(screen)} />
                </View>
            )}
        </ScrollView>
    );
}

export { DebugScreen };
