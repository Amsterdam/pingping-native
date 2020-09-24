import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';

import SimpleHeader from '../components/header/SimpleHeader';
import Button from '../components/OnboardingButton';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../config/colors';
import GuyBehindComputer from '../assets/svg/GuyBehindComputer';

const WelcomeScreen = ({navigation}) => {
  return (
    <Container>
      <SimpleHeader title="Welkom!" color="white" />
      <View style={styles.viewContainer}>
        <View>
          <GuyBehindComputer />
        </View>
        <View>
          <Title style={styles.title}>WELKOM OP PING PING</Title>
          <Body style={styles.onboardingText}>
            Voor je aan de slag kan, stellen we je wat vragen, zodat jij de info
            krijgt die jij nodig hebt...
          </Body>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('QuestionScreen')}
            label="start"
            testid="Start-Button"
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.background,
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: '400',
    fontSize: 26,
    color: appColors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  onboardingText: {
    textAlign: 'center',
    color: appColors.subText,
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: appColors.primary,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
});

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
