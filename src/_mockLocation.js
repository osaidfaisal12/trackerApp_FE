import Geolocation from '@react-native-community/geolocation';
import * as Location from 'react-native-geolocation-service';

const tenMetersWithDegree = 0.0001;

const getLocation = increment => {
    return {
        timeStamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 67.08386833333334 + increment * tenMetersWithDegree,
            latitude:  24.91893166666667 + increment * tenMetersWithDegree,
        },
    };
};

let watchId = null;
let counter = 0;

const startWatching = () => {
    // watchId = setInterval(() => {
    //     const position = getLocation(counter);
    //     console.log('Position update:', position);
    //     counter++;
    // }, 1000);

    watchId = setInterval(() => {
        Geolocation.watchPosition(
            position => {
              console.log('position app', position)
              getLocation(counter);
            //   addLocation(position);
            },
            error => {
              console.error('Error updating location:', error);
            },
            {
              enableHighAccuracy: true,
              distanceFilter: 10,
              interval: 10,
            }
          );
    }, 1000);
    
};

setInterval(() => {
    startWatching();
    console.log('Watch started.');
}, 1000)


