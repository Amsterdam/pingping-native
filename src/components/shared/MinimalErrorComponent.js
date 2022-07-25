import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';

import InfoIcon from '../../assets/svg/icons/InfoIcon';
import theme from '../../config/theme';
import Body from '../typography/Body';

function MinimalErrorComponent({ message }) {
	return (
		<View animation="bounceIn" delay={200} style={styles.container}>
			<InfoIcon style={styles.icon} />
			<Body variant="b3" style={styles.errorMessage}>
				{message}
			</Body>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		color: theme.colors.danger,
		marginRight: theme.spacing.xxs,
	},
	errorMessage: {
		color: theme.colors.danger,
	},
});

MinimalErrorComponent.propTypes = {
	message: PropTypes.string.isRequired,
};

export default MinimalErrorComponent;
