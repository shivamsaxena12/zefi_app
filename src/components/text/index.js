import React from 'react';
import {Text as RNText} from 'react-native';
import textStyles from '../../config/typography';

const Text = ({style, children, ...rest}) => {
  return (
    <RNText style={[textStyles.mediumText, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
