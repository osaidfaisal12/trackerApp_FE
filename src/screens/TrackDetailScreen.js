import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TrackDetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackDetailScreen</Text>
      <Button title='Navigate' onPress={()=>navigation.navigate('')} />
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({})