import React from 'react';

import {CloseIcon, IconButton} from 'native-base';
import PropTypes from 'prop-types';
import {Modal, StyleSheet, View} from 'react-native';

import {testIDs} from '../../../e2e/modulesTestIDs';
import TrashIcon from '../../assets/svg/icons/TrashIcon';
import theme from '../../config/theme';
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
						<IconButton
							onPress={closeModal}
							style={styles.closeButton}
							icon={<CloseIcon style={styles.icon} size="5" />}
						/>
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
								icon={<TrashIcon height={20} color={theme.colors.text} />}
								style={[styles.button, styles.removeButton]}
								labelStyle={styles.buttonLabel}
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
		backgroundColor: theme.colors.modalBackground,
	},
	modalView: {
		margin: theme.spacing.m,
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
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
		position: 'absolute',
		right: 0,
		margin: theme.spacing.xxs,
		borderRadius: 50,
	},
	icon: {
		fontSize: normalizeValue(10),
		color: theme.colors.black,
	},
	title: {
		marginBottom: theme.spacing.l,
	},
	body: {
		marginBottom: theme.spacing.m,
	},
	button: {
		marginVertical: theme.spacing.xxs,
		justifyContent: 'center',
	},
	removeButton: {
		backgroundColor: theme.colors.subtleGrey,
	},
	buttonLabel: {
		color: theme.colors.text,
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
