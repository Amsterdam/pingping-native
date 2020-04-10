import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import Title from '../components/typography/Title';

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  questionContainer: {
    flex: 1,
  },
});

const QuestionComponent = ({navigation, question}) => {
  return (
    <View style={styles.questionContainer}>
      <Title style={styles.margin}>{question}</Title>
    </View>
  );
};

export default QuestionComponent;
