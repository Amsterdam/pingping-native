import React from 'react';

import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import AnswerTemplate from './AnswerTemplate';
import InputComponent from './InputComponent';

import { checkDisabled } from '../../../helpers/questionAnswerHelpers';
import Button from '../AnswerButtonOnboarding';

function DropDownSelect({
	currentTask = {},
	doRevertTask = () => {},
	doUpdateTask = () => {},
	state = {},
	setState = () => {},
}) {
	const nextButtonDisabled = checkDisabled(currentTask, state);
	return (
		<AnswerTemplate
			currentTask={currentTask}
			nextButtonDisabled={nextButtonDisabled}
			doRevertTask={doRevertTask}
			doUpdateTask={doUpdateTask}
		>
			<InputComponent dataSet={['Amsterdam', 'Rotterdam', 'Alkmaar']} />
		</AnswerTemplate>
	);
}

DropDownSelect.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doRevertTask: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
};

export default DropDownSelect;
