import React, {createContext, useState} from 'react';

const initialState = {};

export const LocationContext = createContext(initialState);

export const LocationProvider = ({children}) => {
    const [recording, setRecording] = useState(false);
    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);

    const startRecording = () => {}
    const stopRecording = () => {}
    const addLocation = (position) => {
        setCurrentLocation(position)
    }

  const value = {
    startRecording,
    stopRecording,
    addLocation,
    currentLocation
  };

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
};
