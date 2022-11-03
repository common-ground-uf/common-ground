import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 50,
    marginBottom: 20,
    borderColor: '#FF6D6E',
  },
  strategicOrRandom: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  text: {
    paddingVertical: 40,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
})

type StrategicOrRandomProps = {
  navigation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: any
  }
}

export function StrategicOrRandom(props: StrategicOrRandomProps) {
  const onPressStrategic = () => {
    props.navigation.navigate('Restaurant List')
  }

  const onPressRandom = () => {
    props.navigation.navigate('Random Restaurant')
  }

  return (
    <View style={styles.strategicOrRandom}>
      <Text style={styles.text}>
        How do you want the restaurant to be picked?
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPressStrategic}>
        <Text style={styles.buttonText}>Strategic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressRandom}>
        <Text style={styles.buttonText}>Random</Text>
      </TouchableOpacity>
    </View>
  )
}
