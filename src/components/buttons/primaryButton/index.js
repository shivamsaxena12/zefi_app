import React, {useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import colors from '../../../config/colors';
import {styles} from './styles';

const _returnAnimatedText = loaderAnimatedValue => {
  return {
    opacity: loaderAnimatedValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: [1, 0],
    }),
    transform: [
      {
        scale: loaderAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      },
    ],
  };
};

const _returnAnimatedLoaderStyles = loaderAnimatedValue => {
  return {
    transform: [
      {
        scale: loaderAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  };
};

const PrimaryButton = ({isLoading, text, onPress, style, textStyle}) => {
  const loaderAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const finalValue = isLoading ? 1 : 0;

    Animated.timing(loaderAnimatedValue, {
      toValue: finalValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isLoading, loaderAnimatedValue]);

  return (
    <TouchableOpacity
      style={[styles.containerStyle, style]}
      onPress={() => {
        if (!isLoading) {
          onPress?.();
        }
      }}
      activeOpacity={0.7}>
      <Animated.Text
        style={[
          styles.textStyle,
          textStyle,
          _returnAnimatedText(loaderAnimatedValue),
        ]}>
        {text}
      </Animated.Text>

      {/* Loader */}
      <Animated.View
        style={[
          styles.loaderContainer,
          _returnAnimatedLoaderStyles(loaderAnimatedValue),
        ]}>
        <ActivityIndicator color={colors.white} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
