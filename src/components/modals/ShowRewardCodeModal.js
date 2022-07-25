import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';

import CloseIcon from '../../assets/svg/icons/CloseIcon';
import theme from '../../config/theme';
import IconButton from '../shared/IconButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window').width;

function ShowRewardCodeModal({ open = false, setOpen = () => {}, expiryDate = '', code = '' }) {
	const closeModal = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	return (
		<Modal animationType="fade" transparent visible={open} statusBarTranslucent>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							action={closeModal}
							style={styles.closeButton}
							iconComponent={<CloseIcon style={styles.icon} />}
						/>

						<Title style={styles.title}>Jouw Code</Title>
						{expiryDate && (
							<Body variant="b3" style={styles.body}>
								Geldig tot: {expiryDate}
							</Body>
						)}
						<View style={styles.codeContainer}>
							{code && (
								<Title selectable style={styles.code} align="center" variant="h4">
									{code}
								</Title>
							)}
						</View>
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
		position: 'absolute',
		right: 0,
		margin: theme.spacing.xxs,
	},
	title: {
		marginBottom: theme.spacing.xxs,
	},
	body: {
		marginBottom: theme.spacing.m,
		color: theme.colors.primary,
	},
	codeContainer: {
		backgroundColor: theme.colors.headerColor,
		padding: theme.spacing.xs,
		borderRadius: theme.borderRadius,
	},
	code: {
		marginTop: theme.spacing.xxs,
		color: theme.colors.white,
	},
});

ShowRewardCodeModal.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	code: PropTypes.string,
	expiryDate: PropTypes.string,
};
ShowRewardCodeModal.defaultProps = {
	expiryDate: '',
	code: '',
};

export default ShowRewardCodeModal;
