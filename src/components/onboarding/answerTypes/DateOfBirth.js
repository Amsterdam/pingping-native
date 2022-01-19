import React from 'react';

import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';

import AnswerTemplate from './AnswerTemplate';

import testIDs from '../../../../e2e/modulesTestIDs';
import theme from '../../../config/theme';
import {
	getDays,
	getMonths,
	getYears,
} from '../../../helpers/birthDayHelper';
import { checkDisabled } from '../../../helpers/questionAnswerHelpers';

function DateOfBirth({
	currentTask = {},
	doRevertTask = () => {},
	doUpdateTask = () => {},
	state = {},
	setState = () => {},
}) {
	const isIos = Platform.OS === 'ios';
	const nextButtonDisabled = checkDisabled(currentTask, state);

	return (
		<AnswerTemplate
			currentTask={currentTask}
			nextButtonDisabled={nextButtonDisabled}
			doRevertTask={doRevertTask}
			doUpdateTask={doUpdateTask}
		>
			<View style={styles.container}>
				<View
					style={[
						styles.pickerContainer,
						!isIos && styles.pickerAndroid,
					]}
				>
					<Picker
						testID={testIDs.QUESTION.PICKER_DAY}
						selectedValue={state.day}
						onValueChange={(itemValue, itemIndex) =>
							setState({
								...state,
								day: itemValue,
							})
						}
					>
						<Picker.Item label="Dag" value="" />
						{getDays()}
					</Picker>
				</View>

				<View
					style={[
						styles.pickerContainer,
						!isIos && styles.pickerAndroid,
					]}
				>
					<Picker
						testID={testIDs.QUESTION.PICKER_MONTH}
						selectedValue={state.month}
						onValueChange={(itemValue, itemIndex) =>
							setState({
								...state,
								month: itemValue,
							})
						}
					>
						<Picker.Item label="maand" value="" />
						{getMonths().map((month) => (
							<Picker.Item
								label={month.label}
								value={month.value}
								key={month}
							/>
						))}
					</Picker>
				</View>

				<View
					style={[
						styles.pickerContainer,
						!isIos && styles.pickerAndroid,
					]}
				>
					<Picker
						testID={testIDs.QUESTION.PICKER_YEAR}
						selectedValue={state.year}
						onValueChange={(itemValue, itemIndex) =>
							setState({
								...state,
								year: itemValue,
							})
						}
					>
						<Picker.Item label="jaar" value="" />
						{getYears()}
					</Picker>
				</View>
			</View>
		</AnswerTemplate>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
	},
	pickerContainer: { flex: 1 },
	pickerAndroid: {
		borderWidth: 1,
		borderRadius: 5,
		marginRight: theme.spacing.xxs,
	},
});

DateOfBirth.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doRevertTask: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
};

export default DateOfBirth;
