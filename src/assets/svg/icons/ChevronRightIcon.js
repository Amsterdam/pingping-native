import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

function ChevronRightIcon(props) {
	return (
		<Svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M.6 1.4 2 0l6 6-6 6-1.4-1.4L5.2 6 .6 1.4Z"
				fill="#0D2036"
			/>
		</Svg>
	);
}

export default ChevronRightIcon;
