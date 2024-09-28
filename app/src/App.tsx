import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FriendListScreen from './screens/FriendListScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <FriendListScreen />
    </SafeAreaProvider>
  );
}

export default App;
