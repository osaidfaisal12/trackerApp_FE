import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomBtn = ({title, onSubmit}) => {
  return (
    <TouchableOpacity onPress={()=>onSubmit()} style={{backgroundColor: '#28a08c', alignItems: 'stretch', width: '100%', padding: 18, borderRadius: 6}}>
      <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
