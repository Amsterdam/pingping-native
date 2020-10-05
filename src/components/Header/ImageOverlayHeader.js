import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CitypingsChip from '../CitypingsChip';
import ProgressiveImage from '../ProgressiveImage';
import IconButton from '../IconButton';
import {BASE_URL} from '../../config/initialSettings';

const screenHeight = Dimensions.get('window').height;

const ImageOverlayHeader = ({
  navigation,
  imageUrl,
  cityPings,
  thumbnailUrl,
}) => {
  return (
    <View style={styles.imageContainer}>
      <ProgressiveImage
        source={{uri: `${BASE_URL}${imageUrl}`}}
        thumbnailSource={{uri: `${BASE_URL}${thumbnailUrl}`}}
        style={styles.image}
      />
      <View style={styles.imageOverlay}>
        <IconButton
          iconName="arrow-left"
          iconType="MaterialCommunityIcons"
          onPress={() => navigation.goBack()}
          size="L"
        />
        <CitypingsChip value={cityPings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.3,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 80,
  },
});

ImageOverlayHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  cityPings: PropTypes.number.isRequired,
};

export default ImageOverlayHeader;
