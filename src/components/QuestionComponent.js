import React from 'react';
import {StyleSheet, Text, Picker} from 'react-native';
import {View} from 'native-base';
import Button from '../components/Button';
import Title from '../components/typography/Title';

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
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
  dayPicker: {
    width: 50,
    height: 100,
  },
  picker: {height: 100, width: 150},
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});

const QuestionComponent = ({
  navigation,
  question,
  type,
  answers,
  setState,
  answerSelected,
  state,
  year,
  month,
  day,
}) => {
  // refactor this component

  const getDays = () => {
    const days = [];
    for (let index = 1; index < 32; index++) {
      const value = index.toString();
      days.push(<Picker.Item label={value} value={value} key={value} />);
    }
    return days;
  };
  const getMonths = () => {
    const months = [
      {label: 'januari', value: '1'},
      {label: 'februari', value: '2'},
      {label: 'maart', value: '3'},
      {label: 'april', value: '4'},
      {label: 'mei', value: '5'},
      {label: 'juni', value: '6'},
      {label: 'juli', value: '7'},
      {label: 'augustus', value: '8'},
      {label: 'september', value: '9'},
      {label: 'oktober', value: '10'},
      {label: 'november', value: '11'},
      {label: 'december', value: '12'},
    ];
    return months;
  };
  const getYears = () => {
    const years = [];
    for (let index = 1990; index < 2020; index++) {
      const value = index.toString();
      years.push(<Picker.Item label={value} value={value} key={value} />);
    }
    return years;
  };

  return (
    <View style={styles.questionContainer}>
      <Title style={styles.margin}>{question}</Title>
      <View style={styles.illustration}>
        <Text>☠️</Text>
      </View>
      {type === 'binary' &&
        answers.map(answer => (
          <Button
            key={answer}
            label={answer}
            bordered
            rounded
            style={styles.whiteButton}
            color="primary"
            onPress={() => setState({answerSelected: true})}
          />
        ))}
      {type === 'DateOfBirth' && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={day}
            style={styles.dayPicker}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, day: itemValue})
            }>
            <Picker.Item label="" value="" />
            {getDays()}
          </Picker>
          <Picker
            selectedValue={month}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, month: itemValue})
            }>
            <Picker.Item label="" value="" />
            {getMonths().map(month => (
              <Picker.Item
                label={month.label}
                value={month.value}
                key={month}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={year}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setState({...state, year: itemValue})
            }>
            <Picker.Item label="" value="" />
            {getYears()}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default QuestionComponent;
