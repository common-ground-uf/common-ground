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

type LoginProps = {
    navigation: any;
}

function Login(props: LoginProps) {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [errorState, setErrorState] = React.useState<boolean>(false);

    const onPressForgotPassword = () => {
        props.navigation.navigate('Forgot Password');
    };

    const onPressLogin = () => {
        console.log('log in');
    };

    const onPressSignUp = () => {
        props.navigation.navigate('Signup');
    };

    return (
        <View style={loginSignupStyles.container}>
            <Image style={styles.image} source={login}/>
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                autoComplete='password'
            />
            {errorState &&
            <Text style={loginSignupStyles.errorMessage}>email and password do not match 😭</Text>
            }
            <Text onPress={onPressForgotPassword} style={loginSignupStyles.link}>Forgot password</Text>
            <Text onPress={onPressSignUp} style={loginSignupStyles.link}>Sign up</Text>
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Login" onPress={onPressLogin} color="#FEB346"/>
            </View>
        </View>
    );
}

export {Login};
