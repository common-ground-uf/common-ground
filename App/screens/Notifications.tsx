import React from 'react';
import {Switch, View, StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center"
    }
});

type NotificationsProps = {
    navigation: any,
};

function Notifications(props: NotificationsProps) {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

    const [recommendationsEnabled, setRecommendationsEnabled] = React.useState(true);
    const toggleRecommendations = () => setRecommendationsEnabled(previousState => !previousState);

    const [newMessagesEnabled, setNewMessagesEnabled] = React.useState(true);
    const toggleNewMessages = () => setNewMessagesEnabled(previousState => !previousState);

    const [partyInvitesEnabled, setPartyInvitesEnabled] = React.useState(true);
    const togglePartyInvites = () => setPartyInvitesEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text>
                Allow all notifications
            </Text>
            <Switch
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotifications}
                value={notificationsEnabled}
            />
            {!notificationsEnabled ?
                <View style={styles.container}>
                    <Text>
                        Only allow select notifications:
                    </Text>
                    <Text>
                        Recommendations for you
                    </Text>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={recommendationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleRecommendations}
                        value={recommendationsEnabled}
                    />
                    <Text>
                        New messages
                    </Text>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={newMessagesEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNewMessages}
                        value={newMessagesEnabled}
                    />
                    <Text>
                        Party invites
                    </Text>
                    <Switch
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={partyInvitesEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglePartyInvites}
                        value={partyInvitesEnabled}
                    />
                </View>
                : <></>}

        </View>
    )
}

export {Notifications};
