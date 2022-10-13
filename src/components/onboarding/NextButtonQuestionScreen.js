import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import testIDs from '../../../e2e/modulesTestIDs';
import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

function NextButtonQuestionScreen({ nextButtonDisabled, submitAnswer }) {
	return (
		<TouchableOpacity
			onPress={submitAnswer}
			testID={testIDs.QUESTION.NEXT_QUESTION_BUTTON}
			variant="text"
			disabled={nextButtonDisabled}
			style={styles.nextButton}
			accessible
			accessibilityState={{ disabled: nextButtonDisabled }}
			accessibilityRole="button"
		>
			<Text
				style={[
					styles.nextButtonLabel,
					!nextButtonDisabled && styles.nextButtonActive,
					nextButtonDisabled && styles.nextButtonDisabled,
				]}
			>
				Volgende
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	nextButtonLabel: {
		fontFamily: 'Raleway-Regular',
		fontSize: normalizeValue(18),
		margin: theme.spacing.xs,
	},
	nextButton: {
		paddingBottom: 0,
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		alignSelf: 'flex-end',
	},
	nextButtonDisabled: {
		color: theme.colors.greyedOut,
	},
	nextButtonActive: {
		color: theme.colors.primary,
	},
});

NextButtonQuestionScreen.propTypes = {
	nextButtonDisabled: PropTypes.bool.isRequired,
	submitAnswer: PropTypes.func.isRequired,
};

export default NextButtonQuestionScreen;
