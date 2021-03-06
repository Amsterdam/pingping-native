import React from 'react';

import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import QuestionScreenHeader from '../../header/QuestionScreenHeader';
import Title from '../../typography/Title';
import NextButtonQuestionScreen from '../NextButtonQuestionScreen';

const AnswerTemplate = ({
  nextButtonDisabled = false,
  doUpdateTask = () => {},
  children = [],
  currentTask = {},
  doRevertTask = () => {},
}) => {
  return (
    <Container>
      <QuestionScreenHeader
        currentTask={currentTask}
        doRevertTask={doRevertTask}
      />
      <Content contentContainerStyle={styles.content}>
        <Title variant="h2" align="center">
          {currentTask.title}
        </Title>
        <View style={styles.questionContainer}>{children}</View>
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
    justifyContent: 'center',
  },
});

AnswerTemplate.propTypes = {
  nextButtonDisabled: PropTypes.bool.isRequired,
  doUpdateTask: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.func.isRequired,
};

export default AnswerTemplate;
