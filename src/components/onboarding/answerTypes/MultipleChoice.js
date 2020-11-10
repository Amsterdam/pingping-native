import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../onboarding/AnswerButtonOnboarding';
import {ppBaseColors} from '../../../config/colors';
import {testIDs} from '../../../../e2e/modulesTestIDs';

const MultipleChoice = ({answers, state, setState}) => {
  let choices = [...state.choices];

  const addChoice = (choice) => () => {
    if (choices.includes(choice)) {
      choices = choices.filter((e) => e !== choice);
      return setState({...state, choices});
    }
    choices.push(choice);
    return setState({...state, choices});
  };

  function mapButtons() {
    const buttonArray = [];
    for (const [key, value] of Object.entries(answers)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          active={choices.includes(key)}
          labelStyle={choices.includes(key) && styles.activeText}
          color="primary"
          onPress={addChoice(key)}
          testid={testIDs.QUESTION.MULTIPLE_CHOICE_OPTION}
        />,
      );
    }
    return buttonArray;
  }

  return <View>{mapButtons()}</View>;
};

const styles = StyleSheet.create({
  whiteButton: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  activeButton: {
    backgroundColor: ppBaseColors.PP_ORANGE,
    marginBottom: 20,
  },
  activeText: {
    color: '#fff',
  },
});

MultipleChoice.propTypes = {
  answers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default MultipleChoice;
