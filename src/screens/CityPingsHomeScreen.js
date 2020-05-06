import React from 'react';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import RewardCard from '../components/RewardCard';
import CityPingsSubHeader from '../components/header/CityPingsSubHeader';

const CityPingsHomeScreen = ({navigation}) => {
  return (
    <Container>
      <RouteHeader title="Citypings" />
      <Content>
        <CityPingsSubHeader navigation={navigation} />
        <ContentLayout>
          <RewardCard navigation={navigation} />
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default CityPingsHomeScreen;
