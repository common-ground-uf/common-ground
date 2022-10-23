import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Contact, Profile } from '../commonTypes';
import { mapContactToProfile } from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  groupDetails: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  memberContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#bbb',
    marginTop: 15,
  },
  settings: {
    width: 32,
    height: 32,
    paddings: '100%',
    opacity: .6,
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
  closeIcon: {
    width: 32,
    height: 32,
    marginLeft: 'auto',
  },
  groupName: {
    fontSize: 20,
  }
});

type ContactProps = {
  memberData: Contact,
  editMode: boolean,
  onDelete: () => void,
  navigate: (string, Contact) => void,
};

const Member = (props: ContactProps & { last: boolean }) => {
  const navigate = () => {
    props.navigate('Profile', {
      profileData: mapContactToProfile(props.memberData),
    });
  };

  return (
    <>
      <TouchableOpacity style={styles.memberContainer} onPress={navigate}>
        <Image style={styles.image} source={{ uri: props.memberData.profilePic }} />
        <Text>{props.memberData.firstName} {props.memberData.lastName}</Text>
        {props.editMode ?
          <TouchableOpacity onPress={props.onDelete} style={styles.closeIcon}>
            <Icon size={24} name="close" />
          </TouchableOpacity>
          : null}
      </TouchableOpacity>
      {!props.last && <View style={styles.horizontalLine} />}
    </>
  );
};

type GroupDetailsProps = {
  name: string;
  members: Contact[];
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
};

function GroupDetails(props: GroupDetailsProps) {
  const [members, setMembers] = React.useState<Array<Profile>>(props.route.params.members);
  const [editMode, setEditMode] = React.useState(false);

  const onClickSettings = () => {
    setEditMode(!editMode);
  };

  const onDelete = (toDelete: number) => {
    const newMembers = members.filter((member, index) => index !== toDelete);
    setMembers(newMembers);
  };

  return (
    <View style={styles.groupDetails}>
      <View style={styles.topRow}>
        <Text style={styles.groupName}>{props.route.params.name}</Text>
        <TouchableOpacity onPress={onClickSettings}>
          <Image source={require('../assets/settings.png')} style={styles.settings} />
        </TouchableOpacity>
      </View>
      {members.length === 0 ?
        <Text>Group is empty</Text> :
        <FlatList
          data={members}
          renderItem={(member) => (
            <Member
              memberData={member.item}
              onDelete={() => onDelete(member.index)} editMode={editMode} last={member.index === members.length - 1}
              navigate={props.navigation.navigate}
            />
          )}
        />
      }
    </View>
  );
}

export { GroupDetails };
