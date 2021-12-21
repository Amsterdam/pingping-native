import React from 'react';

import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';
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
						<Button
							rounded
							transparent
							style={styles.closeButton}
							onPress={closeModal}>
							<Icon name="close" type="AntDesign" style={styles.icon} />
						</Button>
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
		backgroundColor: ppBaseColors.PP_BLACK,
	},
	modalView: {
		width: screenWidth * 0.9,
		backgroundColor: ppBaseColors.PP_WHITE,
		borderRadius: 5,
		shadowColor: ppBaseColors.PP_BLACK,
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
		position: 'absolute',
		right: 0,
	},
	icon: {
		fontSize: normalizeValue(24),
		color: ppBaseColors.PP_BLACK,
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
