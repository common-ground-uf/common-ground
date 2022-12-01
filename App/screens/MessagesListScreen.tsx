import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { SERVER_URI } from '../Config';

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    minWidth: 0,
    width: '100%',
    maxWidth: '100%',
    padding: 15,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

type MessageGroupProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
  id: string;
  name: string;
  lastMessage: string;
  inviteCode: string;
};

function GroupInList(props: MessageGroupProps){
  const onClickGroup = () => {
    props.navigation.navigate('MessagesScreen', {groupId: props.id, groupName: props.name, inviteCode: props.inviteCode});
  };

  return (
    <TouchableOpacity style={styles.row} onPress={onClickGroup}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.subtitle}>{props.lastMessage}</Text>
    </TouchableOpacity>
  );
}

type MessagesListScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
}

type GroupInfo = {
  id: string;
  name: string;
  lastMessage: string;
  inviteCode: string;
}

function MessagesListScreen(props: MessagesListScreenProps) {
  //TODO: Change this to properly use auth to get self (not working for some reason)

  const isFocused = useIsFocused();

  const [groups, setGroups] = React.useState<GroupInfo[]>([]);

  const updateGroups = async () => {
    console.log('getting groups');
    axios.get(`${SERVER_URI}/groups`, {
      params: {
        name: true,
        lastMessage: true,
        users: true
      },
    }).then((res) => {
      const newGroups : GroupInfo[] = [];
      for(const group in res.data.groups){
        newGroups.push({
          id: group,
          name: res.data.groups[group].name,
          lastMessage: res.data.groups[group].lastMessage,
          inviteCode: res.data.groups[group].inviteCode,
        });
      }

      if(JSON.stringify(newGroups)!=JSON.stringify(groups))
        setGroups(newGroups);
      // setParties(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  updateGroups();

  return (
    <ScrollView>
      <View style={styles.inner}>
        {groups.map((group) => 
            <GroupInList
              navigation={props.navigation}
              id={group.id}
              name={group.name}
              lastMessage={group.lastMessage}
              key={group.id}
              inviteCode={group.inviteCode}
            />
          )}
      </View>
    </ScrollView>
  );
}

export { MessagesListScreen };
