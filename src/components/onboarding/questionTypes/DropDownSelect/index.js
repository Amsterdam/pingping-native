import React from 'react';

import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import InputComponent from './InputComponent';

import testIDs from '../../../../../e2e/modulesTestIDs';
import { BASE_URL } from '../../../../config/constants';
import theme from '../../../../config/theme';
import normalizeValue from '../../../../helpers/normalizeValue';
import ProgressiveImage from '../../../shared/ProgressiveImage';
import Button from '../../../shared/RoundedButton';
import Body from '../../../typography/Body';
import Title from '../../../typography/Title';

function DropDownSelect({
	currentTask = {},
	doUpdateTask = () => {},
	state = {},
	setState = () => {},
}) {
	const [isOpened, setIsOpened] = React.useState(false);
	const selectedItem = state.selectedChoice;
	const setSelectedItem = (item) => {
		setState({ ...state, selectedChoice: item });
	};
	return (
		<View style={styles.viewContainer}>
			<View>
				{currentTask.media?.value && (
					<ProgressiveImage
						source={{
							uri: `${BASE_URL}${currentTask.media?.value}`,
						}}
						thumbnailSource={{
							uri: `${BASE_URL}${currentTask.media?.thumbnail}`,
						}}
						style={styles.image}
						mainColor={theme.colors.white}
						resizeMode="contain"
					/>
				)}
			</View>
			<View>
				<Title style={styles.title} variant="h2" align="center">
					{currentTask.title}
				</Title>
				<Body variant="b4" align="center" style={styles.onboardingText}>
					{currentTask.description}
				</Body>
			</View>

			<InputComponent
				placeholder={currentTask.meta?.dropdownSelectPlaceholder}
				noResultChoice={{
					label: currentTask.meta?.dropdownSelectNoResultLabel,
					value: currentTask.meta?.dropdownSelectNoResultValue,
				}}
				choices={currentTask.choices}
				setSelectedItem={setSelectedItem}
				selectedItem={selectedItem}
				isOpened={isOpened}
				setIsOpened={setIsOpened}
			/>
			{!isOpened && (
				<View style={styles.buttonContainer}>
					<Button
						testid={testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON}
						onPress={() => doUpdateTask()}
						disabled={!selectedItem.value}
						label="Volgende"
					/>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		height: normalizeValue(200),
		width: normalizeValue(200),
	},
	viewContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: theme.colors.background,
	},
	title: {
		color: theme.colors.text,
		marginBottom: theme.spacing.m,
	},
	onboardingText: {
		color: theme.colors.subText,
	},
	buttonContainer: {
		alignItems: 'center',
	},
});

DropDownSelect.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
};

export default DropDownSelect;
