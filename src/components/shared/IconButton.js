import React from 'react';

import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

function IconButton({ style, iconComponent, action, round, backgroundColor }) {
	return (
		<TouchableOpacity
			onPress={action}
			style={[
				styles.container,
				round && { borderRadius: 100 },
				backgroundColor && { backgroundColor },
				style,
			]}
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
	round: PropTypes.bool,
	backgroundColor: PropTypes.string,
	style: PropTypes.object,
};

IconButton.defaultProps = {
	round: false,
	backgroundColor: null,
	style: {},
};

export default IconButton;
