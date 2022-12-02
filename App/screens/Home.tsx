/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { GroupBubble } from '../components/GroupBubble';
import { Storage } from '../data/Storage';
import { SERVER_URI } from '../Config';
import { Profile, GroupInfo, Restaurant } from '../commonTypes';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  startNewTableWrapper: {
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 20,
    marginRight: 'auto',
    marginVertical: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
    marginTop: 8,
  },
  sectionHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap',
    marginTop: 20,
  },
  restaurantBubble: {
    marginLeft: 20,
  },
  verticalSpace: {
    height: 20,
  },
});

type HomeProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

function Home(props: HomeProps) {
  const [firstName, setFirstName] = React.useState<string>('');
  const [groups, setGroups] = React.useState<GroupInfo[]>([]);
  const [location, setLocation] = React.useState<string>('');
  const [pastPicks, setPastPicks] = React.useState<Restaurant[]>([]);

  const getProfileInfo = async () => {
    //Get profile info from async storage
    const profile = await Storage.get('profile');
    let profileId;
    if (profile) {
      const profileInfo = JSON.parse(profile);
      profileId = profileInfo.id;
      setFirstName(profileInfo.firstName);
      setLocation(profileInfo.location);
      setPastPicks([]);
    } else {
      props.navigation.navigate('Login');
    }
  };

  const getUsersByIds = async (userIds: string[]) => {
    // eslint-disable-next-line prefer-const
    let users: Profile[] = [];
    for (let i = 0; i < userIds.length; i++) {
      const userId = userIds[i];
      await axios
        .get(`${SERVER_URI}/users/${userId}`)
        .then((res2) => {
          console.log('successully got a user by ID');
          users.push(res2.data.data);
        })
        .catch((err2) => {
          console.log('could not get a user by ID');
          console.log(err2);
        });
    }
    return users;
  };

  const updateGroups = async () => {
    console.log('getting groups');
    axios
      .get(`${SERVER_URI}/groups`, {
        params: {
          name: true,
          lastMessage: true,
          users: true,
        },
      })
      .then(async (res) => {
        const newGroups: GroupInfo[] = [];
        for (const group in res.data.groups) {
          const userIds = res.data.groups[group].users;
          let users: Profile[] = [];

          users = await getUsersByIds(userIds);

          newGroups.push({
            id: group,
            name: res.data.groups[group].name,
            lastMessage: res.data.groups[group].lastMessage,
            inviteCode: res.data.groups[group].inviteCode,
            users: users,
          });
        }

        if (JSON.stringify(newGroups) != JSON.stringify(groups))
          setGroups(newGroups);
      })
      .catch((err) => {
        console.log(err);
        props.navigation.navigate('Login');
      });
  };

  const isFocused = useIsFocused();

  React.useEffect(() => {
    getProfileInfo();
    updateGroups();
  }, [isFocused]);

  // const onClickRestaurant = () => {
  //   props.navigation.navigate('Restaurant');
  // };

  const onClickGroup = (
    users: Profile[],
    name: string,
    id: string,
    inviteCode: string
  ) => {
    console.log('IN HOME Users: ' + users);
    props.navigation.navigate('Group Details', { users, name, id, inviteCode });
  };

  const onPressStartANewTable = () => {
    props.navigation.navigate('Start New Table');
  };

  const onPressJoinTable = () => {
    props.navigation.navigate('Join Group');
  };

  // const onPressSeeAllSaved = () => {
  //   props.navigation.navigate('Restaurant List');
  // };

  const onPressSeeAllParties = () => {
    props.navigation.navigate('Group List', {
      groups: groups,
    });
  };

  return (
    <ScrollView>
      {firstName === '' ? (
        <></>
      ) : (
        <>
          <Text style={styles.welcome}>Welcome back, {firstName}!</Text>
          <View style={styles.startNewTableWrapper}>
            <Button
              title="Start a new table"
              color="#FF6D6E"
              onPress={onPressStartANewTable}
            />
            <Button
              title="Join a table"
              color="#FF6D6E"
              onPress={onPressJoinTable}
            />
          </View>
          {groups && groups.length > 0 ? (
            <>
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionTitle}>Groups</Text>
                <Button
                  onPress={onPressSeeAllParties}
                  title="See all"
                  color="#ff6e6e"
                />
              </View>
              <ScrollView
                style={styles.row}
                horizontal={true}
                contentContainerStyle={{ alignItems: 'flex-start' }}
              >
                {groups &&
                  groups.map((group, index) => (
                    <GroupBubble
                      users={group.users}
                      name={group.name}
                      onClick={() =>
                        onClickGroup(
                          group.users,
                          group.name,
                          group.id,
                          group.inviteCode
                        )
                      }
                      style={styles.restaurantBubble}
                      key={index}
                    />
                  ))}
              </ScrollView>
            </>
          ) : (
            <Text>No recent groups</Text>
          )}
          {/* <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>Saved restaurants</Text>
          <Button
            onPress={onPressSeeAllSaved}
            title="See all"
            color="#ff6e6e"
          />
        </View> */}
          {/* <ScrollView style={styles.row} horizontal={true}>
          {recentlyVisited.map((restaurant, index) =>
            <RestaurantBubble
              key={index}
              {...restaurant}
              onPress={onClickRestaurant}
              style={styles.restaurantBubble}
            />
          )}
        </ScrollView> */}
          <View style={styles.verticalSpace} />
        </>
      )}
    </ScrollView>
  );
}

export { Home };
