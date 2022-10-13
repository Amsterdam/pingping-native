import React from 'react';

import PropTypes from 'prop-types';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';

import CloseIcon from '../../../assets/svg/icons/CloseIcon';
import UpdateSvg from '../../../assets/svg/UpdateSvg';
import theme from '../../../config/theme';
import IconButton from '../../shared/IconButton';
import RoundedButton from '../../shared/RoundedButton';
import Body from '../../typography/Body';
import Title from '../../typography/Title';

const screenWidth = Dimensions.get('window').width;

function UpdateAppModal({ closeModal, openAppStore, open }) {
	return (
		<Modal animationType="fade" transparent visible={open} statusBarTranslucent>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							action={closeModal}
							style={styles.closeButton}
							iconComponent={<CloseIcon style={styles.icon} />}
							accessibilityLabel="Sluiten"
						/>
						<Title variant="h3" style={styles.title}>
							Hey! Er is een nieuwe versie
						</Title>
						<View style={styles.svgContainer}>
							<UpdateSvg width={91} height={94} />
						</View>
						<Body variant="b3" style={styles.body} align="center">
							Er is een nieuwe versie van de app beschikbaar. Druk op de knop
							hieronder om de update te starten.
						</Body>
						<RoundedButton label="Start update" full onPress={openAppStore} />
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
		paddingHorizontal: theme.spacing.xl,
		paddingVertical: theme.spacing.m,
		position: 'relative',
	},
	closeButton: {
		borderRadius: 50,
		position: 'absolute',
		right: 0,
	},
	svgContainer: {
		alignSelf: 'center',
	},
	icon: {
		color: theme.colors.black,
		margin: theme.spacing.xs,
	},
	title: {
		marginBottom: theme.spacing.l,
	},
	body: {
		marginVertical: theme.spacing.l,
	},
});

UpdateAppModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	openAppStore: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default UpdateAppModal;
