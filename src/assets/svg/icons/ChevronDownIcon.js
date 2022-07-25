import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

function ChevronDownIcon(props) {
	return (
		<Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path fillRule="evenodd" clipRule="evenodd" d="m7 10 5 5 5-5H7Z" fill="#0D2036" />
		</Svg>
	);
}

export default ChevronDownIcon;
