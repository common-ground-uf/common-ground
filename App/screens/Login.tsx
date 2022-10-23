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

const axios = require('axios');

type LoginProps = {
    navigation: any;
}

type requestLoginProps = {
    email: string,
    password: string
}

function Login(props: LoginProps) {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [errorState, setErrorState] = React.useState<boolean>(false);

    const onPressForgotPassword = () => {
        props.navigation.navigate('Forgot Password');
    };

    const onPressLogin = () => {
        axios.post('http://192.168.86.93:3000/login', {username: email, password: password})
            .then(response => {
                if(response.data.message === "login success") {
                    console.log("login successful");
                    // User Data object to be processed locally and saved as current login data (cleared after logout)
                    const userData = {
                        email: response.data.userData.email,
                        firstname: response.data.userData.firstname,
                        lastname: response.data.userData.lastname,
                        role: response.data.userData.role,
                    }
                    console.log(userData);
                }
            })
            .catch((error)=> {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if(error.response.data.message === "login failed")
                        console.log("login unsuccessful")
                    else {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            })
    };

    const onPressSignUp = () => {
        props.navigation.navigate('Signup');
    };

    return (
        <View style={loginSignupStyles.container}>
            <Text style={loginSignupStyles.title}>Login</Text>
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
