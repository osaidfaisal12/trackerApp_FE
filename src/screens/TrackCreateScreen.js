import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TrackCreateScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackCreateScreen</Text>
      <Button title='Navigate' onPress={()=>navigation.navigate('')} />

    </View>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})