/* eslint-disable react/destructuring-assignment */
import React from 'react';

import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function AccountIcon(props) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M11.625.375C5.203.375 0 5.578 0 12s5.203 11.625 11.625 11.625S23.25 18.422 23.25 12 18.047.375 11.625.375Zm0 4.5c2.25 0 4.125 1.875 4.125 4.125a4.131 4.131 0 0 1-4.125 4.125A4.101 4.101 0 0 1 7.5 9a4.131 4.131 0 0 1 4.125-4.125Zm0 16.125c-2.766 0-5.25-1.219-6.89-3.188.89-1.64 2.624-2.812 4.64-2.812.094 0 .188.047.328.094.61.187 1.219.281 1.922.281.656 0 1.313-.094 1.875-.281.14-.047.234-.094.375-.094 1.969 0 3.703 1.172 4.594 2.813A8.9 8.9 0 0 1 11.625 21Z"
				fill={props.color}
			/>
		</Svg>
	);
}

AccountIcon.defaultProps = {
	color: '#FB9F4B',
};

AccountIcon.propTypes = {
	color: PropTypes.string,
};

export default AccountIcon;
