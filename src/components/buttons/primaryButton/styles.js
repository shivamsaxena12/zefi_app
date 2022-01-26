import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.themeBlue,
    maxWidth: 240,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
  },
  loaderContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
