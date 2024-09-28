import React from 'react';
import { View } from 'react-native';
import { MarginPropsTypes } from './types/common.types';

export default (props: MarginPropsTypes) => {
  return <View style={{ height: props.height }} />;
};
