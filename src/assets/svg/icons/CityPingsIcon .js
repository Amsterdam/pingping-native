import React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const CityPingsIcon = props => (
	<Svg
		width={26}
		height={26}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			d="m22.469 13 2.156-2.11c.656-.609.328-1.687-.516-1.874l-2.906-.75L22 5.359c.234-.843-.516-1.64-1.36-1.406l-2.906.844-.75-2.953c-.187-.797-1.312-1.125-1.922-.469L13 3.531l-2.11-2.156C10.282.719 9.157 1 8.97 1.844l-.75 2.953-2.906-.844c-.844-.234-1.594.563-1.36 1.406l.797 2.907-2.906.75C1 9.203.672 10.28 1.328 10.89L3.484 13l-2.156 2.11c-.656.609-.328 1.687.516 1.921l2.906.75-.797 2.907a1.094 1.094 0 0 0 1.36 1.359l2.906-.797.75 2.906c.234.89 1.312 1.125 1.922.516L13 22.516l2.063 2.156c.609.656 1.687.375 1.921-.516l.75-2.906 2.907.797A1.094 1.094 0 0 0 22 20.687l-.797-2.906 2.906-.75c.844-.234 1.172-1.312.516-1.922L22.469 13Z"
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
