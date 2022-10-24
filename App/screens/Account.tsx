import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';


type AccountProps = {
    navigation: {
        navigate: any,
    };
};

function Account(props: AccountProps) {
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [birthday, setBirthday] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [phone, setPhone] = React.useState<string>('');
    const [location, setLocation] = React.useState<string>('');

    const onPressSave = () => {
        console.log('saved');
    };

    return (
        <View style={loginSignupStyles.container}>
            <Text style={loginSignupStyles.title}>Account</Text>
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First name"
                autoCapitalize='words'
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                autoCapitalize='words'
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setBirthday}
                value={birthday}
                placeholder="Birthday"
                autoCapitalize='none'
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                autoCapitalize='none'
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setPhone}
                value={phone}
                placeholder="Phone Number"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setLocation}
                value={location}
                placeholder="Location"
            />
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Save" onPress={onPressSave} color="#FEB346"/>
            </View>
        </View>
    );
}

export { Account };
