import React from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';

import AnswerTemplate from './AnswerTemplate';

import { checkDisabled } from '../../../helpers/questionAnswerHelpers';
import Button from '../AnswerButtonOnboarding';

function YesOrNo({ currentTask = {}, doUpdateTask = () => {}, state = {}, setState = () => {} }) {
	const mapButtons = () => {
		const buttonArray = [];
		Object.entries(currentTask.choices).forEach(([value, label]) => {
			buttonArray.push(
				<Button
					label={label}
					key={value}
					active={value === state.answerSelected.value}
					onPress={() =>
						setState({
							...state,
							answerSelected: { value, label },
						})
					}
					testid={`${value}_BUTTON`.toUpperCase()}
				/>
			);
		});
		return buttonArray;
	};

	const nextButtonDisabled = checkDisabled(currentTask, state);
	return (
		<AnswerTemplate
			currentTask={currentTask}
			nextButtonDisabled={nextButtonDisabled}
			doUpdateTask={() => doUpdateTask()}
		>
			<View>{mapButtons()}</View>
		</AnswerTemplate>
	);
}

YesOrNo.propTypes = {
	currentTask: PropTypes.object.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
};

export default YesOrNo;
