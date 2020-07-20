import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'native-base';
import Button from '../components/Button';
import Title from '../components/typography/Title';
import DateOfBirth from './answerTypes/DateOfBirth';
import YesOrNo from './answerTypes/YesOrNo';

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
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

const QuestionComponent = ({question, type, setState, state}) => {
  return (
    <View style={styles.questionContainer}>
      <Title style={styles.title}>{question}</Title>
      <View style={styles.illustration}>
        <Text>☠️</Text>
      </View>
      {type === 'YesOrNo' && (
        <YesOrNo state={state} setState={setState} answers={['ja', 'nee']} />
      )}
      {type === 'DateOfBirth' && (
        <DateOfBirth setState={setState} state={state} />
      )}
    </View>
  );
};

export default QuestionComponent;
