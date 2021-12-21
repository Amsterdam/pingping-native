import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import CityPingCoin from '../../assets/svg/CityPingCoin';
import {ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const CitypingsChip = ({value = 0, mini = false}) => {
	if (!value) {
		return <></>;
	}
	return (
		<View style={styles.cpBalance}>
			<CityPingCoin style={styles.coin} />
			<Title style={styles.cpLabel} variant="h6">{`${value} ${
				mini ? '' : 'CityPings'
			}`}</Title>
		</View>
	);
};

const styles = StyleSheet.create({
	cpBalance: {
		backgroundColor: ppBaseColors.PP_DARK_BLUE,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 5,
	},
	cpLabel: {
		color: ppBaseColors.PP_WHITE,
		paddingTop: 5,
	},
	coin: {
		marginRight: 5,
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
