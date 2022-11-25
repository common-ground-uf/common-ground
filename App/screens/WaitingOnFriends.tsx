import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, Button } from 'react-native';
import { Contact } from '../commonTypes';
import { parties } from '../data/dummyUsers';

const styles = StyleSheet.create({
  memberContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 38,
    marginRight: 10,
  },
  name: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 12,
    marginRight: 'auto',
  },
});

type ContactListItemProps = {
  memberData: Contact
  loading: boolean
}

const ContactListItem = (props: ContactListItemProps) => {
  return (
    <>
      <View style={styles.memberContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.memberData.profilePic }}
        />
        <View>
          <Text style={styles.name}>
            {props.memberData.firstName} {props.memberData.lastName}
          </Text>
          <Text>{props.loading ? 'Waiting...' : 'Ready'}</Text>
        </View>
      </View>
    </>
  );
};

type WaitingOnFriendsProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any;
  };
};

const WaitingOnFriends = (props: WaitingOnFriendsProps) => {
  const group = parties[0];

  const [timeLeft, setTimeLeft] = React.useState<number>(5);
  const [loading, setLoading] = React.useState(0);

  console.log('timeLeft:', timeLeft);

  React.useEffect(() => {
    if(timeLeft === 0){
        setLoading(loading + 1);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  const onPressNext = () => {
    props.navigation.navigate('Restaurant List');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.sectionTitle}>{group.name}</Text>
      <View>
        {group.members.map((member, index) => (
          <ContactListItem key={index} memberData={member} loading={index < timeLeft} />
        ))}
      </View>
      <Button title='Next' onPress={onPressNext} color='#FF6D6E'/>
    </ScrollView>
  );
};

export { WaitingOnFriends };
