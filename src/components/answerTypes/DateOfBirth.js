import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {getDays, getMonths, getYears} from '../../utils/birthDayHelper';

const styles = StyleSheet.create({
  dayPicker: {
    flex: 1,
  },
  picker: {flex: 2},
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});

const DateOfBirth = ({setState, state}) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={state.day}
        style={styles.dayPicker}
        onValueChange={(itemValue, itemIndex) =>
          setState({...state, day: itemValue})
        }>
        <Picker.Item label="" value="" />
        {getDays()}
      </Picker>
      <Picker
        selectedValue={state.month}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setState({...state, month: itemValue})
        }>
        <Picker.Item label="" value="" />
        {getMonths().map(month => (
          <Picker.Item label={month.label} value={month.value} key={month} />
        ))}
      </Picker>
      <Picker
        selectedValue={state.year}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setState({...state, year: itemValue})
        }>
        <Picker.Item label="" value="" />
        {getYears()}
      </Picker>
    </View>
  );
};

export default DateOfBirth;
