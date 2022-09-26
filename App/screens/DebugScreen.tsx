import React from 'react';
import { View, Button } from 'react-native';

type DebugScreenProps = {
    navigation: any;
}

function DebugScreen(props: DebugScreenProps) {
    const onClick = (screen: string) => {
        props.navigation.navigate(screen);
    };
    const screens = [
        'Login',
        'Signup',
        'Forgor Password 💀',
        'Restaurant',
        'Restaurant List',
        'Profile',
        'Settings',
        'Account',
        'Privacy',
        'Settings',
        'Notifications',
        'Preferences',
        'Home',
        'GroupDetails',
        'ResetPassword',
        'StartNewTableScreen',
        'Gallery'
    ];
    return (
        <View>
            {screens.map((screen, index) => 
                <Button title={screen} onPress={() => onClick(screen)} key={index}/>
            )}
        </View>
    );
}

export { DebugScreen };
