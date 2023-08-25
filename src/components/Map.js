import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, {Polyline, Circle} from 'react-native-maps';
import { LocationContext } from '../store/LocationContext';


const Map = () => {
    const {currentLocation} = useContext(LocationContext)
    
    if (!currentLocation) {
        return <Text>Loading...</Text>
    }
    
    const { latitude, longitude } = currentLocation.coords;

  return (
    <MapView
      style={styles.map}
  initialRegion={{
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  region={{
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
>
  <Circle center={{
    latitude,
    longitude,
  }} 
radius={30}
strokeColor= 'rgba(158, 158, 255, 1.0)'
fillColor= 'rgba(158, 158, 255, 0.3)'
strokeWidth={2}
  />
</MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex:1
      },
})