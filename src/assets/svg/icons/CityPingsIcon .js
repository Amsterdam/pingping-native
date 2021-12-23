import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

const CityPingsIcon = props => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<Path
			d="M24 12c0-1.734-1.125-3.234-2.719-3.844.703-1.5.422-3.375-.797-4.64-1.265-1.22-3.14-1.5-4.64-.797C15.234 1.125 13.734 0 12 0c-1.781 0-3.281 1.125-3.89 2.719-1.5-.703-3.376-.422-4.594.797-1.266 1.265-1.547 3.14-.844 4.64C1.078 8.766 0 10.266 0 12a4.126 4.126 0 0 0 2.672 3.89c-.703 1.5-.422 3.376.844 4.594 1.218 1.266 3.093 1.547 4.593.844A4.126 4.126 0 0 0 12 24c1.734 0 3.234-1.078 3.844-2.672a4.104 4.104 0 0 0 4.64-.844c1.22-1.218 1.5-3.093.797-4.593C22.875 15.28 24 13.78 24 12Z"
			fill={props.color}
		/>
	</Svg>
);

CityPingsIcon.defaultProps = {
	color: '#FB9F4B',
};

CityPingsIcon.propTypes = {
	color: PropTypes.string,
};

export default CityPingsIcon;
