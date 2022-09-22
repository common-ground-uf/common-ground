import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType
} from 'react-native';
import {loginSignupStyles} from "../styles/LoginSingup";

import account from '../assets/account.png';
import privacy from '../assets/privacy.png';
import notifications from '../assets/notifications.png';

const styles = StyleSheet.create({
    groupDetails: {
        padding: 20,
    },
    memberContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop: 20,
    }
});

type SettingsProps = {
    navigation: any;
}

type SettingProps = {
    navigation: any,
    name: string,
    image: ImageSourcePropType
}

const Setting = (props: SettingProps) => {

    const onClickSetting = () => {
        props.navigation.navigate(props.name);
    };

    return (
        <>
            <View style={styles.memberContainer}>
                <TouchableOpacity onPress={onClickSetting}>
                <Image style={styles.image} source={props.image} />
                <Text>{props.name}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />
        </>
    );
};

function Settings(props: SettingsProps) {

    const Account = {
        name: 'Account',
        image: account,
        navigation: props.navigation
    };
    const Privacy = {
        name: 'Privacy',
        image: privacy,
        navigation: props.navigation
    };
    const Notifications = {
        name: 'Notifications',
        image: notifications,
        navigation: props.navigation
    };
    const members = [Account, Privacy, Notifications]
    return (
        <View style={loginSignupStyles.container}>
            <FlatList
                data={members}
                renderItem={(member) => <Setting {...member.item} />}
            />
        </View>
    );
}

export { Settings };