import React from 'react';

import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	Dimensions,
	Modal,
	StyleSheet,
	View,
} from 'react-native';

import ThankYou from '../../assets/svg/ThankYou';
import theme from '../../config/theme';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window')
	.width;

function ThankYouFeedbackModal({
	open = false,
}) {
	return (
		<Modal
			animationType="fade"
			transparent
			visible={open}
			statusBarTranslucent
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<Title
							style={styles.title}
							variant="h4"
						>
							Bedankt voor je input!
						</Title>
						<ThankYou />
						<ActivityIndicator
							color={theme.colors.primary}
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
		alignItems: 'center',
	},
	title: {
		marginBottom: theme.spacing.xs,
	},
});

ThankYouFeedbackModal.propTypes = {
	open: PropTypes.bool.isRequired,
	validUntil: PropTypes.string,
	code: PropTypes.string,
};
ThankYouFeedbackModal.defaultProps = {
	validUntil: '',
	code: '',
};

export default ThankYouFeedbackModal;
