import React from 'react';
import {StyleSheet, Text} from 'react-native';
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
});

const QuestionComponent = ({navigation, question, type, answers, setState}) => {
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
    </View>
  );
};

export default QuestionComponent;
