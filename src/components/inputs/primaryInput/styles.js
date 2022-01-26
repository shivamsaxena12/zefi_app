import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 40,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightgray,
    borderRadius: 5,
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 16,
    flex: 1,
  },
  inputStyle: {
    color: colors.textDefault,
    paddingRight: 8,
    paddingLeft: 8,
    fontSize: 16,
    lineHeight: 21,
    width: '100%',
  },
});
