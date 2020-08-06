import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ContentLayout from './layout/ContentLayout';
import Trashcan from '../assets/trashcan.png';
import RewardBlock from './RewardBlock';

const routeRewards = [
  {
    image: Trashcan,
    title: 'Inschrijving',
    points: '20',
    acquired: true,
  },
  {
    image: Trashcan,
    title: 'Aangemeld',
    points: '20',
    acquired: false,
  },
  {
    image: Trashcan,
    title: 'Zorgtoeslag',
    points: '20',
    acquired: false,
  },
];

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fbff',
  },
});

const YourPerformanceScreen = ({navigation}) => {
  return (
    <ContentLayout style={styles.content}>
      <FlatList
        data={routeRewards}
        renderItem={({item}) => <RewardBlock button={item} reward={item} />}
        numColumns={2}
        keyExtractor={(item) => item.label}
      />
    </ContentLayout>
  );
};

export default YourPerformanceScreen;
