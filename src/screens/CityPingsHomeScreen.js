import React from 'react';
import {StatusBar, View, StyleSheet, Dimensions} from 'react-native';
import {Content, Container, Header, Tab, Tabs} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import RewardCard from '../components/RewardCard';
import {appColors} from '../lib/colors';
import Title from '../components/typography/Title';
import CityPingCoin from '../assets/svg/CityPingCoin';
import {ppBaseColors} from '../lib/colors';
import YourPerformanceScreen from '../components/YourPerformanceOverview';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: appColors.primary,
    height: 100,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
  },
  cpBalance: {
    backgroundColor: ppBaseColors.PP_DARK_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  cpLabel: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coin: {
    marginRight: 5,
  },
});

const CityPingsHomeScreen = ({navigation}) => {
  return (
    <Container>
      <Header style={styles.header} transparent noShadow hasTabs>
        <StatusBar
          backgroundColor={appColors.primary}
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <Title style={styles.title}>Rewards</Title>
          <View style={styles.cpBalance}>
            <CityPingCoin style={styles.coin} />
            <Title style={styles.cpLabel}>20 CityPings</Title>
          </View>
        </View>
      </Header>
      <Tabs
        tabBarUnderlineStyle={{
          width: 100,
          marginHorizontal: 60,
          backgroundColor: '#fff',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}>
        <Tab
          heading="Rewards"
          tabStyle={{
            backgroundColor: appColors.primary,
          }}
          activeTabStyle={{backgroundColor: appColors.primary}}
          textStyle={{color: '#fff'}}
          activeTextStyle={{color: '#fff'}}>
          <Content>
            <ContentLayout>
              <RewardCard navigation={navigation} />
            </ContentLayout>
          </Content>
        </Tab>
        <Tab
          heading="Mijn prestaties"
          tabStyle={{backgroundColor: appColors.primary}}
          activeTabStyle={{backgroundColor: appColors.primary}}
          textStyle={{color: '#fff'}}
          activeTextStyle={{color: '#fff'}}>
          <YourPerformanceScreen />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CityPingsHomeScreen;
