import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Content, Container, Header, Tab, Tabs} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import RewardCard from '../components/RewardCard';
import {appColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarUnderlineStyle: {
    width: 100,
    marginHorizontal: 60,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabStyle: {
    backgroundColor: appColors.primary,
  },
  textStyle: {
    color: '#fff',
  },
  shadowRemover: {
    elevation: 0,
  },
});

const TAB_STYLE = {
  tabStyle: styles.tabStyle,
  activeTabStyle: styles.tabStyle,
  textStyle: styles.textStyle,
  activeTextStyle: styles.textStyle,
};

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
          <CitypingsChip value={20} />
        </View>
      </Header>
      <Tabs
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        tabContainerStyle={styles.shadowRemover}>
        <Tab heading="Rewards" {...TAB_STYLE}>
          <Content>
            <ContentLayout>
              <RewardCard navigation={navigation} />
            </ContentLayout>
          </Content>
        </Tab>
        <Tab heading="Mijn prestaties" {...TAB_STYLE}>
          <YourPerformanceScreen />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default CityPingsHomeScreen;
