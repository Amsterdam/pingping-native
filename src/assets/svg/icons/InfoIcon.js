import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function InfoIcon({ color, ...props }) {
	return (
		<Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path
				d="M10 18.333a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 1 1 0 16.666Zm0-1.666a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Zm0-8.334a.833.833 0 0 1 .834.834v4.166a.833.833 0 0 1-1.667 0V9.167A.833.833 0 0 1 10 8.333Zm0-.833a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Z"
				fill={color}
			/>
		</Svg>
	);
}

InfoIcon.propTypes = {
	color: PropTypes.string,
};

InfoIcon.defaultProps = {
	color: '#000',
};

export default InfoIcon;
