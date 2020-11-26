import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../onboarding/AnswerButtonOnboarding';
import {ppBaseColors} from '../../../config/colors';
import Body from '../../typography/Body';
import {testIDs} from '../../../../e2e/modulesTestIDs';
import {checkDisabled} from '../../../helpers/questionAnswerHelpers';
import AnswerTemplate from './AnswerTemplate';

const MultipleChoice = ({currentTask, doRevertTask, updateTask, refetch}) => {
  const [state, setState] = useState({choices: []});
  let choices = [...state.choices];

  const addChoice = (choice) => () => {
    if (choices.includes(choice)) {
      choices = choices.filter((e) => e !== choice);
      return setState({...state, choices});
    }
    choices.push(choice);
    return setState({...state, choices});
  };

  const mapButtons = () => {
    const buttonArray = [];
    for (const [key, value] of Object.entries(currentTask.choices)) {
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
  };

  const doUpdateTask = async () => {
    try {
      await updateTask({
        variables: {
          answer: state.choices.join(),
          taskId: currentTask.taskId,
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const nextButtonDisabled = checkDisabled(currentTask, state);
  return (
    <AnswerTemplate
      currentTask={currentTask}
      nextButtonDisabled={nextButtonDisabled}
      doRevertTask={doRevertTask}
      doUpdateTask={doUpdateTask}>
      <View>
        <Body style={styles.bodyText}>Meerdere opties zijn mogelijk</Body>
        {mapButtons()}
      </View>
    </AnswerTemplate>
  );
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
  bodyText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
});

MultipleChoice.propTypes = {
  answers: PropTypes.object.isRequired,
};

export default MultipleChoice;
