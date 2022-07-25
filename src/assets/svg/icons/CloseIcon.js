import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function CloseIcon({ color, ...props }) {
	return (
		<Svg width={16} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path stroke={color} strokeWidth={2} d="m1.657 1.334 13.09 12.909M1.293 14.293l13-13" />
		</Svg>
	);
}

CloseIcon.propTypes = {
	color: PropTypes.string,
};

CloseIcon.defaultProps = {
	color: '#000',
};

export default CloseIcon;
