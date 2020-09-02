import React, {memo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/exampleImage.png';
import {ppBaseColors, appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import CityPingsBalance from './CityPingsBalance';

const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
  },
  imageContainer: {
    position: 'relative',
    height: 150,
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
  overlayBottom: {position: 'absolute', padding: 15, bottom: 0},
  overlayText: {color: '#fff', ...commonStyles.textShadow},
  ribbon: {height: 10, backgroundColor: ppBaseColors.PP_LIGHT_BLUE},
  descriptionContainer: {
    padding: 20,
  },
  description: {
    fontSize: 20,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 5,
  },
});

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId},
  balance = 0,
}) => {
  return (
    <View style={styles.paper}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RewardDetailModal', {
            price,
            balance,
            description,
            title,
            rewardId,
          })
        }>
        <View>
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.image} />
            <View style={styles.overlayTop}>
              <CitypingsChip value={price} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Body style={styles.rewardType}>Reward</Body>
            <Title style={styles.description}>{title}</Title>
            <Body numberOfLines={3} ellipsizeMode="tail">
              {description}
            </Body>
            <CityPingsBalance price={price} balance={balance} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
};

export default memo(RewardCard);
