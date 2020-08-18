import React from 'react';
import {StatusBar, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Content, Container, Header, Tab, Tabs} from 'native-base';
import {useLazyQuery} from '@apollo/client';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import RewardCard from '../components/RewardCard';
import {appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import YourPerformanceOverview from '../components/YourPerformanceOverview';
import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';

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

const CityPingsHomeScreen = ({navigation}) => {
  const [
    getAvailableRewards,
    {data, refetch, loading, error, client},
  ] = useLazyQuery(GET_AVAILABLE_REWARDS);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAvailableRewards();
    });

    return unsubscribe;
  }, [navigation, getAvailableRewards]);

  return (
    <Container style={styles.container}>
      <Header style={styles.header} transparent noShadow hasTabs>
        <StatusBar
          backgroundColor={appColors.primary}
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <Title style={styles.title}>Rewards</Title>
          <CitypingsChip value={0} />
        </View>
      </Header>
      <Tabs
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        tabContainerStyle={styles.shadowRemover}>
        <Tab heading="Rewards" {...TAB_STYLE}>
          <Content style={{backgroundColor: appColors.almostNotBlue}}>
            <ContentLayout>
              {loading && <ActivityIndicator />}
              {data &&
                data.getAvailableRewards.map((reward) => (
                  <RewardCard
                    navigation={navigation}
                    reward={reward}
                    key={reward.rewardId}
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

export default CityPingsHomeScreen;
