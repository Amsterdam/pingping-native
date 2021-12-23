import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';

const LifeEventsIcon = props => (
	<Svg
		width={21}
		height={24}
		viewBox="0 0 21 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<Path
			d="M18.75 3H16.5V.75c0-.375-.375-.75-.75-.75h-1.5c-.422 0-.75.375-.75.75V3h-6V.75C7.5.375 7.125 0 6.75 0h-1.5c-.422 0-.75.375-.75.75V3H2.25A2.25 2.25 0 0 0 0 5.25V7.5h21V5.25C21 4.031 19.969 3 18.75 3ZM0 21.75C0 23.016.984 24 2.25 24h16.5A2.25 2.25 0 0 0 21 21.75V9H0v12.75Zm6.281-6.703 2.532-.375 1.171-2.344a.541.541 0 0 1 .985 0l1.172 2.344 2.578.375c.422.047.61.61.281.937l-1.828 1.829.422 2.53c.094.47-.422.845-.797.61L10.5 19.734l-2.297 1.22c-.422.233-.89-.142-.844-.61l.47-2.532-1.876-1.828a.548.548 0 0 1 .328-.937Z"
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
