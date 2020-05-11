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
  // refactor this
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
      'januari',
      'februari',
      'maart',
      'april',
      'mei',
      'juni',
      'juli',
      'augustus',
      'september',
      'oktober',
      'november',
      'december',
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'stretch',
          }}>
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
              <Picker.Item label={month} value={month} key={month} />
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
