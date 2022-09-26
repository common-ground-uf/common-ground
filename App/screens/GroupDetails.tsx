import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  groupDetails: {
    padding: 20,
    backgroundColor: 'white',
  },
  memberContainer: {
    marginTop: 20,
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
    backgroundColor: 'black',
    marginTop: 20,
  },
  settings: {
    width: 50,
    height: 50,
    paddings: '100%',
  },
  center: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  closeIcon: {
    width: 32,
    height: 32,
  }
});

type ContactProps = {
  name: string,
  pic: string,
  editMode: boolean,
  onDelete: () => void,
};

const Member = (props: ContactProps) => {


  return (
    <>
      <View style={styles.memberContainer}>
        <Image style={styles.image} source={{ uri: props.pic }} />
        <Text>{props.name}</Text>
        {props.editMode ?
          <TouchableOpacity onPress={props.onDelete}>
            <Image style={styles.closeIcon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png' }} />
          </TouchableOpacity>
          : null}
      </View>
      <View style={styles.horizontalLine} />
    </>
  );
};

type GroupDetailsProps = {
  name: string,
  members: any,
  navigation: any;
  route: any;
};

function GroupDetails(props: GroupDetailsProps) {
  const [members, setMembers] = React.useState(props.route.params.members);
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
      <View style={styles.center}>
        <TouchableOpacity onPress={onClickSettings}>
          <Image source={require('../assets/settings.png')} style={styles.settings} />
        </TouchableOpacity>
      </View>
      <Text>{props.route.params.name}</Text>
      <FlatList
        data={members}
        renderItem={(member) => <Member {...member.item} onDelete={() => onDelete(member.index)} editMode={editMode} />}
      />
    </View>
  );
}

export { GroupDetails };
