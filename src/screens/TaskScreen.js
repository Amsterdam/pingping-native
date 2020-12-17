import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Root, Toast} from 'native-base';
import YouTube from 'react-native-youtube';
import HTML from 'react-native-render-html';
import * as Sentry from '@sentry/react-native';
import {BASE_URL} from '../config/initialSettings';
import ProgressiveImage from '../components/shared/ProgressiveImage';
import LabeledHeader from '../components/header/LabeledHeader';
import {useMutation, useQuery} from '@apollo/client';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import COMPLETE_TASK_MUTATION from '../apollo/Mutation/completeTaskMutation';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Button from '../components/shared/RoundedButton';
import {appColors} from '../config/colors';
import WebViewModal from '../components/modals/WebViewModal';
import Loading from '../components/shared/LoadingComponent';
import routes from '../App/stacks/routes';
import {YOUTUBE_API_KEY} from '../config/keys';

const TaskScreen = ({navigation, route}) => {
  const {task, routeId} = route.params;
  const [completeTask] = useMutation(COMPLETE_TASK_MUTATION);
  const {refetch} = useQuery(GET_ROUTE_QUERY, {
    variables: {routeId},
  });
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

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
          (routeTask) => routeTask.status !== 'Completed',
        ).length === 0;

      if (routeDone) {
        setLoading(false);
        navigation.navigate(routes.citypingsStack.name, {
          screen: routes.citypingsStack.completedRouteCelebrationModalScreen,
          params: {pings: routeResponse.data.getRoute.totalPoints},
          initial: false,
        });
        return navigation.popToTop();
      }

      return navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderMedia = (media) => {
    switch (media.type) {
      case 'YouTube':
        return (
          <View style={styles.videoContainer}>
            {!videoReady && (
              <ActivityIndicator
                color={appColors.primary}
                style={styles.activivityIndicator}
              />
            )}
            <YouTube
              videoId={task.media.value} // The YouTube video ID
              play={false} // control playback of video with true/false
              loop={false} // control whether the video should loop when ended
              apiKey={YOUTUBE_API_KEY}
              style={[
                styles.videoContainer,
                !videoReady && styles.videoNotReady,
              ]}
              onError={(e) => console.log(e)}
              onReady={() => setVideoReady(true)}
              resumePlayAndroid={false}
            />
          </View>
        );
      case 'Image':
        return (
          <ProgressiveImage
            source={{uri: `${BASE_URL}${task.media.value}`}}
            thumbnailSource={{uri: `${BASE_URL}${task.media.thumbnail}`}}
            mainColor={task.media.color}
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

  const needHelp = () => {
    try {
      throw new Error('Om Hulp Gevraagd');
    } catch (error) {
      if (!__DEV__) {
        Sentry.captureMessage('Om Hulp Gevraagd');
      }
      Toast.show({
        text: 'Het is op dit moment nog niet mogelijk om hulp te vragen',
        textStyle: {fontFamily: 'Raleway-Regular'},
        style: {backgroundColor: '#000', borderRadius: 10},
        duration: 2000,
      }); // change the error message once complete
      console.log(error);
    }
  };

  const taskStatus = task.status === 'Completed';

  return (
    <Container>
      <Root>
        <LabeledHeader
          filledHeader
          navigation={navigation}
          title={task.headerTitle}
        />
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
              <Button
                style={styles.buttonHelp}
                label="Hulp nodig?"
                onPress={needHelp}
              />
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
      </Root>
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
    backgroundColor: 'black',
  },
  activivityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  videoNotReady: {
    display: 'none',
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
