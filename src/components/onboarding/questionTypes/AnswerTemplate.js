import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Title from '../../typography/Title';
import NextButtonQuestionScreen from '../NextButtonQuestionScreen';

function AnswerTemplate({
	nextButtonDisabled = false,
	doUpdateTask = () => {},
	children = [],
	currentTask = {},
}) {
	return (
		<View style={styles.content}>
			<Title variant="h2" align="center">
				{currentTask.title}
			</Title>
			<View style={styles.questionContainer}>{children}</View>
			<NextButtonQuestionScreen
				nextButtonDisabled={nextButtonDisabled}
				submitAnswer={doUpdateTask}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	content: { flex: 1 },
	questionContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});

AnswerTemplate.propTypes = {
	nextButtonDisabled: PropTypes.bool.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	currentTask: PropTypes.object.isRequired,
};

export default AnswerTemplate;
