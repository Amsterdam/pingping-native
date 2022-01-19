import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

/* eslint-disable react-native/no-unused-styles */
const styles = StyleSheet.create({
	base: {
		fontFamily: 'Heavitas',
		color: theme.colors.text,
	},
	h1: {
		fontSize: normalizeValue(32),
	},
	h2: { fontSize: normalizeValue(28) },
	h3: { fontSize: normalizeValue(24) },
	h4: { fontSize: normalizeValue(20) },
	h5: { fontSize: normalizeValue(16) },
	h6: { fontSize: normalizeValue(14) },
	h7: { fontSize: normalizeValue(12) },
	left: {
		textAlign: 'left',
	},
	center: {
		textAlign: 'center',
	},
	right: {
		textAlign: 'right',
	},
});

/* eslint-enable react-native/no-unused-styles */

function Title({
	children = [],
	variant = 'h1',
	align = 'left',
	style = {},
	numberOfLines = 0,
	ellipsizeMode = 'tail',
	selectable = false,
}) {
	return (
		<Text
			style={[styles.base, styles[variant], styles[align], style]}
			numberOfLines={numberOfLines}
			ellipsizeMode={ellipsizeMode}
			selectable={selectable}
		>
			{children}
		</Text>
	);
}

Title.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	align: PropTypes.string,
	style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	numberOfLines: PropTypes.number,
	ellipsizeMode: PropTypes.string,
	selectable: PropTypes.bool,
	variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']),
};

Title.defaultProps = {
	selectable: false,
	align: 'left',
	style: {},
	numberOfLines: 0,
	variant: 'h1',
	ellipsizeMode: 'tail',
};

export default Title;
