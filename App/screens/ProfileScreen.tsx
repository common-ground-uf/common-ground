import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Contact, Profile } from '../commonTypes';
import { Chip } from '../components/Chip';
import { ContactBubble } from '../components/ContactBubble';
import { RestaurantBubble } from '../components/RestaurantBubble';
import { mapContactToProfile } from '../utils';
import { useIsFocused } from '@react-navigation/native';
import { Storage } from '../data/Storage';

const styles = StyleSheet.create({
  profile: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  settings: {
    paddings: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  center: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  name: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    marginRight: 'auto',
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bubble: {
    marginRight: 10,
  },
  verticalSpace: {
    height: 20,
  },
  contactBubble: {
    marginRight: 16,
  },
});

type ProfilePageProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
  profileData: Profile
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: {
    params: {
      profileData: Profile
    }
  }
}

function ProfileScreen(props: ProfilePageProps) {
    let selfId;

    // this is true if the user is looking at their own profile
    const isMyProfile = props.route.params.profileData.id === selfId;
    const profileDataProps = props.route.params.profileData;

    // profileData usestate
    const [profileData, setProfile] = React.useState<Profile>(profileDataProps);

    const getProfileInfo = async () => {
        //Get profile info from async storage
        const profile = await Storage.get('profile');
        let profileId;
        if (profile) {
            const profileInfo = JSON.parse(profile);
            setProfile(profileInfo);
        } else {
            props.navigation.navigate('Login');
        }
    };

    let isFocused = useIsFocused();

    // useEffect for profile
    React.useEffect(() => {
        console.log("Running useEffect for ProfileScreen");
        getProfileInfo();
    }, [isFocused]);

    const onPressRestaurant = () => {
        props.navigation.navigate('Restaurant');
    };

    const onPressContact = (contact: Contact) => {
        props.navigation.navigate('Profile', {
            profileData: mapContactToProfile(contact),
        });
    };

  const onPressSettings = () => {
    props.navigation.navigate('Settings');
  };

  const onPressEditPreferences = () => {
    props.navigation.navigate('Preferences');
  };

  const onPressSeeAllPicks = () => {
    props.navigation.navigate('Restaurant List');
  };

  const onPressSeeAllContacts = () => {
    props.navigation.navigate('All Contacts');
  };

  if (!profileData) return <></>;
  console.log(profileData);

  return (
    <ScrollView style={styles.profile}>
      {isMyProfile && (
        <View style={styles.center}>
          <TouchableOpacity onPress={onPressSettings}>
          <Icon name='gear' size={32} style={styles.settings}/>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.center}>
        <Image
          source={{ uri: props.route.params.profileData.profilePic }}
          style={styles.image}
        />
        <Text style={styles.name}>
          {profileData.firstName} {profileData.lastName}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {isMyProfile && (
          <Button
            onPress={onPressEditPreferences}
            title="Edit"
            color="#ff6e6e"
          />
        )}
      </View>
      <View style={styles.chipContainer}>
        {profileData.pastPicks && profileData.pastPicks.map((preference, index) => (
          <Chip text={preference} key={index} />
        ))}
      </View>
      {/* <View style={styles.row}>
        <Text style={styles.sectionTitle}>Past picks</Text>
        <Button onPress={onPressSeeAllPicks} title="See all" color="#ff6e6e" />
      </View>
      <View style={styles.row}>
        {profileData.pastPicks.length > 0 ? (
          profileData.pastPicks.map((restaurant, index) => (
            <RestaurantBubble
              {...restaurant}
              onPress={onPressRestaurant}
              key={index}
              style={styles.bubble}
            />
          ))
        ) : (
          <Text>No recently visited restaurants</Text>
        )}
      </View> */}
      {isMyProfile && (
        <>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Your contacts</Text>
            <Button
              onPress={onPressSeeAllContacts}
              title="See all"
              color="#ff6e6e"
            />
          </View>
          <View style={styles.row}>
            {profileData.recentContacts.length > 0 ? (
              profileData.recentContacts.map((contact, index) => (
                <ContactBubble
                  {...contact}
                  onPress={() => onPressContact(contact)}
                  key={index}
                  style={styles.contactBubble}
                />
              ))
            ) : (
              <Text>No recent contacts</Text>
            )}
          </View>
        </>
      )}
      <View style={styles.verticalSpace} />
    </ScrollView>
  );
}

export { ProfileScreen };
