import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const NavLink = ({tagline, navigationTo, navigationText}) => {
    const navigation = useNavigation()

  return (
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text>{tagline} </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate(`${navigationTo}`)}}><Text style={{color: '#28a08c', fontWeight: 600}}>{navigationText}</Text></TouchableOpacity>
        </View>
  )
}

export default NavLink

const styles = StyleSheet.create({})