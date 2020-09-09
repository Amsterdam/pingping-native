import React, {useState} from 'react';
import {RefreshControl} from 'react-native';
import {Content, Container, Title} from 'native-base';
import PropTypes from 'prop-types';
import {appColors} from '../config/colors';
import ContentLayout from './layout/ContentLayout';

const ErrorComponent = ({functionToRetry}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    functionToRetry();
    setRefreshing(false);
  };
  return (
    <Container>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={appColors.primary}
          />
        }>
        <ContentLayout>
          <Title>
            Er ging iets mis, sleep naar beneden om het opnieuw te proberen
          </Title>
        </ContentLayout>
      </Content>
    </Container>
  );
};

ErrorComponent.propTypes = {
  functionToRetry: PropTypes.func.isRequired,
};

export default ErrorComponent;
