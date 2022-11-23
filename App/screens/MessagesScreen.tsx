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
  Route,
} from 'react-native';
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
    flexDirection: 'row',
    flexWrap: 'nowrap',
    minWidth: 0,
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
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
});

type MessageProps = {
  author: string;
  content: string;
  profilePic: string;
  self: boolean;
};

function Message(props: MessageProps) {
  return (
    <View
      style={[
        styles.messageContainer,
        props.self ? styles.selfMessageContainer : null,
      ]}
    >
      <Image source={{ uri: props.profilePic }} style={styles.profilePic} />
      <View
        style={[
          styles.messageBubble,
          props.self ? styles.selfMessageBubble : null,
        ]}
      >
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </View>
  );
}

type MessagesScreenProps = {
  groupId: string;
  groupName: string;
};

function MessagesScreen(props: Route) {
  //TODO: Change this to properly use auth to get self (not working for some reason)

  const [self, setSelf] = React.useState('Saul Goodman');
  console.log(self);
  axios.get(`${SERVER_URI}/auth`)
      .then(response => {
        if(response.data.message === 'auth success') {
          console.log('login successful');
          // User Data object to be processed locally and saved as current login data (cleared after logout)
          setSelf(response.data.userData.firstname + ' ' + response.data.userData.lastname);
          console.log(response.data.userData.firstname + ' ' + response.data.userData.lastname);
          // TODO: Need to get location from user data
        }
      })
      .catch((error)=> {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if(error.response.data.message === 'not logged in')
            console.log('Not logged in!');
          else {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        return;
      });


  const [messages, setMessages] = React.useState([]);

  const [messageInput, setMessageInput] = React.useState('');
  const [groupId, setGroupId] = React.useState(props.route.params.groupId);
  const [groupName, setGroupName] = React.useState(props.route.params.groupName);

  const onPressSend = () => {
    console.log('pressed send: '+messageInput);
    axios
        .post(`${SERVER_URI}/groups/${groupId}/message`, {messageText: messageInput})
        .then((response) => {
          if (response.data.success === true) {
            console.log('messsage sent to server!');
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.data.message === 'login failed')
              console.log('login unsuccessful');
            else {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          return;
        });
      updateMessages();
  };

  const updateMessages = () => {
    console.log('getting messages');
    axios
        .post(`${SERVER_URI}/groups/${groupId}`)
        .then((response) => {
          if (response.data.success === true) {
            console.log('successful get message');
            console.log(response.data.conversation);
            // User Data object to be processed locally and saved as current login data (cleared after logout)
            setMessages(response.data.conversation.map( (conv: any) => {
              const res = {} as any;
              res['content'] = conv['message']['messageText'];
              // res['userId'] = conv['postedByUser']['_id'];
              res['author'] = conv['postedByUser']['firstname'] + ' ' + conv['postedByUser']['lastname'];
              res['profilePic'] = conv['postedByUser']['profilePic'];
              return res;
            } ));
            console.log(messages);
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.data.message === 'login failed')
              console.log('login unsuccessful');
            else {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        });
  };

  //get initial messages on screen load
  React.useEffect(() => {
    updateMessages();
  }, []);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <Message
                key={index}
                {...message}
                self={self === message.author}
              />
            ))}
          </View>
          <View style={styles.row}>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Send a message"
                style={styles.textInput}
                multiline={true}
                value={messageInput}
                onChangeText={setMessageInput}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.sendButton}>
                <Icon name="send" size={24} onPress={onPressSend} style={styles.sendIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { MessagesScreen };
