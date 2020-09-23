import React from 'react';
import {View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import {useMutation, useQuery} from '@apollo/client';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import ProgressBar from '../components/ProgressBar';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../config/colors';
import Button from '../components/OnboardingButton';
import TipsChip from '../components/TipsChip';
import RouteTaskRow from '../components/RouteTaskRow';
import ContentLayout from '../components/layout/ContentLayout';
import ErrorComponent from '../components/ErrorComponent';
import QUESTIONNAIRE_MODAL from '../apollo/Mutation/questionnaireModal';
import Loading from '../components/LoadingComponent';

const screenHeight = Dimensions.get('window').height;
function LifeEventDetailsScreen({navigation, route}) {
  const {routeId} = route.params;
  const {data, error, refetch} = useQuery(GET_ROUTE_QUERY, {
    variables: {
      routeId,
    },
  });
  const [openQuestionnaireModal] = useMutation(QUESTIONNAIRE_MODAL);

  const numberOfSteps = data?.getRoute?.numberOfSteps;

  React.useEffect(() => {
    if (numberOfSteps === 0) {
      openQuestionnaireModal({variables: {questionnaireModalOpen: true}});
    }
  }, [numberOfSteps, openQuestionnaireModal]);

  if (error) {
    return (
      <ErrorComponent
        functionToRetry={refetch}
        error="somethingWentWrong"
        label="terug"
        onPress={() => navigation.goBack()}
      />
    );
  }

  if (data && data.getRoute) {
    const {
      totalPoints,
      targetAudience,
      progress,
      numberOfSteps,
      tips,
      tasks,
      title,
      description,
      coverImageUrl,
    } = data.getRoute;

    const tasksToDo = tasks.filter((task) => task.status !== 'Completed');

    const startTasks = () => {
      navigation.navigate('TaskScreen', {
        routeId,
        task: {...tasksToDo[0].task, status: tasksToDo[0].status},
      });

      return;
    };

    return (
      <Container>
        <ScrollView>
          <ImageOverlayHeader
            navigation={navigation}
            cityPings={totalPoints}
            imageUrl={coverImageUrl}
          />
          <ContentLayout>
            <Body style={styles.label}>{targetAudience}</Body>
            <Title style={styles.title}>{title}</Title>
            <View style={styles.balanceContainer}>
              <View style={styles.saldo}>
                <Body style={styles.savings}> {numberOfSteps} stappen</Body>
              </View>
              <ProgressBar progress={progress} />
            </View>
            <Body style={styles.description}>{description}</Body>
            <Title style={styles.subtitle}>De Route</Title>
          </ContentLayout>
          <View>
            {tasks.map((task, index) => (
              <RouteTaskRow
                routeId={routeId}
                key={task.task.taskId}
                task={task}
                index={index + 1}
                navigation={navigation}
                tasksToDo={tasksToDo}
              />
            ))}
          </View>
          <View style={styles.tipsChip}>
            <TipsChip navigation={navigation} tips={tips} />
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          {tasksToDo.length === 0 ? (
            <Body stlye={styles.balanceIndicatorText}>
              Je hebt alle taken afgerond
            </Body>
          ) : (
            <React.Fragment>
              <Body stlye={styles.balanceIndicatorText}>
                {numberOfSteps === tasksToDo.length
                  ? 'Begin bij het begin'
                  : 'Ga verder'}
              </Body>
              <Button
                style={styles.button}
                label="Let's Go"
                onPress={startTasks}
              />
            </React.Fragment>
          )}
        </View>
      </Container>
    );
  }
  return <Loading />;
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    color: appColors.primary,
  },
  title: {
    marginVertical: 20,
  },
  description: {
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: 40,
    fontSize: 22,
  },
  tipsChip: {
    position: 'absolute',
    top: screenHeight * 0.28,
    right: 25,
  },
});

LifeEventDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default LifeEventDetailsScreen;
