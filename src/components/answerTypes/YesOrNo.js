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
  return (
    <React.Fragment>
      <Button
        label={answers.yes}
        bordered
        rounded
        style={
          answers.yes === state.answerSelected
            ? styles.activeButton
            : styles.whiteButton
        }
        labelStyle={answers.yes === state.answerSelected && styles.activeText}
        color="primary"
        onPress={() => setState({answerSelected: answers.yes})}
      />
      <Button
        label={answers.no}
        bordered
        rounded
        style={
          answers.no === state.answerSelected
            ? styles.activeButton
            : styles.whiteButton
        }
        labelStyle={answers.no === state.answerSelected && styles.activeText}
        color="primary"
        onPress={() => setState({answerSelected: answers.no})}
      />
    </React.Fragment>
  );
};

export default YesOrNo;
