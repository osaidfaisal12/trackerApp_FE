import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Form from '../components/Form'
import { AuthContext } from '../store/AuthContext'
import NavLink from '../components/NavLink'
import { useFocusEffect } from '@react-navigation/native';


const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signin,errorMessage, clearErrorMessage} = useContext(AuthContext)

  useFocusEffect(
    React.useCallback(() => {
      return () => clearErrorMessage()
    }, [])
  );


  return (
    <View style = {styles.container}>
      <Form title="Log in to your account" email={setEmail} errorMessage={errorMessage} password={setPassword} onSubmit={()=>signin({email, password})} />
      <NavLink tagline='Dont have an account ?' navigationText='Sign up' navigationTo='SignUp' />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: 80
  }
})