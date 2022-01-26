import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

const Loader = ({style}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
