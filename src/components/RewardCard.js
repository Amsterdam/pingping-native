import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/hulpverhuizing.jpg';
import {ppBaseColors, appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

const RewardCard = ({navigation}) => {
  return (
    <View style={styles.paper}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RewardDetailModal')}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.image} />
            <View style={styles.overlayTop}>
              <CitypingsChip value={100} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Body style={styles.rewardType}>Reward</Body>
            <Title style={styles.description}>Dagje Artis</Title>
            <Body>
              Gezellig met vrienden een dagje weg! Artis, altijd gezellig.
            </Body>
            <CityPingsBalance />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RewardCard;
