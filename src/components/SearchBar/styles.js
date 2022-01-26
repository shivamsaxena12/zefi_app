import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.smoke,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 36,
    borderRadius: 3,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    paddingLeft: 12,
  },
  filterContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  filtersIcon: {
    width: 20,
    height: 20,
    tintColor: colors.gray1,
  },
});
