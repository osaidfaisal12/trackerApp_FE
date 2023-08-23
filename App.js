import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { AuthContext } from './src/store/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Track Lists" component={TrackListScreen} />
    <Tab.Screen name="Create Track" component={TrackCreateScreen} />
    <Tab.Screen name="My Account" component={AccountScreen} />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown : false}} >
    <Stack.Screen name="SignUp" component={SignupScreen} />
    <Stack.Screen name="SignIn" component={SigninScreen} />
  </Stack.Navigator>
);

const App = () => {
  const {token} = useContext(AuthContext)

  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator>
          <Stack.Screen name="App" component={AppStack} />
          <Stack.Screen name="Track details" component={TrackDetailScreen} />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
