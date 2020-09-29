import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'native-base';
import {appColors} from '../config/colors';
import {testIDs} from '../../e2e/modulesTestIDs';

const styles = StyleSheet.create({
  nextButtonLabel: {
    fontFamily: 'Raleway-Regular',
    fontSize: 18,
  },
  nextButton: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'flex-end',
  },
  nextButtonDisabled: {
    color: appColors.greyedOut,
  },
  nextButtonActive: {
    color: appColors.primary,
  },
});

const NextButtonQuestionScreen = ({nextButtonDisabled, submitAnswer}) => {
  return (
    <Button
      onPress={submitAnswer}
      testID={testIDs.QUESTION.NEXT_QUESTION_BUTTON}
      transparent
      disabled={nextButtonDisabled}
      style={styles.nextButton}>
      <Text
        style={[
          styles.nextButtonLabel,
          !nextButtonDisabled && styles.nextButtonActive,
          nextButtonDisabled && styles.nextButtonDisabled,
        ]}>
        Volgende
      </Text>
    </Button>
  );
};

NextButtonQuestionScreen.propTypes = {
  nextButtonDisabled: PropTypes.bool.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default NextButtonQuestionScreen;
