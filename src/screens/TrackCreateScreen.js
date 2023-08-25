import {Button, StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Map from '../components/Map';
import {LocationContext} from '../store/LocationContext';
import Geolocation from '@react-native-community/geolocation';
import {useIsFocused} from '@react-navigation/native';

const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const [watcherId, setWatcherId] = useState(null);
  const [location, setLocation] = useState(null);

  const isFocused = useIsFocused();
  console.log('isFocused is', isFocused);
  console.log('watcherId is', watcherId, typeof watcherId);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        const subs = Geolocation.watchPosition(
          position => {
            console.log(position);
            addLocation(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, interval: 100, distanceFilter: 10},
        );
        console.log('subs is', subs);
        setWatcherId(subs);
      }
    });
    console.log(location);
  };

  useEffect(() => {
    if ( isFocused ) {
      getLocation();
    } else {
      Geolocation.clearWatch(watcherId);
      setWatcherId(null);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Map />
      {err ? <Text>{err}</Text> : null}
    </View>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
