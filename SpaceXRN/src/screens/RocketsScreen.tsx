import React from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator, MD3Colors, Text} from 'react-native-paper';
import {BodyText} from '../components/BodyText';
import {useLaunches} from '../hooks/useLaunches';
import {useRockets} from '../hooks/useRockets';
import {getStyle} from '../Styles';

export const RocketsScreen = () => {
  const {loading, data, error, onRefresh} = useRockets();
  const style = getStyle();
  return (
    <ScrollView style={style.screen}>
      {loading && (
        <ActivityIndicator
          style={style.progress}
          size={50}
          animating={true}
          color={MD3Colors.primary90}
        />
      )}
      {data && <BodyText>{JSON.stringify(data)}</BodyText>}
      {error && <BodyText>Error: {error.message}</BodyText>}
    </ScrollView>
  );
};
