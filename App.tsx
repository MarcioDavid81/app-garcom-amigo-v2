import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#c66300" barStyle="light-content" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}