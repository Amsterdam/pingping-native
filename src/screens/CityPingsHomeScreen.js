import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Header, Tab, Tabs} from 'native-base';
import {useLazyQuery} from '@apollo/client';
import Title from '../components/typography/Title';
import {appColors} from '../config/colors';
import CitypingsChip from '../components/shared/CitypingsChip';
import ClaimedRewardsList from '../components/reward/ClaimedRewardsList';
import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import ErrorComponent from '../components/shared/ErrorComponent';
import ClaimedRewardsModal from '../components/modals/ClaimedRewardModal';
import AvailableRewardsList from '../components/reward/AvailableRewardsList';

const CityPingsHomeScreen = ({navigation}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAvailableRewards();
      getStatus();
    });
    return unsubscribe;
  }, [navigation, getAvailableRewards, getStatus]);

  const [getAvailableRewards, availableRewards] = useLazyQuery(
    GET_AVAILABLE_REWARDS,
  );
  const [getStatus, me] = useLazyQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-and-network',
  });
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    me.refetch();
    setRefreshing(false);
  };

  const retry = async () => {
    await availableRewards.refetch();
    await me.refetch();
  };

  if (availableRewards.error || me.error) {
    return (
      <ErrorComponent
        functionToRetry={retry}
        somethingWentWrong
        deafultLabelOverRide="Probeer Opnieuw"
        onPress={availableRewards.refetch}
      />
    );
  }

  const balance = me?.data?.getStatus?.user.balance; // maybe move this part to either localstate or the tabnavigator
  const claimedRewards = me?.data?.getStatus?.user.rewards;

  return (
    <Container style={styles.container}>
      <Header style={styles.header} transparent noShadow hasTabs>
        <StatusBar
          backgroundColor={appColors.primary}
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <Title style={styles.title}>Rewards</Title>
          <CitypingsChip value={balance} />
        </View>
      </Header>
      <Tabs
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        tabContainerStyle={styles.shadowRemover}>
        <Tab heading="Rewards" {...TAB_STYLE}>
          <AvailableRewardsList
            availableRewards={availableRewards}
            navigation={navigation}
            balance={balance}
            getStatus={getStatus}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </Tab>
        <Tab heading="Geclaimed" {...TAB_STYLE}>
          <ClaimedRewardsList
            claimedRewards={claimedRewards}
            navigation={navigation}
            balance={balance}
            getStatus={getStatus}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        </Tab>
      </Tabs>
      <ClaimedRewardsModal navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: appColors.primary,
    height: 100,
  },
  container: {backgroundColor: appColors.almostNotBlue},
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabStyle: {
    backgroundColor: appColors.primary,
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'Heavitas',
    fontSize: 12,
  },
  activeTextStyle: {
    color: '#fff',
    fontFamily: 'Heavitas',
    fontSize: 14,
  },
  shadowRemover: {
    elevation: 0,
  },
});

const TAB_STYLE = {
  tabStyle: styles.tabStyle,
  activeTabStyle: styles.tabStyle,
  textStyle: styles.textStyle,
  activeTextStyle: styles.activeTextStyle,
  backgroundColor: appColors.almostNotBlue,
};

CityPingsHomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CityPingsHomeScreen;
