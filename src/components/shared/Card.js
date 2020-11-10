import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ProgressiveImage from './ProgressiveImage';
import CitypingsChip from './CitypingsChip';
import CardDisabledOverlay from './CardDisabledOverlay';
import {BASE_URL} from '../../config/initialSettings';
import {commonStyles, BORDER_RADIUS} from '../../config/commonStyles';

const Card = ({
  onPress = () => {},
  children,
  cover,
  pings = 0,
  style = {},
  mini = false,
  testID = '',
  disabled = false,
  disabledString = '',
}) => {
  return (
    <View
      style={[styles.paper, !disabled && styles.paperShadow, style]}
      testID={testID}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.imageContainer}>
            <ProgressiveImage
              source={{uri: `${BASE_URL}${cover.value}`}}
              thumbnailSource={{uri: `${BASE_URL}${cover.thumbnail}`}}
              mainColor={cover.color}
              style={styles.image}
            />
            <View style={styles.overlayTop}>
              <CitypingsChip value={pings} mini={mini} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>{children}</View>
        </View>
      </TouchableOpacity>

      {disabled && <CardDisabledOverlay disabledString={disabledString} />}
    </View>
  );
};

const styles = StyleSheet.create({
  paper: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
  },
  paperShadow: {
    ...commonStyles.shadow,
  },
  imageContainer: {
    position: 'relative',
    height: 125,
    borderRadius: BORDER_RADIUS,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  overlayTop: {position: 'absolute', padding: 15, top: 0, right: 10},
  descriptionContainer: {
    padding: 20,
  },
});

Card.propTypes = {
  pings: PropTypes.number,
  style: PropTypes.object,
  cover: PropTypes.object,
  mini: PropTypes.bool,
  disabled: PropTypes.bool,
  testID: PropTypes.string,
  disabledString: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Card.defaultProps = {
  pings: 0,
  cover: {
    value: '',
    thumbnail: '',
    color: '',
  },
  style: {},
  mini: false,
  disabled: false,
  testID: '',
  mainColor: '',
  disabledString: '',
};

export default Card;
