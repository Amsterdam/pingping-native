import React from 'react';

import PropTypes from 'prop-types';
import {View as AnimatableView} from 'react-native-animatable';

import Trophy from '../../assets/svg/Trohpy';
import ProgressBar from '../shared/ProgressBar';

const TrophyOrProgress = ({progress}) => {
	if (progress === 1) {
		return (
			<AnimatableView animation="bounceIn" delay={200}>
				<Trophy />
			</AnimatableView>
		);
	}
	return <ProgressBar progress={progress} />;
};

TrophyOrProgress.propTypes = {
	progress: PropTypes.number,
};

TrophyOrProgress.defaultProps = {
	progress: 0,
};

export default TrophyOrProgress;
