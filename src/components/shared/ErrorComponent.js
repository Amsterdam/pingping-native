import React, {useState} from 'react';

import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import {RefreshControl, StyleSheet, View} from 'react-native';

import AstronautSitting from '../../assets/svg/AstronautSitting';
import ErrorIllustration from '../../assets/svg/ErrorIllustration';
import {appColors} from '../../config/colors';
import Button from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const errorTypes = {
  somethingWentWrong: {
    title: 'Oeps... Er is iets fout gegaan',
    body:
      'A wild error appeared. It’s super effective. Zo te zien er is iets fout gegaan. Ga terug of probeer de app opnieuw op te starten. Sorry voor het ongemak.',
    illustration: <ErrorIllustration />,
    label: 'Terug',
  },
  connectionProblem: {
    title: 'Slechte verbinding',
    body:
      'Daar zit je dan zonder internet. Maak opnieuw verbinding met het internet of probeer het later nog eens.',
    illustration: <AstronautSitting />,
    label: 'Probeer opnieuw',
  },
  backEndProblem: {
    title: 'Het ligt niet aan jou, het ligt aan ons',
    body:
      'Er gaat iets niet helemaal goed aan onze kant, we zijn druk bezig met het oplossen van het probleem. Probeer later weer gebruik te maken van Ping Ping.',
    illustration: <AstronautSitting />,
    label: 'Probeer opnieuw',
  },
};

const ErrorComponent = ({
  disconnected = false,
  backEndIssue = false,
  somethingWentWrong = false,
  functionToRetry = () => {},
  onPress = () => {},
  deafultLabelOverRide = '',
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    functionToRetry();
    setRefreshing(false);
  };

  const determineErrorType = () => {
    if (disconnected) {
      return errorTypes.connectionProblem;
    }
    if (backEndIssue) {
      return errorTypes.backEndProblem;
    }
    if (somethingWentWrong) {
      return errorTypes.somethingWentWrong;
    }
  };

  const errorType = determineErrorType();

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
          <Title
            style={styles.title}
            align="center"
            variant="h2"
            numberOfLines={3}>
            {errorType.title}
          </Title>
          <Body variant="b3" align="center">
            {errorType.body}
          </Body>
        </View>

        <Button
          label={deafultLabelOverRide ? deafultLabelOverRide : errorType.label}
          onPress={() => onPress()}
          style={styles.button}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'space-evenly', alignItems: 'center', flex: 1},
  textContainer: {alignItems: 'center', padding: 30},
  title: {marginBottom: 24},
  button: {alignSelf: 'center'},
});

ErrorComponent.propTypes = {
  disconnected: PropTypes.bool,
  backEndIssue: PropTypes.bool,
  somethingWentWrong: PropTypes.bool,
  functionToRetry: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  deafultLabelOverRide: PropTypes.string,
};

ErrorComponent.defaultProps = {
  somethingWentWrong: false,
  disconnected: false,
  backEndIssue: false,
  deafultLabelOverRide: '',
};

export default ErrorComponent;
