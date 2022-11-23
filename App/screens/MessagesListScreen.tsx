import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { messagesDummy } from '../data/dummyData';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {SERVER_URI} from '../Config';

const styles = StyleSheet.create({
  messagesContainer: {},
  selfMessageContainer: {
    flexDirection: 'row-reverse',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  messageBubble: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#444',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  content: {
    color: 'white',
    fontSize: 16,
  },
  selfMessageBubble: {
    backgroundColor: '#ff6666',
  },
  container: {
    flex: 1,
    marginBottom: 0,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInputContainer: {
    flexGrow: 1,
    flexBasis: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 80,
    paddingLeft: 4,
  },
  textInput: {
    minHeight: 40,
    borderColor: '#000000',
    padding: 10,
  },
  btnContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 10,
    flexShrink: 0,
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
  sendButton: {
    justifyContent:'center',
    alignContent: 'center',
    display: 'flex',
    height: '100%',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
  },
  sendIcon: {
    width: 24,
    height: 24,
    marginLeft: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

type MessagesListScreenProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
}

function MessagesListScreen(props: MessagesListScreenProps) {
  //TODO: Change this to properly use auth to get self (not working for some reason)

  const isFocused = useIsFocused();

  type MessageGroupProps = {
    navigation: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigate: any;
    };
    id: string;
    name: string;
    lastMessage: string;
  };

  type GroupInfo = {
    id: string;
    name: string;
    lastMessage: string;
  }

  const [groups, setGroups] = React.useState<GroupInfo[]>([]);


  function GroupInList(props: MessageGroupProps){
    const onClickGroup = () => {
      props.navigation.navigate("MessagesScreen", {groupId: props.id, groupName: props.name});
    }

    return (
      <TouchableOpacity style={styles.row} onPress={onClickGroup}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>{props.lastMessage}</Text>
      </TouchableOpacity>
    );
  };

  const updateGroups = async () => {
    console.log('getting groups');
    axios.get(`${SERVER_URI}/groups`).then((res) => {
      let newGroups : GroupInfo[] = [];
      for(let i = 0; i < res.data.groups.length; i++){
        newGroups.push({
          id: res.data.groups[i],
          name: res.data.names[i],
          lastMessage: "Placeholder message",
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
            />
          )}
      </View>
    </ScrollView>
    
  );
}

export { MessagesListScreen };
