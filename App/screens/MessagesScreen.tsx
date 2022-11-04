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
} from 'react-native';
import { messages } from '../data/dummyData';
import Icon from 'react-native-vector-icons/Ionicons';

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

function MessagesScreen() {
  const self = 'Saul';

  const [messageInput, setMessageInput] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTextInputChange = (e:any) => {
    setMessageInput(e.target.value);
  };

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
                onChange={handleTextInputChange}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.sendButton}>
                <Icon name="send" size={24} onPress={() => null} style={styles.sendIcon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { MessagesScreen };
