import React from 'react';
import {Image, View} from 'react-native';
import SearchBar from '../SearchBar';

import {styles} from './styles';

const Header = ({style}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/icons/youtube.png')} />
      </View>

      <SearchBar />

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
