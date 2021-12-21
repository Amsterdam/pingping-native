import React from 'react';

import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import {BORDER_RADIUS} from '../../config/commonStyles';
import normalizeValue from '../../helpers/normalizeValue';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window').width;

const ShowRewardCodeModal = ({
	open = false,
	setOpen = () => {},
	expiryDate = '',
	code = '',
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
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<Button
							rounded
							transparent
							style={styles.closeButton}
							onPress={closeModal}>
							<Icon name="close" type="AntDesign" style={styles.icon} />
						</Button>
						<Title style={styles.title}>Jouw Code</Title>
						{expiryDate ? (
							<Body variant="b3" style={styles.body}>
								Geldig tot: {expiryDate}
							</Body>
						) : (
							<></>
						)}
						<View style={styles.codeContainer}>
							{code ? (
								<Title
									selectable
									style={styles.code}
									align="center"
									variant="h4">
									{code}
								</Title>
							) : (
								<></>
							)}
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
		color: appColors.primary,
	},
	codeContainer: {
		backgroundColor: appColors.headerColor,
		padding: 10,
		borderRadius: BORDER_RADIUS,
	},
	code: {
		marginTop: 5,
		color: ppBaseColors.PP_WHITE,
	},
});

ShowRewardCodeModal.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	validUntil: PropTypes.string,
	code: PropTypes.string,
	expiryDate: PropTypes.string,
};
ShowRewardCodeModal.defaultProps = {
	validUntil: '',
	code: '',
};

export default ShowRewardCodeModal;
