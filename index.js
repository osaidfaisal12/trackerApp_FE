/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './src/store/AuthContext';
import {LocationProvider} from './src/store/LocationContext';

const Root = () => (
  <LocationProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LocationProvider>
);

AppRegistry.registerComponent(appName, () => Root);
