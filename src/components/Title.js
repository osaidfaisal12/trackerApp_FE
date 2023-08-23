import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <View>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40, textAlign: 'center'}}>{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({})