import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import Title from '../components/typography/Title';
import DateOfBirth from './answerTypes/DateOfBirth';
import YesOrNo from './answerTypes/YesOrNo';
import MultipleChoice from './answerTypes/MultipleChoice';

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
  },
  whiteButton: {
    backgroundColor: '#fff',
  },
  illustration: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
  },
});

const QuestionComponent = ({currentTask, setState, state}) => {
  return (
    <View style={styles.questionContainer}>
      <Title style={styles.title}>{currentTask.title}</Title>
      <View style={styles.illustration} />
      {currentTask.type === 'YesOrNo' && (
        <YesOrNo
          state={state}
          setState={setState}
          answers={currentTask.choices}
        />
      )}
      {currentTask.type === 'DateOfBirth' && (
        <DateOfBirth setState={setState} state={state} />
      )}
      {currentTask.type === 'MultipleChoices' && (
        <MultipleChoice
          state={state}
          setState={setState}
          answers={currentTask.choices}
        />
      )}
    </View>
  );
};

QuestionComponent.propTypes = {
  currentTask: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default QuestionComponent;
