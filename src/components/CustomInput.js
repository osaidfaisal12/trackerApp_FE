import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const CustomInput = ({title, onChangeText}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{alignSelf: 'stretch'}}>
      {isFocused && (
        <Text
          style={{
            color: '#28a08c',
            backgroundColor: 'white',
            alignSelf: 'flex-start',
            marginLeft: 15,
            position: 'absolute',
            top: '-25%',
            fontSize: 16,
            zIndex: 1,
            paddingHorizontal: 5,
          }}>
          {title}
        </Text>
      )}
      <TextInput
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
            // if(tempValue === ''){
                setIsFocused(false);
            // } 
        }}
        onChangeText={(text) => onChangeText(text)}
        placeholder={title}
        autoCorrect={false} 
        autoCapitalize="none" 
        style={{borderColor: '#28a08c', borderWidth: 2, paddingHorizontal: 28, paddingVertical: 16, borderRadius: 6}}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
