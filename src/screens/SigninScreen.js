import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SigninScreen = ({navigation}) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button title='Navigate' onPress={()=>navigation.navigate('SignUp')} />

    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})