import React from 'react';

import {Button} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';

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

const styles = StyleSheet.create({
	nextButtonLabel: {
		fontFamily: 'Raleway-Regular',
		fontSize: normalizeValue(18),
	},
	nextButton: {
		paddingBottom: 0,
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		alignSelf: 'flex-end',
	},
	nextButtonDisabled: {
		color: appColors.greyedOut,
	},
	nextButtonActive: {
		color: appColors.primary,
	},
});

NextButtonQuestionScreen.propTypes = {
	nextButtonDisabled: PropTypes.bool.isRequired,
	submitAnswer: PropTypes.func.isRequired,
};

export default NextButtonQuestionScreen;
