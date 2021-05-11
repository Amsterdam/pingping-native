import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {BASE_URL} from '../../config/initialSettings';
import CitypingsChip from '../shared/CitypingsChip';
import IconButton from '../shared/IconButton';
import ProgressiveImage from '../shared/ProgressiveImage';

const screenHeight = Dimensions.get('window').height;

const ImageOverlayHeader = ({
  navigation = () => {},
  cover = {
    value: '',
    color: '#fff',
    thumbnail: '',
  },
  cityPings = 0,
}) => {
  return (
    <View style={styles.imageContainer}>
      <ProgressiveImage
        source={{uri: `${BASE_URL}${cover.value}`}}
        thumbnailSource={{uri: `${BASE_URL}${cover.thumbnail}`}}
        mainColor={cover.color}
        style={styles.image}
      />
      <View style={styles.imageOverlay}>
        <IconButton
          iconName="chevron-left"
          iconType="MaterialIcons"
          onPress={() => navigation.goBack()}
          size="L"
          testID={testIDs.NAVIGATION.IMAGE_OVERLAY_BACK_BUTTON}
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
  cover: PropTypes.object.isRequired,
  cityPings: PropTypes.number,
};

ImageOverlayHeader.defaultProps = {
  cityPings: 0,
};

export default ImageOverlayHeader;
