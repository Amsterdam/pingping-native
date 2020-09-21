import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import ContentLayout from './layout/ContentLayout';
import RewardBlock from './RewardBlock';
import GET_ACHIEVEMENTS_QUERY from '../apollo/Query/getAchievements';

const YourPerformanceScreen = () => {
  const {data} = useQuery(GET_ACHIEVEMENTS_QUERY);
  return (
    <ContentLayout style={styles.content}>
      <FlatList
        data={data?.getAchievements}
        renderItem={({item}) => <RewardBlock button={item} reward={item} />}
        numColumns={2}
        keyExtractor={(item) => item.label}
      />
    </ContentLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fbff',
  },
});

export default YourPerformanceScreen;
