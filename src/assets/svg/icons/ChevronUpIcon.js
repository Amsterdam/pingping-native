import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

function ChevronUpIcon(props) {
	return (
		<Svg width={10} height={5} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path fillRule="evenodd" clipRule="evenodd" d="M10 5 5 0 0 5h10Z" fill="#0D2036" />
		</Svg>
	);
}

export default ChevronUpIcon;
