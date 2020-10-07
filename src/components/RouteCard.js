import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import Title from './typography/Title';
import Body from './typography/Body';
import {ppBaseColors, appColors} from '../config/colors';
import Card from './Card';
import {testIDs} from '../../e2e/modulesTestIDs';

const MARGIN = 15;

const RouteCard = ({
  navigation,
  lifeEvent: {
    routeId,
    totalPoints,
    targetAudience,
    title,
    description,
    numberOfSteps,
    progress,
    coverImageUrl,
    thumbnailUrl,
    mainColor,
  },
}) => {
  const doNavigation = () => {
    navigation.navigate('LifeEventDetailsScreen', {
      routeId,
    });
  };

  return (
    <Card
      onPress={doNavigation}
      pings={totalPoints}
      imageUrl={coverImageUrl}
      thumbnailUrl={thumbnailUrl}
      mainColor={mainColor}
      testID={testIDs.LIFE_EVENTS.LIFE_EVENT_CARD}>
      <Body style={styles.rewardType}>{targetAudience}</Body>
      <Title style={styles.title}>{title}</Title>
      <Body style={styles.description} ellipsizeMode="tail" numberOfLines={3}>
        {description}
      </Body>
      <View style={styles.balanceContainer}>
        <View style={styles.saldo}>
          <Body style={styles.savings}>{numberOfSteps} stappen</Body>
        </View>
        <ProgressBar
          progress={progress}
          width={50}
          color={appColors.secondary}
          unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
          borderWidth={0}
          height={10}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
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

RouteCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  lifeEvent: PropTypes.object.isRequired,
};

export default memo(RouteCard);
