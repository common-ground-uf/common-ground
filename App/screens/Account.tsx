import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';
import {saulProfile} from '../data/dummyUsers';

function Account() {
    // used to give initial values to the text fields
    const profile = saulProfile;

    const [firstName, setFirstName] = React.useState<string>(profile.firstName);
    const [lastName, setLastName] = React.useState<string>(profile.lastName);
    const [email, setEmail] = React.useState<string>(profile.email);
    const [location, setLocation] = React.useState<string>(profile.location);

    const onPressSave = () => {
        console.log('saved');
    };

    return (
        <View style={loginSignupStyles.container}>
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First name"
                autoCapitalize="words"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                autoCapitalize="words"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setLocation}
                value={location}
                placeholder="Location"
            />
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Save" onPress={onPressSave} color="#FF6D6E" />
            </View>
        </View>
    );
}

export {Account};
