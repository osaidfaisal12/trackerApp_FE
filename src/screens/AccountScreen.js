import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountScreen = ({navigation}) => {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button title='Navigate' onPress={()=>navigation.navigate('')} />

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})