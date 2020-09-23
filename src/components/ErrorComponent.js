import React, {useState} from 'react';
import {RefreshControl, View, StyleSheet} from 'react-native';
import {Content, Container, Title} from 'native-base';
import PropTypes from 'prop-types';
import {appColors} from '../config/colors';
import ErrorIllustration from '../assets/svg/ErrorIllustration';
import AstronautSitting from '../assets/svg/AstronautSitting';
import Body from './typography/Body';
import Button from './OnboardingButton';

const ErrorComponent = ({functionToRetry, error, navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    functionToRetry();
    setRefreshing(false);
  };

  const illustrations = {
    error: ErrorIllustration,
    noConnection: AstronautSitting,
  };

  const IllusstrationName = illustrations[error.type];

  return (
    <Container>
      <Content
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={appColors.primary}
          />
        }>
        <IllusstrationName />

        <View style={styles.textContainer}>
          <Title style={styles.title} numberOfLines={2}>
            {error.title}
          </Title>
          <Body align="center">{error.body}</Body>
        </View>

        <Button label="terug" onPress={() => navigation.goBack()} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'space-evenly', alignItems: 'center', flex: 1},
  textContainer: {alignItems: 'center', padding: 30},
  title: {fontSize: 30, marginBottom: 24},
});

ErrorComponent.propTypes = {
  functionToRetry: PropTypes.func.isRequired,
};

export default ErrorComponent;
