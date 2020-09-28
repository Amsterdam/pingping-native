import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import Title from '../components/typography/Title';
import DateOfBirth from './answerTypes/DateOfBirth';
import YesOrNo from './answerTypes/YesOrNo';
import MultipleChoice from './answerTypes/MultipleChoice';

const QuestionComponent = ({currentTask, setState, state}) => {
  const renderQuestionType = () => {
    switch (currentTask.type) {
      case 'YesOrNo':
        return (
          <YesOrNo
            state={state}
            setState={setState}
            answers={currentTask.choices}
          />
        );
      case 'DateOfBirth':
        return <DateOfBirth setState={setState} state={state} />;
      case 'MultipleChoices':
        return (
          <MultipleChoice
            state={state}
            setState={setState}
            answers={currentTask.choices}
          />
        );
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <Title style={styles.title}>{currentTask.title}</Title>
      <View style={styles.questionContainer}>{renderQuestionType()}</View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
  },
  whiteButton: {
    backgroundColor: '#fff',
  },
});

QuestionComponent.propTypes = {
  currentTask: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default QuestionComponent;
