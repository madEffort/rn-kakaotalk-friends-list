import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProfilePropsTypes } from './types/profile.types';
import Margin from '../common/Margin';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const NameText = styled.Text`
  font-weight: 400;
  font-size: 16px;
  color: black;
`;

const IntroductionText = styled.Text<{ isMe: boolean }>`
  font-size: 12px;
  color: ${props => (props.isMe ? 'black' : 'grey')};
`;

export default (props: ProfilePropsTypes) => {
  const size = props.isMe ? 50 : 40;

  return (
    <Container>
      <ProfileImage source={{ uri: props.uri }} size={size} />
      <TextContainer>
        <NameText>{props.name}</NameText>
        {!!props.introduction && (
          <View>
            <Margin height={6} />
            <IntroductionText isMe={props.isMe}>
              {props.introduction}
            </IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};
