import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/hulpverhuizing.jpg';
import {ppBaseColors, appColors} from '../lib/colors';
import * as Progress from 'react-native-progress';
import CityPingCoin from '../assets/svg/CityPingCoin';
import CitypingsChip from '../components/CitypingsChip';

const styles = StyleSheet.create({
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  imageContainer: {position: 'relative', height: 150, borderRadius: 10},
  image: {
    flex: 1,
    width: '100%',
    position: 'relative',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
  savings: {
    color: appColors.subtleGrey,
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saldo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const RewardCard = ({navigation}) => {
  return (
    <View style={styles.paper}>
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
          <View style={styles.balanceContainer}>
            <View style={styles.saldo}>
              <CityPingCoin />
              <Body style={styles.savings}> 20 / 100</Body>
            </View>
            <Progress.Bar
              progress={0.1}
              width={50}
              color={appColors.secondary}
              unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
              borderWidth={0}
              height={10}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RewardCard;
