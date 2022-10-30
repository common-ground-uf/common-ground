import React from 'react';
import {Switch, View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        alignItems: 'center',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 12,
    },
    text: {
        flexGrow: 1,
    },
});

function Notifications() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

    const [recommendationsEnabled, setRecommendationsEnabled] = React.useState(true);
    const toggleRecommendations = () => setRecommendationsEnabled(previousState => !previousState);

    const [newMessagesEnabled, setNewMessagesEnabled] = React.useState(true);
    const toggleNewMessages = () => setNewMessagesEnabled(previousState => !previousState);

    const [partyInvitesEnabled, setPartyInvitesEnabled] = React.useState(true);
    const togglePartyInvites = () => setPartyInvitesEnabled(previousState => !previousState);

    const trackColor = {false: '#767577', true: '#FEB346'};

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Allow all notifications</Text>
                <Switch
                    trackColor={trackColor}
                    thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleNotifications}
                    value={notificationsEnabled}
                />
            </View>
            {!notificationsEnabled ? (
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Only allow select notifications:</Text>
                    <View style={styles.row}>
                        <Text style={styles.text}>Recommendations for you</Text>
                        <Switch
                            trackColor={trackColor}
                            thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleRecommendations}
                            value={recommendationsEnabled}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>New messages</Text>
                        <Switch
                            trackColor={trackColor}
                            thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleNewMessages}
                            value={newMessagesEnabled}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Party invites</Text>
                        <Switch
                            trackColor={trackColor}
                            thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={togglePartyInvites}
                            value={partyInvitesEnabled}
                        />
                    </View>
                </View>
            ) : (
                <></>
            )}
        </View>
    );
}

export {Notifications};
