import React, {useState} from 'react';
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
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SigninScreen} />
    <Stack.Screen name="SignUp" component={SignupScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? (
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
