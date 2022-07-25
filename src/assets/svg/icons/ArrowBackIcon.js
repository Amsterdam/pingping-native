import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function ArrowBackIcon({ color, ...props }) {
	return (
		<Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.7 11H7.5l5.6-5.6L11.7 4l-8 8 8 8 1.4-1.4L7.5 13h12.2v-2Z"
				fill={color}
			/>
		</Svg>
	);
}

ArrowBackIcon.propTypes = {
	color: PropTypes.string,
};

ArrowBackIcon.defaultProps = {
	color: '#fff',
};

export default ArrowBackIcon;
