import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';

const largeText = 24;
const mediumText = 16;
const smallText = 13;

const regularText = fonts.openSansRegular;
const semiboldText = fonts.openSansSemibold;

const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: regularText,
    fontSize: largeText,
    fontWeight: '700',
    color: colors.textDefault,
  },
  largeTextSemibold: {
    fontFamily: semiboldText,
    fontSize: largeText,
    color: colors.textDefault,
  },
  mediumText: {
    fontFamily: regularText,
    fontSize: mediumText,
    color: colors.textDefault,
  },
  mediumTextSemibold: {
    fontFamily: semiboldText,
    fontSize: mediumText,
    color: colors.textDefault,
  },
  smallText: {
    fontFamily: regularText,
    fontSize: smallText,
  },
  smallTextSemibold: {
    fontFamily: semiboldText,
    fontSize: smallText,
  },
});

export default textStyles;
