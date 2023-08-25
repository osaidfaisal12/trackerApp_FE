import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'
import CustomBtn from '../components/CustomBtn'

const AccountScreen = ({navigation}) => {
  
  const {signOut} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <CustomBtn title='Log out' onSubmit={()=>signOut()}/>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({  container : {
  flex: 1,
  paddingHorizontal: 40,
  backgroundColor: 'white',
  paddingVertical: 50,
  paddingBottom: 80
}})