import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

const SearchBar = ({style}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      <TextInput style={styles.searchInput} />

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.filterContainer}>
        <Image
          style={styles.filtersIcon}
          source={require('../../assets/icons/filter.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
