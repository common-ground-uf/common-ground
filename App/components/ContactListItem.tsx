import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Contact } from '../commonTypes';
import { mapContactToProfile } from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
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
  closeIcon: {
    width: 32,
    height: 32,
    marginLeft: 'auto',
  },
});

type ContactListItemProps = {
  memberData: Contact;
  editMode?: boolean;
  onDelete?: () => void;
  navigate: (string, Contact) => void;
  last: boolean;
};

export const ContactListItem = (props: ContactListItemProps) => {
  const navigate = () => {
    props.navigate('Profile', {
      profileData: mapContactToProfile(props.memberData),
    });
  };

  return (
    <>
      <TouchableOpacity style={styles.memberContainer} onPress={navigate}>
        <Image
          style={styles.image}
          source={{ uri: props.memberData.profilePic }}
        />
        <Text>
          {props.memberData.firstName} {props.memberData.lastName}
        </Text>
        {props.editMode ? (
          <TouchableOpacity onPress={props.onDelete} style={styles.closeIcon}>
            <Icon size={24} name="close" />
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      {!props.last && <View style={styles.horizontalLine} />}
    </>
  );
};
