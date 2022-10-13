import React from 'react';

import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

function IconButton({ style, iconComponent, action, round, backgroundColor, accessibilityLabel }) {
	return (
		<TouchableOpacity
			onPress={action}
			accessibilityLabel={accessibilityLabel}
			style={[
				styles.container,
				round && { borderRadius: 100 },
				backgroundColor && { backgroundColor },
				style,
			]}
			accessible
			accessibilityRole="button"
		>
			{iconComponent}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: theme.spacing.xxs,
		width: normalizeValue(50),
		height: normalizeValue(50),
	},
});

IconButton.propTypes = {
	iconComponent: PropTypes.element.isRequired,
	action: PropTypes.func.isRequired,
	accessibilityLabel: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	round: PropTypes.bool,
	style: PropTypes.object,
};

IconButton.defaultProps = {
	round: false,
	backgroundColor: null,
	style: {},
};

export default IconButton;
