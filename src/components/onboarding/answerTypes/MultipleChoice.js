import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import AnswerTemplate from './AnswerTemplate';

import { testIDs } from '../../../../e2e/modulesTestIDs';
import theme from '../../../config/theme';
import { checkDisabled } from '../../../helpers/questionAnswerHelpers';
import Button from '../../onboarding/AnswerButtonOnboarding';
import Body from '../../typography/Body';

const MultipleChoice = ({
	currentTask = {},
	doRevertTask = () => {},
	doUpdateTask = () => {},
	state = {},
	setState = () => {},
}) => {
	let choices = [...state.choices];

	const addChoice = choice => () => {
		if (choices.includes(choice)) {
			choices = choices.filter(e => e !== choice);
			return setState({ ...state, choices });
		}
		choices.push(choice);
		return setState({ ...state, choices });
	};

	const mapButtons = () => {
		const buttonArray = [];
		for (const [key, value] of Object.entries(
			currentTask.choices,
		)) {
			buttonArray.push(
				<Button
					label={value}
					key={key}
					active={choices.includes(key)}
					labelStyle={
						choices.includes(key) &&
						styles.activeText
					}
					color="primary"
					onPress={addChoice(key)}
					testid={
						testIDs.QUESTION
							.MULTIPLE_CHOICE_OPTION
					}
				/>,
			);
		}
		return buttonArray;
	};

	const nextButtonDisabled = checkDisabled(
		currentTask,
		state,
	);
	return (
		<AnswerTemplate
			currentTask={currentTask}
			nextButtonDisabled={nextButtonDisabled}
			doRevertTask={doRevertTask}
			doUpdateTask={doUpdateTask}
		>
			<View>
				<Body
					vriant="b4"
					align="center"
					style={styles.bodyText}
				>
					Meerdere opties zijn mogelijk
				</Body>
				{mapButtons()}
			</View>
		</AnswerTemplate>
	);
};

const styles = StyleSheet.create({
	activeText: {
		color: theme.colors.white,
	},
	bodyText: {
		marginBottom: theme.spacing.m,
	},
});

MultipleChoice.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doRevertTask: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
};

export default MultipleChoice;
