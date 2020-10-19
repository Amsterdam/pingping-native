import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ProgressiveImage from '../components/ProgressiveImage';
import CitypingsChip from './CitypingsChip';
import {BASE_URL} from '../config/initialSettings';
import {commonStyles, BORDER_RADIUS} from '../config/commonStyles';
import CardDisabledOverlay from '../components/CardDisabledOverlay';

const Card = ({
  onPress = () => {},
  children,
  imageUrl = '',
  thumbnailUrl = '',
  pings = 0,
  style = {},
  mini = false,
  mainColor = '',
  testID = '',
  disabled = false,
  disabledString = '',
}) => {
  return (
    <View style={[styles.paper, style]} testID={testID}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.imageContainer}>
            <ProgressiveImage
              source={{uri: `${BASE_URL}${imageUrl}`}}
              thumbnailSource={{uri: `${BASE_URL}${thumbnailUrl}`}}
              mainColor={mainColor}
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
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
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
  imageUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  pings: PropTypes.number,
  style: PropTypes.object,
  mini: PropTypes.bool,
  disabled: PropTypes.bool,
  mainColor: PropTypes.string,
  testID: PropTypes.string,
  disabledString: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Card.defaultProps = {
  pings: 0,
  style: {},
  mini: false,
  disabled: false,
  testID: '',
  mainColor: '',
  disabledString: '',
};

export default Card;
