import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Title from './typography/Title';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/hulpverhuizing.jpg';
import {ppBaseColors} from '../lib/colors';

const styles = StyleSheet.create({
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  imageContainer: {position: 'relative', height: 300},
  image: {
    flex: 1,
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  overlayTop: {position: 'absolute', padding: 15, top: 0},
  overlayBottom: {position: 'absolute', padding: 15, bottom: 0},
  overlayText: {color: '#fff', ...commonStyles.textShadow},
  ribbon: {height: 10, backgroundColor: ppBaseColors.PP_LIGHT_BLUE},
  descriptionContainer: {
    padding: 20,
  },
  description: {
    fontSize: 20,
  },
});

const RewardCard = ({navigation}) => {
  return (
    <View style={styles.paper}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={exampleImage} style={styles.image} />
          <View style={styles.overlayTop}>
            <Title style={styles.overlayText}>
              Meelopen met jongeren- adviseur t.w.v. €50
            </Title>
          </View>
          <View style={styles.overlayBottom}>
            <Title style={styles.overlayText}>80/20</Title>
            <Title style={styles.overlayText}>CityPings</Title>
          </View>
        </View>
        <View style={styles.ribbon} />
        <View style={styles.descriptionContainer}>
          <Title style={styles.description}>
            Deze reward kun je inwisselen bij een jongerenpunt bij jou in de
            buurt! Je maakt samen met een jongerenadviseur een afspraak om een
            dagje mee te lopen.
          </Title>
        </View>
      </View>
    </View>
  );
};

export default RewardCard;
