import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProfilePropsTypes } from './types/profile.types';
import Margin from '../common/Margin';

export default (props: ProfilePropsTypes) => {
  const size = props.isMe ? 50 : 40;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: 'center', marginLeft: 10 }}>
        <Text style={{ fontWeight: '400', fontSize: 16, color: 'black' }}>
          {props.name}
        </Text>
        {!!props.introduction && (
          <View>
            <Margin height={6} />
            <Text style={{ fontSize: 12, color: 'grey' }}>
              {props.introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
