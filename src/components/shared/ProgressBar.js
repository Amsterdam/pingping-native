import React from 'react';

import PropTypes from 'prop-types';
import { Bar } from 'react-native-progress';

import theme from '../../config/theme';

const ProgressBar = ({ progress }) => {
	return (
		<Bar
			progress={progress}
			width={50}
			borderWidth={0}
			height={10}
			color={theme.colors.secondary}
			unfilledColor={theme.colors.subtleGrey}
			useNativeDriver
			animationType="timing"
		/>
	);
};

ProgressBar.propTypes = {
	progress: PropTypes.number,
};
ProgressBar.defaultProps = {
	progress: 0,
};

export default ProgressBar;
