import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import PropTypes from 'prop-types';
import {getDays, getMonths, getYears} from '../../../helpers/birthDayHelper';
import {testIDs} from '../../../../e2e/modulesTestIDs';

const INITIAL_STATE = {
  day: '',
  month: '',
  year: '',
};

const DateOfBirth = ({}) => {
  const [state, setState] = useState(INITIAL_STATE);
  const isIos = Platform.OS === 'ios';
  return (
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
            <Picker.Item label={month.label} value={month.value} key={month} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  pickerContainer: {flex: 1},
  pickerAndroid: {
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
  },
});

DateOfBirth.propTyes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default DateOfBirth;
