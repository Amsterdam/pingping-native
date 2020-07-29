import React from 'react';
import {StyleSheet} from 'react-native';
import Button from '../Button';
import {ppBaseColors} from '../../lib/colors';

const styles = StyleSheet.create({
  whiteButton: {
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: ppBaseColors.PP_ORANGE,
  },
  activeText: {
    color: '#fff',
  },
});

const YesOrNo = ({answers, state, setState}) => {
  return answers.map((answer) => (
    <Button
      key={answer}
      label={answer}
      bordered
      rounded
      style={
        answer === state.answerSelected
          ? styles.activeButton
          : styles.whiteButton
      }
      labelStyle={answer === state.answerSelected && styles.activeText}
      color="primary"
      onPress={() => setState({answerSelected: answer})}
    />
  ));
};

export default YesOrNo;
