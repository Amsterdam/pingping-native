import React from 'react';

import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import StarIcon from '../../assets/svg/icons/StarIcon';

const StarRating = ({ numberActive = 0, numberOfStars = 0, onRate = () => {} }) => {
	const starElements = [];
	for (let index = 0; index < numberOfStars; index += 1) {
		const active = index < numberActive;
		starElements.push(
			<TouchableOpacity onPress={onRate(index + 1)} activeOpacity={0.5} key={`${index}-star`}>
				<StarIcon color={active ? '#F2C13B' : '#fff'} />
			</TouchableOpacity>
		);
	}
	return starElements;
};

StarRating.propTypes = {
	numberActive: PropTypes.number.isRequired,
	numberOfStars: PropTypes.number.isRequired,
	onRate: PropTypes.func.isRequired,
};

export default StarRating;
