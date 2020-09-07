import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import {Content, Container, Header, Tab, Tabs} from 'native-base';
import {useLazyQuery} from '@apollo/client';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import RewardCard from '../components/RewardCard';
import {appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import YourPerformanceOverview from '../components/YourPerformanceOverview';
import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

const CityPingsHomeScreen = ({navigation}) => {
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

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAvailableRewards();
      getStatus();
    });
    return unsubscribe;
  }, [navigation, getAvailableRewards, getStatus]);

  const balance =
    me.data && me.data.getStatus && me.data.getStatus.user.balance; // maybe move this part to either localstate or the tabnavigator

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
          <Content
            style={{backgroundColor: appColors.almostNotBlue}}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={appColors.primary}
              />
            }>
            <ContentLayout>
              {availableRewards.loading && <ActivityIndicator />}
              {availableRewards.data &&
                availableRewards.data.getAvailableRewards.map((reward) => (
                  <RewardCard
                    navigation={navigation}
                    reward={reward}
                    key={reward.rewardId}
                    balance={balance}
                  />
                ))}
            </ContentLayout>
          </Content>
        </Tab>
        <Tab heading="Mijn prestaties" {...TAB_STYLE}>
          <YourPerformanceOverview />
        </Tab>
      </Tabs>
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
    width: 100,
    marginHorizontal: 55,
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
