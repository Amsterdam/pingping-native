import React from 'react';

import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

const LifeEventsIcon = props => (
	<Svg
		width={21}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<Path
			d="M.563 9A.57.57 0 0 0 0 9.563V21.75C0 23.016.984 24 2.25 24h16.5A2.25 2.25 0 0 0 21 21.75V9.562c0-.28-.281-.562-.563-.562H.563ZM21 6.937V5.25C21 4.031 19.969 3 18.75 3H16.5V.562c0-.28-.281-.562-.563-.562h-1.874a.57.57 0 0 0-.563.563V3h-6V.562C7.5.282 7.219 0 6.937 0H5.063A.57.57 0 0 0 4.5.563V3H2.25A2.25 2.25 0 0 0 0 5.25v1.688c0 .328.234.562.563.562h19.875A.57.57 0 0 0 21 6.937Z"
			fill={props.color}
		/>
	</Svg>
);

LifeEventsIcon.propTypes = {
	color: PropTypes.string,
};

LifeEventsIcon.defaultProps = {
	color: '#FB9F4B',
};

export default LifeEventsIcon;
