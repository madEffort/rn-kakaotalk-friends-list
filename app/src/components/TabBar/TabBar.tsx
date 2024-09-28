import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabButtonPropsTypes } from './types/tabButton.types';
import { TabBarPropsTypes } from './types/tabBar.types';

const TabButton = (props: TabButtonPropsTypes) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
      <Ionicons
        name={props.isSelected ? props.activeIconName : props.inactiveIconName}
        size={20}
        color={'black'}
      />
    </TouchableOpacity>
  );
};

export default (props: TabBarPropsTypes) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: 'grey',
      }}>
      <TabButton
        isSelected={props.selectedTabIdx === 0}
        onPress={() => {
          props.setSelectedTabIdx(0);
        }}
        activeIconName={'person'}
        inactiveIconName={'person-outline'}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 1}
        onPress={() => {
          props.setSelectedTabIdx(1);
        }}
        activeIconName={'chatbubble'}
        inactiveIconName={'chatbubble-outline'}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 2}
        onPress={() => {
          props.setSelectedTabIdx(2);
        }}
        activeIconName={'pricetag'}
        inactiveIconName={'pricetag-outline'}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 3}
        onPress={() => {
          props.setSelectedTabIdx(3);
        }}
        activeIconName={'ellipsis-horizontal'}
        inactiveIconName={'ellipsis-horizontal-outline'}
      />
    </View>
  );
};
