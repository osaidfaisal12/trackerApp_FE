import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form'
import { AuthContext } from '../store/AuthContext'
import NavLink from '../components/NavLink'
import { useFocusEffect } from '@react-navigation/native';


const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signup,errorMessage, clearErrorMessage, tryLocalSignIn} = useContext(AuthContext)

  useEffect(()=>{
    tryLocalSignIn()
  },[])

  useFocusEffect(
    React.useCallback(() => {
      return () => clearErrorMessage()
    }, [])
  );

  return (
    <View style = {styles.container}>
      <Form title='Create your account' email={setEmail} errorMessage={errorMessage} password={setPassword} onSubmit={()=>signup({email, password})} />
      <NavLink tagline='Already have an account ?' navigationText='Sign in' navigationTo='SignIn' />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: 80
  }
})