import React, {memo} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/exampleImage.png';
import {ppBaseColors, appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';

const BORDER_RADIUS = 5;

const RewardCard = ({
  navigation,
  reward: {price, description, title, rewardId},
  balance,
  toggleModal = () => {},
}) => {
  const doNavigation = () => {
    toggleModal();

    navigation.navigate('CityPings', {
      screen: 'RewardDetailModal',
      initial: false,
      params: {
        price,
        balance,
        description,
        title,
        rewardId,
      },
    });
  };

  return (
    <View style={styles.paper}>
      <TouchableOpacity onPress={doNavigation}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.image} />
            <View style={styles.overlayTop}>
              <CitypingsChip value={price} mini />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Title
              style={styles.description}
              numberOfLines={2}
              ellipsizeMode="tail">
              {title}
            </Title>
            <Body numberOfLines={2} ellipsizeMode="tail">
              {description}
            </Body>
          </View>
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
    width: '45%',
  },
  imageContainer: {
    position: 'relative',
    height: 100,
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

RewardCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  reward: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
};

RewardCard.propTypes = {
  toggleModal: () => {},
};

export default memo(RewardCard);
