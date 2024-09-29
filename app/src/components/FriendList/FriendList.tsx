import React from 'react';
import { ScrollView, View } from 'react-native';

import { FriendListPropsTypes } from './types/friendList.types';
import Profile from '../Profile/Profile';
import Margin from '../common/Margin';

export default (props: FriendListPropsTypes) => {
  // return props.isOpened ? (
  //   <ScrollView showsVerticalScrollIndicator={false}>
  //     {props.data.map((item, index) => (
  //       <View key={index}>
  //         <Profile
  //           key={index}
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     ))}
  //   </ScrollView>
  // ) : null;

  // if (!props.isOpened) {
  //   return null;
  // }
  // return (
  //   <ScrollView showsVerticalScrollIndicator={false}>
  //     {props.data.map((item, index) => (
  //       <View key={index}>
  //         <Profile
  //           key={index}
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     ))}
  //   </ScrollView>
  // );

  return (
    props.isOpened && (
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.data.map((item, index) => (
          <View key={index}>
            <Profile
              key={index}
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
              isMe={false}
            />
            <Margin height={13} />
          </View>
        ))}
      </ScrollView>
    )
  );
};
