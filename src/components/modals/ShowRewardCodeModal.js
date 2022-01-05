import React from 'react';

import {
	IconButton,
	CloseIcon,
} from 'native-base';
import PropTypes from 'prop-types';
import {
	Dimensions,
	Modal,
	StyleSheet,
	View,
} from 'react-native';

import theme from '../../config/theme';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window')
	.width;

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
			statusBarTranslucent
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							onPress={closeModal}
							style={styles.closeButton}
							icon={
								<CloseIcon
									style={styles.icon}
									size="4"
								/>
							}
						/>

						<Title style={styles.title}>
							Jouw Code
						</Title>
						{expiryDate ? (
							<Body
								variant="b3"
								style={styles.body}
							>
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
									variant="h4"
								>
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
	validUntil: PropTypes.string,
	code: PropTypes.string,
	expiryDate: PropTypes.string,
};
ShowRewardCodeModal.defaultProps = {
	validUntil: '',
	code: '',
};

export default ShowRewardCodeModal;
