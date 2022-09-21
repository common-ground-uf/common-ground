import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {loginSignupStyles} from "../styles/LoginSingup";

import ReactInputVerificationCode, {
    ReactInputVerificationCodeProps,
} from 'react-input-verification-code';

type VerificationProps = {
    navigation: any;
}

function Verification(props: VerificationProps) {
    const [code, setCode] = React.useState<string>('');

    const customProps: ReactInputVerificationCodeProps = {
        autoFocus: true,
        onChange: setCode,
        value: code
    };

    return (
        <View style={loginSignupStyles.container}>
            <ReactInputVerificationCode {...customProps} />
        </View>
    );
}

export { Verification };
