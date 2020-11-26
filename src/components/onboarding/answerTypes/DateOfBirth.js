import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import PropTypes from 'prop-types';
import {getDays, getMonths, getYears} from '../../../helpers/birthDayHelper';
import {testIDs} from '../../../../e2e/modulesTestIDs';
import {checkDisabled} from '../../../helpers/questionAnswerHelpers';
import AnswerTemplate from './AnswerTemplate';

const INITIAL_STATE = {
  day: '',
  month: '',
  year: '',
};

const DateOfBirth = ({
  currentTask = () => {},
  doRevertTask = () => {},
  updateTask = () => {},
  refetch = () => {},
  answeredBefore,
}) => {
  useEffect(() => {
    if (answeredBefore) {
      const splitDate = answeredBefore.split('-');
      setState({year: splitDate[0], month: splitDate[1], day: splitDate[2]});
    }
  }, [answeredBefore]);
  const [state, setState] = useState(INITIAL_STATE);
  const isIos = Platform.OS === 'ios';
  const nextButtonDisabled = checkDisabled(currentTask, state);

  const doUpdateTask = async () => {
    const answer = `${state.year}-${state.month}-${state.day}`;
    try {
      await updateTask({
        variables: {
          answer,
          taskId: currentTask.taskId,
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnswerTemplate
      currentTask={currentTask}
      nextButtonDisabled={nextButtonDisabled}
      doRevertTask={doRevertTask}
      doUpdateTask={doUpdateTask}>
      <View style={styles.container}>
        <View style={[styles.pickerContainer, !isIos && styles.pickerAndroid]}>
          <Picker
            testID={testIDs.QUESTION.PICKER_DAY}
            selectedValue={state.day}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, day: itemValue})
            }>
            <Picker.Item label="Dag" value="" />
            {getDays()}
          </Picker>
        </View>

        <View style={[styles.pickerContainer, !isIos && styles.pickerAndroid]}>
          <Picker
            testID={testIDs.QUESTION.PICKER_MONTH}
            selectedValue={state.month}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, month: itemValue})
            }>
            <Picker.Item label="maand" value="" />
            {getMonths().map((month) => (
              <Picker.Item
                label={month.label}
                value={month.value}
                key={month}
              />
            ))}
          </Picker>
        </View>

        <View style={[styles.pickerContainer, !isIos && styles.pickerAndroid]}>
          <Picker
            testID={testIDs.QUESTION.PICKER_YEAR}
            selectedValue={state.year}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, year: itemValue})
            }>
            <Picker.Item label="jaar" value="" />
            {getYears()}
          </Picker>
        </View>
      </View>
    </AnswerTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  questionContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-evenly',
  },
  pickerContainer: {flex: 1},
  content: {flex: 1, padding: 20},
  pickerAndroid: {
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
  title: {
    textAlign: 'center',
  },
});

DateOfBirth.propTyes = {
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default DateOfBirth;
