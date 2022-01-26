import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 56,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.lightgray,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    marginRight: 8,
  },
  logoIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  menuContainer: {
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  dotsIcon: {
    width: 20,
    height: 20,
  },
});
