import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';

const largeText = 24;
const mediumText = 14;
const smallText = 12;

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
  },
  mediumText: {
    fontFamily: regularText,
    fontSize: mediumText,
  },
  mediumTextSemibold: {
    fontFamily: semiboldText,
    fontSize: mediumText,
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
