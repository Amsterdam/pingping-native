import React from 'react';

import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';

import {setHeaderColor} from '../../config/colors';

const DynamicStatusbar = ({color}) => {
	return (
		<StatusBar
			backgroundColor={setHeaderColor(color)}
			barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
		/>
	);
};

DynamicStatusbar.propTypes = {
	color: PropTypes.string.isRequired,
};

export default DynamicStatusbar;
