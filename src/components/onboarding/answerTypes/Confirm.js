import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
	Image,
	StyleSheet,
	View,
} from 'react-native';

import { BASE_URL } from '../../../config/initialSettings';
import theme from '../../../config/theme';
import ConfirmModal from '../../modals/ConfirmModal';
import Button from '../../shared/RoundedButton';
import Body from '../../typography/Body';
import Title from '../../typography/Title';

const Confirm = ({
	currentTask = {},
	doUpdateConfirmTask = () => {},
}) => {
	const [
		confirmModalOpen,
		setConfirmModalOpen,
	] = useState(false);

	const handleOnPress = answer => {
		if (
			currentTask.taskId ===
				'onboarding.welcome' &&
			answer === 'no'
		) {
			return setConfirmModalOpen(true);
		}
		doUpdateConfirmTask(answer);
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
					style={[
						styles.button,
						key === 'no' && styles.whiteButton,
					]}
					labelStyle={[
						key === 'no' && styles.label,
					]}
					onPress={() => handleOnPress(key)}
					testid={`${key}_BUTTON`.toUpperCase()}
				/>,
			);
		}
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
				<Title
					style={styles.title}
					variant="h2"
					align="center"
				>
					{currentTask.title}
				</Title>
				<Body
					variant="b4"
					align="center"
					style={styles.onboardingText}
				>
					{currentTask.description}
				</Body>
			</View>

			<View style={styles.buttonContainer}>
				{mapButtons()}
			</View>
			<ConfirmModal
				open={confirmModalOpen}
				setOpen={setConfirmModalOpen}
				doUpdateConfirmTask={doUpdateConfirmTask}
			/>
		</View>
	);
};

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
	doUpdateConfirmTask: PropTypes.func.isRequired,
};

export default Confirm;
