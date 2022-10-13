import React from 'react';
import {Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';
import login from '../assets/login.png';

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '10%',
        alignSelf: 'center',
        marginBottom: '5%'
    },
});
type SignupProps = {
    navigation: any;
}

function Signup(props: SignupProps) {
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');

    const onPressSignup = () => {
        console.log('sign up');
    };

    const onPressHaveAccount = () => {
        props.navigation.navigate('Login');
    };

    return (
        <View style={loginSignupStyles.container}>
            <Image style={styles.image} source={login}/>
            <Text style={loginSignupStyles.title}>Sign up</Text>
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
                placeholder="LastName"
                autoCapitalize='words'
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
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                autoComplete='password'
                secureTextEntry={true}
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                placeholder="Confirm password"
                secureTextEntry={true}
            />
            <Text onPress={onPressHaveAccount} style={loginSignupStyles.link}>Already have an account?</Text>
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Sign up" onPress={onPressSignup} color="#FEB346"/>
            </View>
        </View>
    );
}

export {Signup};
