import React from 'react';

import {CloseIcon, IconButton} from 'native-base';
import PropTypes from 'prop-types';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import theme from '../../config/theme';
import RoundedButton from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window').width;

const ConfirmModal = ({
	open = false,
	setOpen = () => {},
	doUpdateConfirmTask = () => {},
}) => {
	function closeModal() {
		setOpen(false);
	}

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={open}
			statusBarTranslucent>
			<View
				style={styles.centeredView}
				testID={testIDs.QUESTION.SKIP_QUESTIONS_MODAL}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							onPress={closeModal}
							style={styles.closeButton}
							icon={<CloseIcon style={styles.icon} size="5" />}
						/>
						<Title style={styles.title}>Vragen Overslaan</Title>

						<Body variant="b3" style={styles.body}>
							Als je er voor kiest om zonder vragen te beantwoorden door te gaan
							zal de route niet persoonlijk op jou aangepast worden en krijg je
							de volledige route te zien met alle stappen.
						</Body>
						<RoundedButton
							label="Vragen Overslaan"
							full
							onPress={() => doUpdateConfirmTask('no')}
							testid={testIDs.QUESTION.CONFIRM_SKIP_QUESTIONS_BUTTON}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.black,
	},
	modalView: {
		width: screenWidth * 0.9,
		backgroundColor: theme.colors.black,
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
		padding: 35,
		position: 'relative',
	},
	closeButton: {
		borderRadius: 50,
		position: 'absolute',
		right: 0,
	},
	icon: {
		color: theme.colors.black,
		margin: 10,
	},
	title: {
		marginBottom: 5,
	},
	body: {
		marginBottom: 20,
	},
});

ConfirmModal.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	doUpdateConfirmTask: PropTypes.func.isRequired,
};

export default ConfirmModal;
