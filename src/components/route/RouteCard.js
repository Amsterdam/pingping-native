import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {appColors} from '../../config/colors';
import Card from '../shared/Card';
import TrophyOrProgress from './TrophyOrProgress';
import {testIDs} from '../../../e2e/modulesTestIDs';

const MARGIN = 15;

const RouteCard = ({
  navigation,
  route: {
    routeId,
    totalPoints,
    targetAudience,
    title,
    description,
    numberOfSteps,
    progress,
    cover,
  },
}) => {
  const doNavigation = () => {
    navigation.navigate('RouteDetailsScreen', {
      routeId,
    });
  };
  const routeDisabled = numberOfSteps === 0;

  return (
    <Card
      onPress={doNavigation}
      pings={totalPoints}
      cover={cover}
      testID={testIDs.ROUTES.ROUTE_CARD}
      disabled={routeDisabled}
      disabledString="Deze route is nog niet beschikbaar">
      <Body style={styles.rewardType}>{targetAudience}</Body>
      <Title style={styles.title}>{title}</Title>
      <Body style={styles.description} ellipsizeMode="tail" numberOfLines={3}>
        {description}
      </Body>
      <View style={styles.balanceContainer}>
        <View style={styles.saldo}>
          <Body style={styles.savings}>{numberOfSteps} stappen</Body>
        </View>
        <TrophyOrProgress progress={progress} />
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
    marginTop: 25,
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
  route: PropTypes.object.isRequired,
};

export default memo(RouteCard);
