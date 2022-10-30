import React from 'react';
import {Text, View, TextInput, Button, Image} from 'react-native';
import {loginSignupStyles as styles} from '../styles/LoginSingup';
import login from '../assets/login.png';

type SignupProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
};

function Signup(props: SignupProps) {
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');
    const [errorState, setErrorState] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    const onPressSignup = () => {
        if (!firstName || !lastName || !email || !password || !passwordConfirmation) {
            setErrorMessage('All fields are required.');
            setErrorState(true);
        } else if (!validateEmail(email)) {
            setErrorMessage('Invalid email.');
            setErrorState(true);
        } else if (password !== passwordConfirmation) {
            setErrorMessage('Passwords do not match.');
            setErrorState(true);
        } else {
            setErrorState(false);
            console.log('sign up');
        }
    };

    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const validateEmail = email => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const onPressHaveAccount = () => {
        props.navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={login} />
            <TextInput
                style={styles.input}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First name"
                autoCapitalize="words"
            />
            <TextInput
                style={styles.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder="LastName"
                autoCapitalize="words"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                autoComplete="password"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                placeholder="Confirm password"
                secureTextEntry={true}
            />
            {errorState && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <Text onPress={onPressHaveAccount} style={styles.link}>
                Already have an account?
            </Text>
            <View style={styles.loginButtonContainer}>
                <Button title="Sign up" onPress={onPressSignup} color="#FF6D6E" />
            </View>
        </View>
    );
}

export {Signup};
