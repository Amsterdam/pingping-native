import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

import { BASE_URL } from '../../../config/constants';
import theme from '../../../config/theme';
import SkipQuestionsModal from '../../modals/SkipQuestionsModal';
import Button from '../../shared/RoundedButton';
import Body from '../../typography/Body';
import Title from '../../typography/Title';

function Confirm({ currentTask = {}, doUpdateTask = () => {} }) {
	const [skipQuestionsModalOpen, setSkipQuestionsModalOpen] = useState(false);

	const handleOnPress = (choice) => {
		if (currentTask.taskId.includes('onboarding.welcome') && choice.value === 'no') {
			return setSkipQuestionsModalOpen(true);
		}
		return doUpdateTask(choice);
	};

	const mapButtons = () => {
		const buttonArray = [];
		Object.entries(currentTask.choices).forEach(([value, label]) => {
			buttonArray.push(
				<Button
					label={label}
					key={value}
					style={[styles.button, value === 'no' && styles.whiteButton]}
					labelStyle={[value === 'no' && styles.label]}
					onPress={() => handleOnPress({ value, label })}
					testid={`${value}_BUTTON`.toUpperCase()}
				/>
			);
		});
		return buttonArray;
	};

	return (
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

			<View style={styles.buttonContainer}>{mapButtons()}</View>
			<SkipQuestionsModal
				open={skipQuestionsModalOpen}
				setOpen={setSkipQuestionsModalOpen}
				doUpdateTask={doUpdateTask}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 150,
		alignSelf: 'center',
	},
	button: {
		alignSelf: 'center',
		width: '65%',
		justifyContent: 'center',
		marginBottom: theme.spacing.xs,
	},
	label: {
		color: theme.colors.primary,
		textAlign: 'center',
	},
	whiteButton: {
		backgroundColor: theme.colors.background,
		borderColor: theme.colors.primary,
		borderWidth: 1,
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
		alignSelf: 'stretch',
	},
});

Confirm.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
};

export default Confirm;
