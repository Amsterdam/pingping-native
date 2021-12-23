import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

const StarIcon = props => (
	<Svg
		width={34}
		height={33}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<Path
			d="M16.103 2.077a1 1 0 0 1 1.794 0l3.619 7.333a3 3 0 0 0 2.259 1.64l8.092 1.176a1 1 0 0 1 .554 1.706l-5.855 5.708a3 3 0 0 0-.863 2.655l1.382 8.06a1 1 0 0 1-1.45 1.054l-7.239-3.805a3 3 0 0 0-2.792 0L8.366 31.41a1 1 0 0 1-1.451-1.054l1.382-8.06a3 3 0 0 0-.862-2.655l-5.856-5.708a1 1 0 0 1 .554-1.706l8.092-1.175a3 3 0 0 0 2.26-1.641l3.618-7.333Z"
			fill={props.color}
			stroke="#0D2036"
			strokeWidth={2}
		/>
	</Svg>
);

StarIcon.defaultProps = {
	color: '#fff',
};

StarIcon.propTypes = {
	color: PropTypes.string,
};

export default StarIcon;
