import React, {useState} from 'react';
import {RefreshControl, View, StyleSheet} from 'react-native';
import {Content, Container, Title} from 'native-base';
import PropTypes from 'prop-types';
import {appColors} from '../config/colors';
import ErrorIllustration from '../assets/svg/ErrorIllustration';
import AstronautSitting from '../assets/svg/AstronautSitting';
import Body from './typography/Body';
import Button from './OnboardingButton';

const errorTypes = {
  somethingWentWrong: {
    title: 'Oeps... Er is iets fout gegaan',
    body:
      'A wild error appeared. It’s super effective. Zo te zien er is iets fout gegaan. Ga terug of probeer de app opnieuw op te starten. Sorry voor het ongemak.',
    illustration: <ErrorIllustration />,
  },
  connectionProblem: {
    title: 'Slechte verbinding',
    body:
      'Daar zit je dan zonder internet. Maak opnieuw verbinding met het internet of probeer het later nog eens.',
    illustration: <AstronautSitting />,
  },
};

const ErrorComponent = ({functionToRetry, error, navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    functionToRetry();
    setRefreshing(false);
  };

  const errorType = errorTypes[error];

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
        {errorType.illustration}

        <View style={styles.textContainer}>
          <Title style={styles.title} numberOfLines={2}>
            {errorType.title}
          </Title>
          <Body align="center">{errorType.body}</Body>
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
