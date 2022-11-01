import React from 'react';
import { Text, View, TextInput, Button  } from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';

function JoinGroup() {
    const [inviteCode, setInviteCode] = React.useState('');

    const onPressJoinGroup = () => {
        console.log('Joined Group '+inviteCode);
    };

    return (
        <View style={loginSignupStyles.container}>
            <Text style={loginSignupStyles.title}>Join Group</Text>
            <TextInput
                style={loginSignupStyles.input}
                onChangeText={setInviteCode}
                value={inviteCode}
                placeholder="Invite Code"
            />
            <View style={loginSignupStyles.loginButtonContainer}>
                <Button title="Join Group" onPress={onPressJoinGroup} color="#FEB346"/>
            </View>
        </View>
    );
}

export { JoinGroup };