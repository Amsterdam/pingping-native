import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import Title from '../../typography/Title';
import QuestionScreenHeader from '../../header/QuestionScreenHeader';
import NextButtonQuestionScreen from '../NextButtonQuestionScreen';

const AnswerTemplate = ({
  nextButtonDisabled,
  doUpdateTask,
  children,
  currentTask,
  doRevertTask,
}) => {
  return (
    <Container>
      <QuestionScreenHeader
        currentTask={currentTask}
        doRevertTask={doRevertTask}
      />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.questionContainer}>
          <Title style={styles.title}>{currentTask.title}</Title>
          {children}
        </View>

        <NextButtonQuestionScreen
          nextButtonDisabled={nextButtonDisabled}
          submitAnswer={doUpdateTask}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  questionContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
  },
});

export default AnswerTemplate;
