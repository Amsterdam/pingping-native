import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import ProgressiveImage from '../components/ProgressiveImage';
import commonStyles from '../config/commonStyles';
import CitypingsChip from './CitypingsChip';
import {BASE_URL} from '../config/initialSettings';
import Title from './typography/Title';

const BORDER_RADIUS = 5;

const Card = ({
  onPress = () => {},
  children,
  imageUrl = '',
  thumbnailUrl,
  pings = 0,
  style = {},
  mini = false,
  mainColor,
  testID = '',
  disabled = false,
}) => {
  const disabledOverlay = () => {
    return (
      <View style={styles.disabledStyle}>
        <View style={styles.disabledBox}>
          <Title style={styles.disabledText}>
            Deze route is nog niet beschikbaar
          </Title>
        </View>
      </View>
    );
  };
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
      {disabled && disabledOverlay()}
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
  disabledStyle: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  disabledText: {
    fontSize: 18,
    textAlign: 'center',
  },
  disabledBox: {
    ...commonStyles.shadow,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
    padding: 20,
    width: '70%',
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

export default Card;
