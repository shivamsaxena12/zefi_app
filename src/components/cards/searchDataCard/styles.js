import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 12,
    width: '100%',
    flexDirection: 'row',
    height: 130,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  titleBlock: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    marginRight: 20,
    textTransform: 'capitalize',
    color: colors.textDefault,
  },
  labelText: {
    color: colors.gray,
    marginTop: 1,
  },
  menuContainer: {
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 16,
  },
  dotsIcon: {
    tintColor: colors.lightishgray,
    width: 20,
    height: 20,
  },
});
