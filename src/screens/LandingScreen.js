import React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import {Content, Container, Text, Button} from 'native-base';
import BgImage from '../assets/welcome-screen-bg1.png';
import ColoredLines from '../components/ColoredLines';
import coloredTextPrinter from '../utils/coloredTextPrinter';
import commonStyles from '../lib/commonStyles';

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
  buttonStyle: {
    ...commonStyles.buttonStyle,
  },
  whiteButton: {
    ...commonStyles.buttonStyle,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 50,
  },
});

const LandingScreen = ({navigation}) => {
  return (
    <Container>
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
                onPress={() => navigation.navigate('WhatIsIt')}>
                <Text>Wat is pingping</Text>
              </Button>
              <Button
                style={styles.buttonStyle}
                rounded
                onPress={() => navigation.navigate('Question')}>
                <Text>Fiks je eigen route</Text>
              </Button>
              <Button
                style={styles.buttonStyle}
                transparent
                onPress={() => navigation.navigate('Question')}>
                <Text>Start zonder eigen route</Text>
              </Button>
              <Button
                style={styles.buttonStyle}
                transparent
                onPress={() => navigation.navigate('ImportRoutes')}>
                <Text>Heb je al een route? Importeer gegevens</Text>
              </Button>
            </View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default LandingScreen;
