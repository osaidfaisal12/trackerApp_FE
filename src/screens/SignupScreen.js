import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button title='Navigate' onPress={()=>navigation.navigate('')} />

    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})