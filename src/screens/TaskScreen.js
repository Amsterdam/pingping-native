import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import YouTube from 'react-native-youtube';
import HTML from 'react-native-render-html';
import TaskHeader from '../components/header/TaskHeader';
import {useMutation, useQuery} from '@apollo/client';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import COMPLETE_TASK_MUTATION from '../apollo/Mutation/completeTaskMutation';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Button from '../components/OnboardingButton';
import {appColors} from '../config/colors';
import WebViewModal from '../components/modals/WebViewModal';
import Loading from '../components/LoadingComponent';

const TaskScreen = ({navigation, route}) => {
  const {task, routeId} = route.params;
  const [completeTask] = useMutation(COMPLETE_TASK_MUTATION);
  const {refetch} = useQuery(GET_ROUTE_QUERY, {
    variables: {routeId},
  });
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const doCompleteTask = async () => {
    setLoading(true);
    try {
      await completeTask({
        variables: {taskId: task.taskId},
      });

      /* This code checks if the route is done in order to show the celebration modal yes/no */
      const routeResponse = await refetch();
      const routeDone =
        routeResponse?.data?.getRoute?.tasks.filter(
          (task) => task.status !== 'Completed',
        ).length === 0;
      if (routeDone) {
        return navigation.navigate('CityPings', {
          screen: 'CityPingsModalScreen',
          params: {pings: routeResponse.data.getRoute.totalPoints},
          initial: false,
        });
      }
      setLoading(false);
      return navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const renderMedia = (media) => {
    switch (media.type) {
      case 'YouTube':
        return (
          <YouTube
            videoId={task.media.value} // The YouTube video ID
            play={false} // control playback of video with true/false
            loop={false} // control whether the video should loop when ended
            apiKey="AIzaSyBqyTzXy2qEPvGLXDxZ4En_rP6krgVvtFk"
            style={styles.videoContainer}
            onError={(e) => console.log(e)}
            resumePlayAndroid={false}
          />
        );
      case 'Image':
        return (
          <Image
            source={{uri: task.media.value}}
            style={styles.imageContainer}
          />
        );
      default:
        break;
    }
  };

  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeModal = () => {
    setWebviewOpen(false);
  };

  const taskStatus = task.status === 'Completed';

  return (
    <Container>
      <TaskHeader navigation={navigation} title={task.headerTitle} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {task?.media && renderMedia(task.media)}
        <ContentLayout>
          <Title>{task.title}</Title>
          <HTML
            html={task.description}
            baseFontStyle={styles.htmlFontStyle}
            onLinkPress={(event, href) => {
              linkPressed(event, href);
            }}
          />
        </ContentLayout>
      </ScrollView>

      {taskStatus ? (
        <View style={styles.completedTagLineContainer}>
          <Title style={styles.completedTagLine} align="center">
            Je {task.headerTitle} is gefikst
          </Title>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <React.Fragment>
            <Button style={styles.buttonHelp} label="Hulp nodig?" />
            <Button label="Gelukt!" onPress={doCompleteTask} />
          </React.Fragment>
        </View>
      )}

      {loading && <Loading />}
      <WebViewModal
        urlToVisit={urlToVisit}
        closeModal={closeModal}
        webViewOpen={webViewOpen}
        setWebviewOpen={setWebviewOpen}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 200,
  },
  imageContainer: {
    alignSelf: 'stretch',
    height: 200,
  },
  textContainer: {
    alignSelf: 'stretch',
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: 10,
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
    fontFamily: 'Raleway-Regular',
    fontSize: 15,
    lineHeight: 25,
  },
  completedTagLineContainer: {
    padding: 10,
  },
  completedTagLine: {
    fontSize: 14,
    color: appColors.primary,
  },
});

TaskScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default TaskScreen;
