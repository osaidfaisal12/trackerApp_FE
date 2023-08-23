import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import Title from './Title'
import CustomBtn from './CustomBtn'


const Form = ({title, email, password, onSubmit, errorMessage}) => {

  return (
    <View style={{justifyContent:'center', alignItems: 'center', gap: 60, paddingBottom: 40}}>
        <Title title={title} />
        <View style={{alignSelf: 'stretch', gap: 40}}>
        <View style={{alignSelf: 'stretch', gap: 10}}>
          <View style={{alignSelf: 'stretch', gap: 30}}>
        <CustomInput title='Email address' onChangeText={email} />
        <CustomInput title='Password' onChangeText={password}/>
        </View>
        {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}
        </View>
        <CustomBtn title="Continue" onSubmit={onSubmit} />

        </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})