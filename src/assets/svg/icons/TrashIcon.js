import React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const TrashIcon = props => (
	<Svg
		width={props.width}
		height={props.height}
		fill="none"
		viewBox="0 0 24 29"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			d="M22.781 2.063h-6.328l-.527-.95c-.211-.422-.686-.738-1.108-.738H8.754c-.422 0-.95.316-1.108.738l-.474.95H.844c-.475 0-.844.421-.844.843v1.688c0 .474.37.843.844.843H22.78c.422 0 .844-.369.844-.843V2.906c0-.422-.422-.844-.844-.844ZM2.795 25.002c.053 1.318 1.213 2.373 2.531 2.373h12.92c1.319 0 2.479-1.055 2.531-2.373l1.16-17.877H1.688l1.108 17.877Z"
			fill={props.color}
		/>
	</Svg>
);

TrashIcon.defaultProps = {
	color: '#000',
	width: 24,
	height: 29,
};

TrashIcon.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default TrashIcon;
