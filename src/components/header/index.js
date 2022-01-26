import React from 'react';
import {Image, View} from 'react-native';
import SearchBar from '../SearchBar';

import {styles} from './styles';

const Header = ({style, searchQuery, setSearchQuery}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoIcon}
          source={require('../../assets/icons/youtube.png')}
        />
      </View>

      <SearchBar value={searchQuery} setValue={setSearchQuery} />

      <View style={styles.menuContainer}>
        <Image
          style={styles.dotsIcon}
          source={require('../../assets/icons/dots.png')}
        />
      </View>
    </View>
  );
};

export default Header;
