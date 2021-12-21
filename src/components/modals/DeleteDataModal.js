import React from 'react';

import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Modal, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import {appColors, ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';
import RoundedButton from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const DeleteDataModal = ({
	open = false,
	setOpen = () => {},
	doDeleteUser = () => {},
	loading = false,
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
			<View style={styles.centeredView} testID={testIDs.DELETE_DATA.MODAL}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<Button
							rounded
							transparent
							style={styles.closeButton}
							onPress={closeModal}>
							<Icon name="close" type="AntDesign" style={styles.icon} />
						</Button>
						<Title style={styles.title}>Gegevens Verwijderen</Title>
						<Body variant="b3" style={styles.body}>
							Weet je zeker dat je jouw gegevens wilt verwijderen? Wanneer je de
							gegevens hebt verwijdered is er geen mogelijkheid meer om deze
							terug te halen..
						</Body>
						<View>
							<RoundedButton
								style={styles.button}
								label="Niet verwijderen"
								onPress={closeModal}
								loading={loading}
								disabled={loading}
								full
							/>
							<RoundedButton
								iconName="delete"
								iconType="AntDesign"
								style={[styles.button, styles.removeButton]}
								label="Verwijder mijn gegevens"
								onPress={doDeleteUser}
								loading={loading}
								disabled={loading}
								testid={testIDs.DELETE_DATA.DELETE_DATA_MODAL_BUTTON}
								full
							/>
						</View>
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
		backgroundColor: appColors.modalBackground,
	},
	modalView: {
		margin: 20,
		backgroundColor: ppBaseColors.PP_WHITE,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
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
		marginBottom: 25,
	},
	body: {
		marginBottom: 20,
	},
	button: {
		marginVertical: 5,
		justifyContent: 'center',
	},
	removeButton: {
		backgroundColor: appColors.subtleGrey,
	},
});

DeleteDataModal.propTypes = {
	navigation: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	doDeleteUser: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default DeleteDataModal;
