import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({style, children, ...rest}) => {
  return (
    <RNText style={[style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
