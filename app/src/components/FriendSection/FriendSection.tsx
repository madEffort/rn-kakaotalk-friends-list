import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FriendSectionPropsTypes } from './types/friendSection.types';

export default (props: FriendSectionPropsTypes) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: 'grey' }}>친구 {props.count}</Text>
      <TouchableOpacity onPress={props.onArrowPress}>
        <MaterialIcons
          name={props.isOpened ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
          size={24}
          color={'lightgrey'}
        />
      </TouchableOpacity>
    </View>
  );
};
