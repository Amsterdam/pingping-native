import React from 'react';

import {Box} from 'native-base';
import PropTypes from 'prop-types';

import DynamicStatusbar from './DynamicStatusbar';

const HeaderTemplate = ({style, children, color = 'primary'}) => {
	return (
		<Box safeAreaTop style={style}>
			<DynamicStatusbar color={color} />
			{children}
		</Box>
	);
};

HeaderTemplate.propTypes = {
	style: PropTypes.object,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	color: PropTypes.string,
};

HeaderTemplate.defaultProps = {
	style: {},
	color: 'primary',
};

export default HeaderTemplate;
