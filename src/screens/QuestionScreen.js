import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import {useMutation, useQuery} from '@apollo/client';
import {appColors} from '../config/colors';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import ErrorComponent from '../components/shared/ErrorComponent';
import NextButtonQuestionScreen from '../components/onboarding/NextButtonQuestionScreen';
import QuestionComponent from '../components/onboarding/QuestionComponent';
import GoBack from '../components/onboarding/answerTypes/GoBack';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import {questionTypes} from '../config/questionTypes';
import {
  checkDisabled,
  revertTaskFunc,
  setRevertedQuestionValues,
  submitAnswer,
} from '../helpers/questionAnswerHelpers';
import QuestionScreenHeader from '../components/header/QuestionScreenHeader';

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
    const doRevertTask = () => {
      revertTaskFunc(
        setLoadingQuestion,
        previousTask,
        navigation,
        refetch,
        animationRef,
        revertTask,
      );
    };

    const doSubmitAnswer = () => {
      submitAnswer(
        currentTask,
        state,
        setLoadingQuestion,
        updateTask,
        setState,
        refetch,
        INITIAL_STATE,
        animationRef,
      );
    };

    const nextButtonDisabled = checkDisabled(currentTask, state);

    if (currentTask.type === questionTypes.GO_BACK) {
      return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;
    }

    return (
      <Container>
        <QuestionScreenHeader
          currentTask={currentTask}
          doRevertTask={doRevertTask}
        />
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
                submitAnswer={doSubmitAnswer}
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
