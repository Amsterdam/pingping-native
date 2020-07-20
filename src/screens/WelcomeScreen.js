import React from 'react';
import {StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import {Header, Container, Button, Text, Content} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../lib/colors';
import GuyBehindComputer from '../assets/svg/GuyBehindComputer';

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
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: appColors.primary,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: appColors.background,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },
});

const WelcomeScreen = ({navigation}) => {
  return (
    <Container>
      <Header style={styles.header} transparent noShadow>
        <StatusBar barStyle="dark-content" />
        <Title style={styles.headerTitle}>WELKOM!</Title>
      </Header>
      <View style={styles.viewContainer}>
        <View>
          <GuyBehindComputer />
        </View>
        <View>
          <Title style={styles.title}>WELKOM OP PING PING</Title>
          <Body style={styles.onboardingText}>
            Voor je aan de slag kan hebben we wat informatie van jouw nodig om
            de juiste content aan te bieden….
          </Body>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('QuestionScreen')}>
            <Text style={styles.buttonLabel}>Start</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default WelcomeScreen;
