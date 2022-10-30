import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { Contact, Profile } from "../commonTypes";
import { Chip } from "../components/Chip";
import { ContactBubble } from "../components/ContactBubble";
import { RestaurantBubble } from "../components/RestaurantBubble";
import { mapContactToProfile } from "../utils";

const styles = StyleSheet.create({
  profile: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    height: "100%",
  },
  settings: {
    width: 32,
    height: 32,
    paddings: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: "auto",
    marginRight: "auto",
  },
  center: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  name: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 12,
    marginRight: "auto",
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
  },
  bubble: {
    marginRight: 10,
  },
});

type ProfilePageProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  profileData: Profile;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
};

function ProfileScreen(props: ProfilePageProps) {
  const selfId = "4";

  // this is true if the user is looking at their own profile
  const myProfile = props.route.params.profileData.id === selfId;

  const onPressRestaurant = () => {
    props.navigation.navigate("Restaurant");
  };

  const onPressContact = (contact: Contact) => {
    props.navigation.navigate("Profile", {
      profileData: mapContactToProfile(contact),
    });
  };

  const onPressSettings = () => {
    props.navigation.navigate("Settings");
  };

  const onPressEditPreferences = () => {
    props.navigation.navigate("Preferences");
  };

  const onPressSeeAllPicks = () => {
    props.navigation.navigate("Restaurant List");
  };

  const onPressSeeAllContacts = () => {
    props.navigation.navigate("All Contacts");
  };

  if (!props.route.params.profileData) return <></>;

  return (
    <ScrollView style={styles.profile}>
      {myProfile && (
        <View style={styles.center}>
          <TouchableOpacity onPress={onPressSettings}>
            <Image
              source={require("../assets/settings.png")}
              style={styles.settings}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.center}>
        <Image
          source={{ uri: props.route.params.profileData.profilePic }}
          style={styles.image}
        />
        <Text style={styles.name}>{props.route.params.profileData.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <Button onPress={onPressEditPreferences} title="Edit" />
      </View>
      <View style={styles.chipContainer}>
        {props.route.params.profileData.preferences.map((preference, index) => (
          <Chip text={preference} key={index} />
        ))}
      </View>
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Past picks</Text>
        <Button onPress={onPressSeeAllPicks} title="See all" />
      </View>
      <View style={styles.row}>
        {props.route.params.profileData.pastPicks.map((restaurant, index) => (
          <RestaurantBubble
            {...restaurant}
            onPress={onPressRestaurant}
            key={index}
            style={styles.bubble}
          />
        ))}
      </View>
      {myProfile && (
        <>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Your contacts</Text>
            <Button onPress={onPressSeeAllContacts} title="See all" />
          </View>
          <View style={styles.row}>
            {props.route.params.profileData.recentContacts.map(
              (contact, index) => (
                <ContactBubble
                  {...contact}
                  onPress={() => onPressContact(contact)}
                  key={index}
                />
              )
            )}
          </View>
        </>
      )}
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

export { ProfileScreen };
