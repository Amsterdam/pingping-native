import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {
  Content,
  Container,
  Header,
  Right,
  Left,
  Button as NbButton,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {useQuery, useMutation} from '@apollo/client';
import {appColors} from '../config/colors';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import ProgressBar from '../components/shared/ProgressBar';
import ErrorComponent from '../components/shared/ErrorComponent';
import Title from '../components/typography/Title';
import NextButtonQuestionScreen from '../components/onboarding/NextButtonQuestionScreen';
import QuestionComponent from '../components/onboarding/QuestionComponent';
import GoBack from '../components/onboarding/answerTypes/GoBack';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import {setRevertedQuestionValues} from '../helpers/setRevertedQuestionValues';
import {questionTypes} from '../config/questionTypes';
import {testIDs} from '../../e2e/modulesTestIDs';

const INITIAL_STATE = {
  answerSelected: false,
  day: '',
  month: '',
  year: '',
  choices: [],
};

const QuestionScreen = ({navigation}) => {
  const [state, setState] = useState(INITIAL_STATE);
  const {data, loading, error, refetch} = useQuery(GET_STATUS_QUERY);
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
  const [revertTask] = useMutation(REVERT_TASK_MUTATION);
  const animationRef = useRef(null);
  const current = data?.getStatus?.currentTask;
  const currentTask = current?.task;
  const previousTask = data?.getStatus?.previousTask?.task;

  useEffect(() => {
    if (current?.answer) {
      setRevertedQuestionValues(currentTask, current, setState);
    }

    if (data && !currentTask) {
      return navigation.replace('NotificationDecisionScreen');
    }
  }, [currentTask, current, navigation, data]);

  if (error) {
    return (
      <ErrorComponent
        functionToRetry={refetch}
        somethingWentWrong
        onPress={() => navigation.goBack()}
      />
    );
  }

  if (loading) {
    return <QuestionSkeleton />;
  }

  if (data && currentTask) {
    const checkDisabled = () => {
      if (currentTask.type === questionTypes.DATE_OF_BIRTH) {
        return !state.day || !state.month || !state.year;
      }
      if (currentTask.type === questionTypes.MULTIPLE_CHOICES) {
        return state.choices.length < 1;
      }
      return !state.answerSelected;
    };

    const submitAnswer = async () => {
      let answer = '';
      answer = state.answerSelected;
      switch (currentTask.type) {
        case questionTypes.DATE_OF_BIRTH:
          answer = `${state.year}-${state.month}-${state.day}`;
          break;
        case questionTypes.MULTIPLE_CHOICES:
          answer = state.choices.join();
          break;
        default:
          break;
      }
      setLoadingQuestion(true);
      try {
        await updateTask({
          variables: {
            answer,
            taskId: currentTask.taskId,
          },
        });
        setState(INITIAL_STATE);
        await refetch();
        setLoadingQuestion(false);
        animationRef.current?.fadeIn();
      } catch (e) {
        console.log(e);
        setLoadingQuestion(false);
      }
    };

    const doRevertTask = async () => {
      console.log(previousTask);
      setLoadingQuestion(true);
      if (!previousTask?.taskId) {
        return navigation.goBack();
      }
      try {
        await revertTask({
          variables: {taskId: previousTask.taskId},
        });
        await refetch();
        setLoadingQuestion(false);
        animationRef.current?.fadeIn();
      } catch (e) {
        console.log(e);
      }
    };

    const nextButtonDisabled = checkDisabled();
    if (currentTask.type === questionTypes.GO_BACK) {
      return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;
    }
    return (
      <Container>
        <Header style={styles.header} transparent noShadow>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={appColors.background}
          />
          <Left style={styles.flex}>
            <NbButton
              transparent
              onPress={doRevertTask}
              testID={testIDs.NAVIGATION.HEADER_BACK_BUTTON}>
              <Icon name="arrowleft" type="AntDesign" style={styles.icon} />
            </NbButton>
          </Left>
          <Title style={styles.headerTitle}>
            {currentTask && currentTask.headerTitle}
          </Title>

          <Right>
            <View>
              <ProgressBar
                progress={data.getStatus.currentTask.task.progress}
              />
            </View>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.content}>
          {data && !loadingQuestion && (
            <Animatable.View
              style={styles.flex}
              easing="linear"
              duration={800}
              ref={animationRef}
              animation="fadeIn"
              useNativeDriver>
              <QuestionComponent
                currentTask={currentTask}
                setState={setState}
                answerSelected={state.answerSelected}
                day={state.day}
                month={state.month}
                year={state.year}
                state={state}
                navigation={navigation}
              />

              <NextButtonQuestionScreen
                nextButtonDisabled={nextButtonDisabled}
                submitAnswer={submitAnswer}
              />
            </Animatable.View>
          )}
          {loadingQuestion && <QuestionSkeleton />}
        </Content>
      </Container>
    );
  }
  return <QuestionSkeleton />;
};

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },

  icon: {
    color: '#000',
    fontSize: 32,
  },
  flex: {flex: 1},
});

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
