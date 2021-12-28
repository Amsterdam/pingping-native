import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';

const NextButtonQuestionScreen = ({nextButtonDisabled, submitAnswer}) => {
	return (
		<TouchableOpacity
			onPress={submitAnswer}
			testID={testIDs.QUESTION.NEXT_QUESTION_BUTTON}
			variant="text"
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
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	nextButtonLabel: {
		fontFamily: 'Raleway-Regular',
		fontSize: normalizeValue(18),
		margin: 10,
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
