import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import {loginSignupStyles} from '../styles/LoginSingup';
import {messages} from '../data/dummyData';

const styles = StyleSheet.create({
  messagesScreen: {
    height: '100%',
  },
  messagesContainer: {
  },
  selfMessageContainer: {
    flexDirection: 'row-reverse'
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
    backgroundColor: '#ff6666',
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
  textField: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#aaa',
    marginTop: 'auto',
  },
  selfMessageBubble: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    marginBottom: 65,
  },
  inner: {
    flex: 1,
  },
  textInputContainer: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 80,
  },
  textInput: {
    minHeight: 40,
    borderColor: "#000000",
    padding: 10,
  },
  btnContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    marginLeft: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
    maxWidth: '90%',
    width: '90%',
  }
});

type MessageProps = {
  author: string;
  content: string;
  profilePic: string;
  self: boolean;
};

function Message(props: MessageProps) {
  return (
    <View style={[styles.messageContainer,props.self?styles.selfMessageContainer:null]}>
      <Image source={{uri:props.profilePic}} style={styles.profilePic}/>
      <View style={[styles.messageBubble, props.self?styles.selfMessageBubble:null]}>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </View>
    )
};

type MessagesScreenProps = {

};

function MessagesScreen(props: MessagesScreenProps) {
  const self = 'Saul';

  const [messageInput, setMessageInput] = React.useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.messagesContainer}>
            {messages.map((message, index) => <Message key={index} {...message} self={self===message.author}/>)}
          </View>
          <View style={styles.row}>
            <View style={styles.textInputContainer}>
              <TextInput placeholder="Send a message" style={styles.textInput} multiline={true}/>
            </View>
            <View style={styles.btnContainer}>
              <Button title=">" onPress={() => null} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { MessagesScreen };