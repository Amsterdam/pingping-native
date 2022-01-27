import React, { useCallback } from 'react';

import { CloseIcon, IconButton } from 'native-base';
import PropTypes from 'prop-types';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';

import testIDs from '../../../e2e/modulesTestIDs';
import theme from '../../config/theme';
import RoundedButton from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window')
	.width;

function ConfirmModal({ open = false, setOpen = () => {}, doUpdateTask = () => {}, choice = {} }) {
	const closeModal = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	return (
		<Modal animationType="fade" transparent visible={open} statusBarTranslucent>
			<View style={styles.centeredView} testID={testIDs.QUESTION.SKIP_QUESTIONS_MODAL}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							onPress={closeModal}
							style={styles.closeButton}
							icon={<CloseIcon style={styles.icon} size="5" />}
						/>
						<Title style={styles.title}>Vragen Overslaan</Title>

						<Body variant="b3" style={styles.body}>
							Als je er voor kiest om zonder vragen te beantwoorden door te gaan zal
							de route niet persoonlijk op jou aangepast worden en krijg je de
							volledige route te zien met alle stappen.
						</Body>
						<RoundedButton
							label={choice.label}
							full
							onPress={() => doUpdateTask(choice)}
							testid={testIDs.QUESTION.CONFIRM_SKIP_QUESTIONS_BUTTON}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.modalBackground,
	},
	modalView: {
		width: screenWidth * 0.9,
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		shadowColor: theme.colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	modalContainer: {
		padding: theme.spacing.xxl,
		position: 'relative',
	},
	closeButton: {
		borderRadius: 50,
		position: 'absolute',
		right: 0,
	},
	icon: {
		color: theme.colors.black,
		margin: theme.spacing.xs,
	},
	title: {
		marginBottom: theme.spacing.xxs,
	},
	body: {
		marginBottom: theme.spacing.m,
	},
});

ConfirmModal.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	choice: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}),
};

ConfirmModal.defaultProps = {
	choice: { value: 'no', label: 'Vragen Overslaan' },
};

export default ConfirmModal;
