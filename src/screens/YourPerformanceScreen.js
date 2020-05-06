import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Trashcan from '../assets/trashcan.png';
import RewardBlock from '../components/RewardBlock';
import SimpleHeader from '../components/header/SimpleHeader';
import CityPingSubHeader from '../components/header/CityPingsSubHeader';

const routeRewards = [
  {
    image: Trashcan,
    title: 'Inschrijving',
    points: '20',
  },
  {
    image: Trashcan,
    title: 'Aangemeld',
    points: '20',
  },
  {
    image: Trashcan,
    title: 'Zorgtoeslag',
    points: '20',
  },
];

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const YourPerformanceScreen = ({navigation}) => {
  return (
    <Container>
      <SimpleHeader navigation={navigation} />
      <CityPingSubHeader showButton={false} subHeaderLabel="prestaties" />
      <ContentLayout style={styles.content}>
        <FlatList
          data={routeRewards}
          renderItem={({item}) => <RewardBlock button={item} reward={item} />}
          numColumns={2}
          keyExtractor={item => item.label}
        />
      </ContentLayout>
    </Container>
  );
};

export default YourPerformanceScreen;
