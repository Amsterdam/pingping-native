import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Container, Text} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';
import YouTube from 'react-native-youtube';
import SimpleHeader from '../components/header/SimpleHeader';
import commonStyles from '../lib/commonStyles';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 200,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  emoji: {
    textAlign: 'center',
  },
});

const WhatIsItScreen = ({navigation}) => {
  return (
    <Container>
      <SimpleHeader navigation={navigation} color="primary" />
      <Content contentContainerStyle={styles.contentContainer}>
        <YouTube
          videoId="ZG0vCfivpQ8" // The YouTube video ID
          play={false} // control playback of video with true/false
          loop // control whether the video should loop when ended
          style={styles.videoContainer}
        />
        <View style={styles.textContainer}>
          <Title align="center">Wat is {'\n'}PING PING ?</Title>
          <Text styles={styles.emoji}>🤷‍♀🤷‍♀</Text>
          <Body align="center">
            Wij maken een persoonlijk routeplan die je gaat helpen je
            (financiële) basis op orde te hebben.
          </Body>
          <Body align="center">
            Dan hoef je daar geen zorgen meer over te maken en kan je leuke
            dingen doen.
          </Body>

          <Button
            label="Fiks je eigen route"
            rounded
            onPress={() => navigation.navigate('Question')}
          />
          <View>
            <Button
              style={styles.buttonTransparent}
              transparent
              label="Start zonder eigen route"
              labelStyle={styles.label}
              onPress={() => navigation.navigate('Question')}
            />
            <Button
              style={styles.buttonTransparent}
              transparent
              labelStyle={styles.label}
              label="Heb je al een route? Importeer gegevens"
              onPress={() => navigation.navigate('ImportRoutes')}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default WhatIsItScreen;
