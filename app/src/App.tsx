import React from 'react';
import { StatusBar, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header/Header';
import MyProfile from './components/Profile/Profile';
import { friendProfiles, myProfile } from './constants/data';
import Margin from './components/common/Margin';
import Division from './components/common/Division';
import FriendSection, {
  onArrowPress,
} from './components/FriendSection/FriendSection';
import FriendList from './components/FriendList/FriendList';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          count={friendProfiles.length}
          onArrowPress={onArrowPress}
        />
        <FriendList data={friendProfiles} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});

export default App;
