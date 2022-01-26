import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import textStyles from '../../../config/typography';
import Text from '../../text';

import {styles} from './styles';

const FALLBACK_IMAGE =
  'https://image.shutterstock.com/image-vector/kiev-ukraine-october-20-2021-600w-2078819083.jpg';

const SearchDataCard = ({data, onPress, style}) => {
  const {
    snippet: {title, thumbnails, channelTitle},
  } = data;

  const thumbnailUrl = thumbnails?.default?.url;
  const views = '337K';

  return (
    <TouchableOpacity
      style={[styles.containerStyle, style]}
      onPress={() => {
        onPress?.();
      }}
      activeOpacity={0.7}>
      <Image
        style={styles.thumbnail}
        source={{uri: thumbnailUrl ? thumbnailUrl : FALLBACK_IMAGE}}
      />

      <View style={styles.titleBlock}>
        <Text numberOfLines={2} style={[textStyles.mediumTextSemibold]}>
          {title}
        </Text>
        <Text style={[textStyles.smallText, styles.labelText]}>
          {channelTitle}
        </Text>
        <Text style={[textStyles.smallText, styles.labelText]}>
          {views} views
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.menuContainer}>
        <Image
          style={styles.dotsIcon}
          source={require('../../../assets/icons/dots.png')}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SearchDataCard;
