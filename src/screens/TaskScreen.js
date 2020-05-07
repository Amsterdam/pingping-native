import React from 'react';
import {Content, Container} from 'native-base';
import {View, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import {useMutation} from '@apollo/client';
import TOGGLE_MODAL from '../apollo/Mutation/toggleModal';
import SimpleHeader from '../components/header/SimpleHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Button from '../components/Button';
import Body from '../components/typography/Body';

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
  },
  descriptionContainer: {
    justifyContent: 'space-around',
    flex: 1,
  },
});

const TaskScreen = ({navigation, route}) => {
  const {task} = route.params;
  const [toggleModal] = useMutation(TOGGLE_MODAL);

  const completeTask = () => {
    // refetch queries here
    // update completed status
    // update points
    // navigate to homescreen
    // show modal
    navigation.navigate('RouteHome');
    toggleModal({
      variables: {
        pings: 20,
      },
    });
  };

  return (
    <Container>
      <SimpleHeader navigation={navigation} color="primary" />
      <Content contentContainerStyle={styles.contentContainer}>
        <YouTube
          videoId="ZG0vCfivpQ8" // The YouTube video ID
          play={false} // control playback of video with true/false
          loop // control whether the video should loop when ended
          apiKey="AIzaSyBqyTzXy2qEPvGLXDxZ4En_rP6krgVvtFk"
          style={styles.videoContainer}
        />
        <ContentLayout style={styles.textContainer}>
          <Title>{task.title}</Title>
          <View style={styles.descriptionContainer}>
            <Body>{task.description}</Body>
            <View>
              <Button label="Gefikst!" rounded onPress={completeTask} />
            </View>
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default TaskScreen;
