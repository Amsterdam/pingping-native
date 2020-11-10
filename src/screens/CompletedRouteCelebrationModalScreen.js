import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Animated, StatusBar} from 'react-native';
import {Content, Container} from 'native-base';
import {useQuery} from '@apollo/client';
import LottieView from 'lottie-react-native';
import GET_ROUTES from '../apollo/Query/getRoutes';
import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import {appColors} from '../config/colors';
import {commonStyles} from '../config/commonStyles';
import CityPingsCoin from '../assets/svg/CityPingCoin';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import {BORDER_RADIUS} from '../config/commonStyles';
import confettiCelebration from '../assets/lottieFiles/confetti-celebration.json';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import RouteCard from '../components/route/RouteCard';
import RewardCardMini from '../components/reward/RewardCardMini';
import ChevronButton from '../components/reward/ChevronButton';
import ContentLayout from '../components/layout/ContentLayout';
import CitypingsChip from '../components/shared/CitypingsChip';

const HEADER_HEIGHT = 200;

const CompletedRouteCelebrationModalScreen = ({navigation, route}) => {
  const {pings} = route.params;
  const routeData = useQuery(GET_ROUTES, {fetchPolicy: 'cache-and-network'});
  const rewardData = useQuery(GET_AVAILABLE_REWARDS, {
    fetchPolicy: 'cache-and-network',
  });
  const me = useQuery(GET_STATUS_QUERY, {fetchPolicy: 'cache-and-network'});

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  let balance = 0;
  const availableRoutes = routeData?.data?.getRoutes?.availableRoutes;
  const availableRewards = rewardData?.data?.getAvailableRewards;
  balance = me.data?.getStatus?.user?.balance;

  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />

      <Animated.View
        style={[styles.header, {transform: [{translateY: translateY}]}]}
        transparent
        noShadow
      />

      <Content
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}>
        <ContentLayout>
          <View style={styles.headerContainer}>
            <Title style={styles.title}>GOED BEZIG!</Title>
            <CitypingsChip value={balance} />
          </View>
          <View style={styles.paper}>
            <LottieView
              source={confettiCelebration}
              autoPlay
              loop
              resizeMode="cover"
              style={styles.lottieView}
            />
            <Body style={styles.celebrationBoxTitle} align="center">
              Je hebt weer een aantal CityPings verdiend!
            </Body>
            <View style={styles.coinContainer}>
              <CityPingsCoin height={30} width={30} />
            </View>
            <Title>{pings}</Title>
          </View>

          {availableRewards?.length > 0 && (
            <View style={styles.blockContainer}>
              <View style={styles.rowFlex}>
                <Title style={styles.subTitle}>Verzilveren</Title>
                <ChevronButton
                  onPress={() =>
                    navigation.navigate('CityPings', {
                      screen: 'Main',
                      initial: false,
                    })
                  }
                />
              </View>
              <View style={styles.rowFlex}>
                {availableRewards.map((reward) => (
                  <RewardCardMini
                    navigation={navigation}
                    reward={reward}
                    key={reward.rewardId}
                    balance={balance}
                  />
                ))}
              </View>
            </View>
          )}

          {availableRoutes?.length > 0 && (
            <View style={styles.blockContainer}>
              <View style={styles.rowFlex}>
                <Title style={styles.subTitle}>Nieuwe Route</Title>
                <ChevronButton
                  onPress={() =>
                    navigation.navigate('Routes', {
                      screen: 'RouteHomeScreen',
                    })
                  }
                />
              </View>
              <View>
                {availableRoutes.map((route) => (
                  <RouteCard
                    navigation={navigation}
                    route={route}
                    key={route.routeId}
                  />
                ))}
              </View>
            </View>
          )}
        </ContentLayout>
      </Content>
      <View style={styles.underLayer} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
  },
  header: {
    flexDirection: 'column',
    backgroundColor: appColors.primary,
    height: HEADER_HEIGHT,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
  },
  coinContainer: {
    marginVertical: 15,
  },
  subTitle: {
    color: '#000',
    marginVertical: 10,
    fontSize: 24,
    textAlign: 'left',
  },
  celebrationBoxTitle: {
    fontSize: 16,
  },
  content: {
    position: 'absolute',
    top: 25,
    paddingBottom: 75,
  },
  underLayer: {
    position: 'absolute',
    flex: 1,
    zIndex: -1,
    elevation: 0,
    backgroundColor: appColors.almostNotBlue,
    top: 100, // replace this with a percentage of the screenheight to be responsive
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockContainer: {
    marginBottom: 20,
  },
  lottieView: {
    margin: 5,
  },
});

CompletedRouteCelebrationModalScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default CompletedRouteCelebrationModalScreen;
