import React from 'react';

import PropTypes from 'prop-types';
import {Animated, StyleSheet, View} from 'react-native';

function ProgressiveImage(props) {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const {thumbnailSource, source, style, mainColor = 'black'} = props;

  return (
    <View style={[{backgroundColor: mainColor}, style]}>
      <Animated.Image
        {...props}
        source={thumbnailSource}
        style={[style, {opacity: thumbnailAnimated}]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        {...props}
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

ProgressiveImage.propTypes = {
  thumbnailSource: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  mainColor: PropTypes.string,
};
ProgressiveImage.defaultProps = {
  thumbnailSource: '',
  source: '',
  style: {},
  mainColor: '',
};

export default ProgressiveImage;
