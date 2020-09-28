import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import commonStyles from '../config/commonStyles';
import CitypingsChip from './CitypingsChip';
import {BASE_URL} from '../config/initialSettings';

const BORDER_RADIUS = 5;

const Card = ({
  onPress = () => {},
  children,
  imageUrl = '',
  pings = 0,
  style = {},
  mini = false,
}) => {
  return (
    <View style={[styles.paper, style]}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: `${BASE_URL}${imageUrl}`}}
              style={styles.image}
            />
            <View style={styles.overlayTop}>
              <CitypingsChip value={pings} mini={mini} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>{children}</View>
        </View>
      </TouchableOpacity>
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
    position: 'relative',
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
