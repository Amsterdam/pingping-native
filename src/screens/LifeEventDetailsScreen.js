import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Container} from 'native-base';
import {useQuery} from '@apollo/client';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import exampleImage from '../assets/exampleImage.png';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors, ppBaseColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import * as Progress from 'react-native-progress';
import IconButton from '../components/IconButton';
import Button from '../components/OnboardingButton';
import TipsChip from '../components/TipsChip';
import RouteTaskRow from '../components/RouteTaskRow';
import ContentLayout from '../components/layout/ContentLayout';

const screenHeight = Dimensions.get('window').height;

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
    marginVertical: 20,
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

const steps = [
  'Regel je woonadres',
  'Bankrekening openen',
  'Digid aanvragen',
  'Zorgverzekering regelen',
  'Zorgtoeslag aanvragen',
  'Inkomen',
  'Inschrijven woning',
];

function LifeEventDetailsScreen({navigation, route}) {
  const {routeId} = route.params;
  const {data, loading, error} = useQuery(GET_ROUTE_QUERY, {
    variables: {
      routeId,
    },
  });

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
    } = data.getRoute;
    const tasksToDo = tasks.filter((task) => task.status !== 'Completed');
    const startTasks = () => {
      const taskList = [];
      if (tasksToDo.length > 0) {
        tasksToDo.forEach((task) => {
          taskList.push(task.task);
        });

        navigation.navigate('TaskScreen', {
          routeId,
          task: {
            ...taskList[0],
          },
        });
      }
      return;
    };

    return (
      <Container>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.image} />
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
              <Progress.Bar
                progress={progress}
                width={50}
                color={appColors.secondary}
                unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
                borderWidth={0}
                height={10}
              />
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
                Begin bij het begin
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
  return <ActivityIndicator />;
}

export default LifeEventDetailsScreen;
