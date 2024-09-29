import React from 'react';
import { FlatList, View } from 'react-native';
import {
  FriendFlatListPropsTypes,
  ListHeaderComponentPropsTypes,
} from './types/friendFlatList.types';
import Profile from '../Profile/Profile';
import Margin from '../common/Margin';
import Header from '../Header/Header';
import MyProfile from '../Profile/Profile';
import Division from '../common/Division';
import FriendSection from '../FriendSection/FriendSection';
import { friendProfiles, myProfile } from '../../constants/data';
import TabBar from '../TabBar/TabBar';

const ItemSeparatorComponent = () => <Margin height={13} />;
const renderItem = ({
  item,
  index,
}: {
  item: { uri: string; name: string; introduction: string };
  index: number;
}) => (
  <View key={index}>
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction}
      isMe={false}
    />
  </View>
);

const ListHeaderComponent = (props: ListHeaderComponentPropsTypes) => (
  <View style={{ backgroundColor: '#fff' }}>
    <Header />
    <Margin height={10} />
    <MyProfile
      uri={myProfile.uri}
      name={myProfile.name}
      introduction={myProfile.introduction}
      isMe={true}
    />
    <Margin height={15} />
    <Division />
    <Margin height={12} />
    <FriendSection
      count={friendProfiles.length}
      onArrowPress={props.onArrowPress}
      isOpened={props.isOpened}
    />
  </View>
);

const ListFooterComponent = () => <Margin height={12} />;

export default (props: FriendFlatListPropsTypes) => {
  return (
    <FlatList
      data={props.isOpened ? props.data : []}
      keyExtractor={(_, index) => index.toString()}
      stickyHeaderIndices={[0]}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      ListHeaderComponent={
        <ListHeaderComponent
          onArrowPress={props.onArrowPress}
          isOpened={props.isOpened}
        />
      }
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};
