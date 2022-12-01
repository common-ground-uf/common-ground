import axios from 'axios';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { SERVER_URI } from '../Config';

const styles = StyleSheet.create({
  startNewTable: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 4,
  },
});

type JoinGroupProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
}

function JoinGroup(props: JoinGroupProps) {

  const [inviteCode, setInviteCode] = React.useState('');

    async function joinTable() {
        axios.post(`${SERVER_URI}/groups/join`, {
            inviteCode: inviteCode,
        }).then((response) => {
            console.log(response.data);
            if(response.data.success) {
                // navigate to messages screen for the group
                props.navigation.navigate('Messages', {
                    screen: 'MessagesScreen',
                    initial: false,
                    params: {
                        groupId: response.data.group._id, groupName: response.data.group.name, inviteCode: response.data.group.inviteCode
                    }
                });
            }
        }).catch((error) => {
            console.log(error.response.data);
            props.navigation.navigate('Login');
        });
    }

    return (
      <ScrollView style={styles.startNewTable}>
        <TextInput
          value={inviteCode}
          onChangeText={setInviteCode}
          placeholder='Invite Code'
          style={styles.input}
        />
        <Button title='Join' onPress={joinTable}/>
      </ScrollView>
    );
}

export { JoinGroup };
