import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import CityPingCoin from '../../assets/svg/CityPingCoin';
import theme from '../../config/theme';
import Title from '../typography/Title';

function CitypingsChip({ value = 0, mini = false }) {
	return (
		<View style={styles.cpBalance}>
			<CityPingCoin style={styles.coin} />
			<Title style={styles.cpLabel} variant="h6">{`${value || 0} ${
				mini ? '' : 'CityPings'
			}`}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	cpBalance: {
		backgroundColor: theme.colors.headerColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing.xs,
		borderRadius: theme.borderRadius,
	},
	cpLabel: {
		color: theme.colors.white,
		paddingTop: theme.spacing.xxs,
	},
	coin: {
		marginRight: theme.spacing.xxs,
	},
});

CitypingsChip.propTypes = {
	value: PropTypes.number,
	mini: PropTypes.bool,
};

CitypingsChip.defaultProps = {
	value: 0,
	mini: false,
};

export default CitypingsChip;
