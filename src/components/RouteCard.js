import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Title from './typography/Title';
import Body from './typography/Body';
import commonStyles from '../lib/commonStyles';
import exampleImage from '../assets/exampleImage.png';
import {ppBaseColors, appColors} from '../lib/colors';
import * as Progress from 'react-native-progress';
import CitypingsChip from '../components/CitypingsChip';

const BORDER_RADIUS = 5;
const MARGIN = 15;

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
  title: {
    fontSize: 20,
    marginBottom: MARGIN,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 20,
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

const RouteCard = ({navigation, route}) => {
  return (
    <View style={styles.paper}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LifeEventDetailsScreen')}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.image} />
            <View style={styles.overlayTop}>
              <CitypingsChip value={route.totalPoints} />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Body style={styles.rewardType}>{route.targetAudience}</Body>
            <Title style={styles.title}>{route.title}</Title>
            <Body style={styles.description}>{route.description}</Body>
            <View style={styles.balanceContainer}>
              <View style={styles.saldo}>
                <Body
                  style={styles.savings}
                  ellipsizeMode="tail"
                  numberOfLines={3}>
                  {route.numberOfSteps} stappen
                </Body>
              </View>
              <Progress.Bar
                progress={route.progress}
                width={50}
                color={appColors.secondary}
                unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
                borderWidth={0}
                height={10}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RouteCard;
