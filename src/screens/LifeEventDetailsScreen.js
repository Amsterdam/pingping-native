import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {BASE_URL} from '../config/initialSettings';
import PropTypes from 'prop-types';
import {Container} from 'native-base';
import {useQuery} from '@apollo/client';
import ProgressBar from '../components/ProgressBar';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../config/colors';
import CitypingsChip from '../components/CitypingsChip';
import IconButton from '../components/IconButton';
import Button from '../components/OnboardingButton';
import TipsChip from '../components/TipsChip';
import RouteTaskRow from '../components/RouteTaskRow';
import ContentLayout from '../components/layout/ContentLayout';
import ErrorComponent from '../components/ErrorComponent';
import Loading from '../components/LoadingComponent';

const screenHeight = Dimensions.get('window').height;
function LifeEventDetailsScreen({navigation, route}) {
  const {routeId} = route.params;
  const {data, error, refetch} = useQuery(GET_ROUTE_QUERY, {
    variables: {
      routeId,
    },
  });

  if (error) {
    return <ErrorComponent functionToRetry={refetch} />;
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
          <View style={styles.imageContainer}>
            <Image
              source={{uri: `${BASE_URL}${coverImageUrl}`}}
              style={styles.image}
            />
            <View style={styles.imageOverlay}>
              <IconButton
                iconName="arrow-left"
                iconType="MaterialCommunityIcons"
                onPress={() => navigation.goBack()}
                size="L"
              />
              <CitypingsChip value={totalPoints} />
            </View>
          </View>
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
  image: {
    width: '100%',
    height: screenHeight * 0.3,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 80,
  },
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
