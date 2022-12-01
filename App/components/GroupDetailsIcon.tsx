import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Profile } from '../commonTypes';

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
});

type HeaderProfileIconProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
    };
    members: Profile[];
    name: string;
};

const GroupDetailsIcon = (props: HeaderProfileIconProps) => {
    const onPress = () => {
        props.navigation.navigate('Group Details', {
            members: props.members,
            name: props.name,
        });
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name="info" size={16} color="blue" style={styles.icon}/>
        </TouchableOpacity>
    );
};

export {GroupDetailsIcon};