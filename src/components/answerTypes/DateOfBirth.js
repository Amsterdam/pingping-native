import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {getDays, getMonths, getYears} from '../../utils/birthDayHelper';

const DateOfBirth = ({setState, state}) => {
  const isIos = Platform.OS === 'ios';
  return (
    <View style={styles.container}>
      <View style={[styles.pickerContainer, !isIos && styles.pickerAndroid]}>
        <Picker
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

export default DateOfBirth;
