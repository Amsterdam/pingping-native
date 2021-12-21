import React from 'react';

import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';

const StarRating = ({
	numberActive = 0,
	numberOfStars = 0,
	onRate = () => {},
}) => {
	const starElements = [];
	for (let index = 0; index < numberOfStars; index++) {
		const active = index < numberActive;
		starElements.push(
			<TouchableOpacity
				style={styles.button}
				onPress={onRate(index + 1)}
				activeOpacity={0.5}
				key={`${index}-star`}>
				<Icon
					style={[styles.icon, active && styles.activeIcon]}
					name={active ? 'star' : 'staro'}
					type={'AntDesign'}
				/>
			</TouchableOpacity>,
		);
	}
	return starElements;
};

const styles = StyleSheet.create({
	icon: {
		fontSize: normalizeValue(30),
	},
	activeIcon: {
		color: ppBaseColors.PP_GOLD,
	},
});

StarRating.propTypes = {
	numberActive: PropTypes.number.isRequired,
	numberOfStars: PropTypes.number.isRequired,
	onRate: PropTypes.func.isRequired,
};

export default StarRating;
