import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Content, Container, Text} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import Button from '../components/Button';
import BgImage from '../assets/welcome-screen-bg1.png';
import ColoredLines from '../components/ColoredLines';
import coloredTextPrinter from '../utils/coloredTextPrinter';
import commonStyles from '../lib/commonStyles';
import StatusbarColor from '../components/header/StatusbarColor';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  whiteButton: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 50,
  },
  buttonTransparent: {
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 0,
  },
  buttonLabel: {
    color: '#fff',
  },
});

const LandingScreen = ({navigation}) => {
  React.useEffect(() => {
    SplashScreen.hide(); // We set the splashscreen to show in objective-c need to hide it here to prevent white flash
  }, []);

  return (
    <Container>
      <StatusbarColor color="primary" contentColor="light-content" />
      <ImageBackground source={BgImage} style={styles.image}>
        <Content contentContainerStyle={styles.contentContainer}>
          <ColoredLines />
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              {coloredTextPrinter('PING').map(element => element)}
            </View>
            <Text style={commonStyles.logoFont}>PING</Text>
            <Text style={commonStyles.subTitle}>Welkom op PINGPING</Text>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.whiteButton}
                bordered
                rounded
                color="primary"
                label="Wat is pingping"
                onPress={() => navigation.navigate('WhatIsIt')}
              />
              <Button
                rounded
                label="Fiks je eigen route"
                onPress={() => navigation.navigate('Privacy')}
              />
              <View>
                <Button
                  style={styles.buttonTransparent}
                  transparent
                  labelStyle={styles.buttonLabel}
                  label="Start zonder eigen route"
                  onPress={() => navigation.navigate('Question')}
                />
                <Button
                  style={styles.buttonTransparent}
                  transparent
                  labelStyle={styles.buttonLabel}
                  label="Heb je al een route? Importeer gegevens"
                  onPress={() => navigation.navigate('ImportRoutes')}
                />
              </View>
            </View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default LandingScreen;
