import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Contact, Profile } from '../commonTypes';
import { ContactListItem } from '../components/ContactListItem';
import { generateOrderedRestaurantList } from '../api/yelpHelper';
import axios from 'axios';
import { SERVER_URI } from '../Config';
import {GroupInfo} from '../commonTypes';

const styles = StyleSheet.create({
  groupDetails: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  settings: {
    paddings: '100%',
    opacity: 0.6,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupName: {
    fontSize: 20,
  },
});

type GroupDetailsProps = {
  name: string;
  users: Contact[];
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: {
    params: {
        users: any[],
        id: string,
        name: string,
    }
  };
};

function GroupDetails(props: GroupDetailsProps) {
  const [members, setMembers] = React.useState<Array<any>>(
    props.route.params.users
  );
  const [editMode, setEditMode] = React.useState(false);

  console.log("Members: " + JSON.stringify(members));

  const onClickSettings = () => {
    setEditMode(!editMode);
  };

  const onDelete = (toDelete: number) => {
    const newMembers = members.filter((member, index) => index !== toDelete);
    setMembers(newMembers);
  };

  const groupName = props.route.params.name;

  const userIDs = members.map((member) => member._id);
  console.log("User IDs: " + userIDs);

  const getGroupPreferences = async (groupId: string) => {
    // get preferences for each user in the group and consolidate into 1 string array
    const preferences: string[] = (await Promise.all(members.map(async (member: any) => {
        let prefs = member.pastPicks;
        return prefs;
    }))).reduce((acc: string[], curr: string[]) => {
        return acc.concat(curr);
    }, []);


    return preferences;
  };

  const onPressGenerateRecommendations = async () => {
    console.log("Generating recommendations...");
    // use axios to get group preferences for this group
    let groupId = props.route.params.id;
    let categoryAliasList: string[] = await getGroupPreferences(groupId);
    console.log("categoryAliasList: " + categoryAliasList);

    // extract the category aliases that contain dollar signs
    let dollarSigns = categoryAliasList.filter((categoryAlias) => categoryAlias.includes("$"));
    
    // remove duplicates from dollarSigns
    dollarSigns = dollarSigns.filter((dollarSign, index) => dollarSigns.indexOf(dollarSign) === index);

    // convert dollar signs to integers based on number of dollar signs
    let dollarSignInts: number[] = dollarSigns.map((dollarSign) => dollarSign.length);

    // remove the dollar signs from the category aliases
    let dollarSignlessCategoryAliasList = categoryAliasList.filter((categoryAlias) => !categoryAlias.includes("$"));

    // let { latitude, longitude } = await GetLocation.getCurrentPosition({enableHighAccuracy: false, timeout: 15000});
    let {latitude, longitude} = {latitude: 29.648292, longitude: -82.345171};

    let restaurantList = await generateOrderedRestaurantList([{ latitude, longitude }], [dollarSignlessCategoryAliasList], dollarSignInts);

    //pick 1 restaurant from the list
    let restaurant = [restaurantList[Math.floor(Math.random() * restaurantList.length)]];

    console.log("restaurantList: " + JSON.stringify(restaurantList));

    props.navigation.navigate('Restaurant List', {
        restaurantList: restaurant,
    });
  };

  return (
    <View style={styles.groupDetails}>
      <View style={styles.topRow}>
        <Text style={styles.groupName}>{groupName}</Text>
        <TouchableOpacity onPress={onClickSettings}>
          <Icon name='gear' size={32} style={styles.settings}/>
        </TouchableOpacity>
      </View>
      {!members || members.length === 0 ? (
        <Text>Group is empty</Text>
      ) : (
        <FlatList
          data={members}
          renderItem={(member) => (
            <ContactListItem
              memberData={member.item}
              onDelete={() => onDelete(member.index)}
              editMode={editMode}
              last={member.index === members.length - 1}
              navigate={props.navigation.navigate}
            />
          )}
        />
      )}
      <Button title='Generate recommendations' onPress={onPressGenerateRecommendations} />
    </View>
  );
}

export { GroupDetails };
