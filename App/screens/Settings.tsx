import React from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType
} from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    groupDetails: {
        padding: 20,
    },
    memberContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 24,
        marginRight: 12,
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#bbb',
        marginTop: 15,
    },
});

type SettingsProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
}

type SettingProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
    name: string;
    image: ImageSourcePropType;
}

const Setting = (props: SettingProps) => {

    const onClickSetting = () => {
        props.navigation.navigate(props.name);
    };

    return (
        <>
            <TouchableOpacity onPress={onClickSetting} style={styles.memberContainer}>
                <Icon size={24} name={props.image} style={styles.image}/>
                <Text>{props.name}</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />
        </>
    );
};

function Settings(props: SettingsProps) {

    const Account = {
        name: 'Account',
        image: 'user',
        navigation: props.navigation
    };
    const Privacy = {
        name: 'Privacy',
        image: 'shield',
        navigation: props.navigation
    };
    const Notifications = {
        name: 'Notifications',
        image: 'bell',
        navigation: props.navigation
    };
    const Preferences = {
        name: 'Preferences',
        image: 'asterisk',
        navigation: props.navigation
    }
    const Logout = {
        name: 'Logout',
        image: 'right-from-bracket',
        navigation: props.navigation
    }
    const members = [Account, Privacy, Notifications, Preferences, Logout];
    return (
        <View style={loginSignupStyles.container}>
            <FlatList
                data={members}
                renderItem={(member) => <Setting {...member.item} />}
                style={{width: '100%'}}
            />
        </View>
    );
}

export { Settings };