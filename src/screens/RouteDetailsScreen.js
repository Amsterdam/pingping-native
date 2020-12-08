import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import {useQuery} from '@apollo/client';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import {appColors} from '../config/colors';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/shared/RoundedButton';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import TrophyOrProgress from '../components/route/TrophyOrProgress';
import TipsChip from '../components/route/TipsChip';
import RouteTaskRow from '../components/route/RouteTaskRow';
import ContentLayout from '../components/layout/ContentLayout';
import ErrorComponent from '../components/shared/ErrorComponent';
import RouteDetailSkeleton from '../components/skeleton/RouteDetailsSkeleton';
import routes from '../App/stacks/routes';

const screenHeight = Dimensions.get('window').height;
function RouteDetailsScreen({navigation, route}) {
  const {routeId} = route.params;
  const {data, error, refetch} = useQuery(GET_ROUTE_QUERY, {
    variables: {
      routeId,
    },
  });

  const numberOfSteps = data?.getRoute?.numberOfSteps;

  if (error) {
    return (
      <ErrorComponent
        functionToRetry={refetch}
        somethingWentWrong
        onPress={navigation.goBack}
      />
    );
  }

  if (data && data.getRoute) {
    const {
      totalPoints,
      targetAudience,
      progress,
      tips,
      tasks,
      title,
      description,
      cover,
    } = data.getRoute;

    const tasksToDo = tasks.filter((task) => task.status !== 'Completed');

    const startTasks = () => {
      navigation.navigate(routes.routeStack.taskScreen, {
        routeId,
        task: {...tasksToDo[0].task, status: tasksToDo[0].status},
      });

      return;
    };

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageOverlayHeader
            navigation={navigation}
            cityPings={totalPoints}
            cover={cover}
          />
          <ContentLayout>
            <Body style={styles.label}>{targetAudience}</Body>
            <Title style={styles.title}>{title}</Title>
            <View style={styles.balanceContainer}>
              <View style={styles.saldo}>
                <Body style={styles.savings}> {numberOfSteps} stappen</Body>
              </View>
              <TrophyOrProgress progress={progress} />
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
  return <RouteDetailSkeleton />;
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

RouteDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default RouteDetailsScreen;
