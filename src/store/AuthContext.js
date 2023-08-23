import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState} from 'react';

const initialState = {};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signup = async ({email, password}) => {
    try {
      const response = await axios.post('http://192.168.1.189:3000/signup', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setErrorMessage('');
    } catch (error) {
        setErrorMessage('Invalid email address or password');
    }
  };

  const signin = async ({email, password}) => {
    try {
      const response = await axios.post('http://192.168.1.189:3000/signin', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Invalid email address or password');
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage("")
  }

  const value = {
    token,
    errorMessage,
    signup,
    signin,
    clearErrorMessage
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
