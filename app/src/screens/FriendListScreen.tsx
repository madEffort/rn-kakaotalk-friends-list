import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import MyProfile from '../components/Profile/Profile';
import { friendProfiles, myProfile } from '../constants/data';
import Margin from '../components/common/Margin';
import Division from '../components/common/Division';
import FriendList from '../components/FriendList/FriendList';
import FriendSection from '../components/FriendSection/FriendSection';
import TabBar from '../components/TabBar/TabBar';
import FriendFlatList from '../components/FriendFlatList/FriendFlatList';

export default () => {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const handleArrowPress = () => {
    setIsOpened(!isOpened);
  };

  // return (
  //   <SafeAreaView
  //     style={styles.container}
  //     edges={['top', 'right', 'bottom', 'left']}>
  //     <View style={{ flex: 1, paddingHorizontal: 10 }}>
  //       <Header />
  //       <Margin height={10} />
  //       <MyProfile
  //         uri={myProfile.uri}
  //         name={myProfile.name}
  //         introduction={myProfile.introduction}
  //       />
  //       <Margin height={15} />
  //       <Division />
  //       <Margin height={12} />
  //       <FriendSection
  //         count={friendProfiles.length}
  //         onArrowPress={handleArrowPress}
  //         isOpened={isOpened}
  //       />
  //       <FriendList data={friendProfiles} isOpened={isOpened} />
  //     </View>
  //     <TabBar
  //       selectedTabIdx={selectedTabIdx}
  //       setSelectedTabIdx={setSelectedTabIdx}
  //     />
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={styles.container}>
      <FriendFlatList
        data={friendProfiles}
        isOpened={isOpened}
        onArrowPress={handleArrowPress}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
