import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';

import InputComponent from './InputComponent';

import testIDs from '../../../../../e2e/modulesTestIDs';
import { BASE_URL } from '../../../../config/constants';
import theme from '../../../../config/theme';
import Button from '../../../shared/RoundedButton';
import Body from '../../../typography/Body';
import Title from '../../../typography/Title';

function DropDownSelect({ currentTask = {}, doUpdateConfirmTask = () => {} }) {
	const [selectedItem, setSelectedItem] = useState(null);
	return (
		<View style={styles.container}>
			<View style={styles.viewContainer}>
				<View>
					{currentTask.media?.value && (
						<Image
							source={{
								uri: `${BASE_URL}${currentTask.media.value}`,
							}}
							style={styles.image}
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
					noResultLabel={currentTask.meta?.dropdownSelectNoResultLabel}
					choices={currentTask.choices}
					setSelectedItem={setSelectedItem}
					selectedItem={selectedItem}
				/>
				<View style={styles.buttonContainer}>
					<Button
						testid={testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON}
						onPress={() => doUpdateConfirmTask(selectedItem)}
						disabled={!selectedItem}
						label="Volgende"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 150,
		height: 150,
		alignSelf: 'center',
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
	doUpdateConfirmTask: PropTypes.func.isRequired,
};

export default DropDownSelect;
