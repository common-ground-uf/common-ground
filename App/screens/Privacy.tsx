import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';

function Privacy() {
    const [password, setPassword] = React.useState<string>('');
    const [location, setLocation] = React.useState<string>('');

    const onPressSave = () => {
        console.log('saved');
    };

    return (
        <View style={loginSignupStyles.container}>
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setLocation}
                value={location}
                placeholder="Location"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                autoComplete="password"
            />
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Save" onPress={onPressSave} color="#FEB346" />
            </View>
        </View>
    );
}

export {Privacy};
