import React, {useState} from 'react';
import {Content, Container} from 'native-base';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import HTML from 'react-native-render-html';
import {useMutation} from '@apollo/client';
import TOGGLE_MODAL from '../apollo/Mutation/toggleModal';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Button from '../components/OnboardingButton';
import {appColors} from '../lib/colors';
import {ScrollView} from 'react-native-gesture-handler';
import WebViewModal from '../components/modals/WebViewModal';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 300,
  },

  textContainer: {
    flex: 1,
  },
  descriptionContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonHelp: {
    backgroundColor: appColors.greyedOut,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  htmlFontStyle: {
    fontFamily: 'Raleway',
    fontSize: 15,
    lineHeight: 25,
  },
});

const TaskScreen = ({navigation, route}) => {
  const {task} = route.params;
  const [toggleModal] = useMutation(TOGGLE_MODAL);
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);

  const completeTask = () => {
    // refetch queries here
    // update completed status
    // update points
    // navigate to homescreen
    // show modal
    navigation.navigate('LifeEventHomeScreen');
    toggleModal({
      variables: {
        pings: 20,
      },
    });
  };

  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeModal = () => {
    setWebviewOpen(false);
  };

  return (
    <React.Fragment>
      <Container>
        <LabeledHeader filledHeader navigation={navigation} title="" />
        <Content contentContainerStyle={styles.contentContainer}>
          <YouTube
            videoId="ZG0vCfivpQ8" // The YouTube video ID
            play={false} // control playback of video with true/false
            loop // control whether the video should loop when ended
            apiKey="AIzaSyBqyTzXy2qEPvGLXDxZ4En_rP6krgVvtFk"
            style={styles.videoContainer}
          />
          <ContentLayout style={styles.textContainer}>
            <ScrollView>
              <Title>{task.title}</Title>
              <View style={styles.descriptionContainer}>
                <HTML
                  html={task.description}
                  baseFontStyle={styles.htmlFontStyle}
                  onLinkPress={(event, href) => {
                    linkPressed(event, href);
                  }}
                />
              </View>
            </ScrollView>
          </ContentLayout>
        </Content>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonHelp} label="Hulp nodig?" />
          <Button label="Gelukt!" onPress={completeTask} />
        </View>
      </Container>

      <WebViewModal
        urlToVisit={urlToVisit}
        closeModal={closeModal}
        webViewOpen={webViewOpen}
        setWebviewOpen={setWebviewOpen}
      />
    </React.Fragment>
  );
};

export default TaskScreen;
