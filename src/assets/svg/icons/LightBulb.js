/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Svg, { Path } from 'react-native-svg';

function LightBulb(props) {
	return (
		<Svg width={11} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<Path
				d="M2.813 14.205c0 .176.029.352.146.527l.498.733c.147.234.498.44.791.44h1.787c.293 0 .645-.206.791-.44l.498-.733c.088-.146.147-.38.147-.527v-1.143H2.812v1.143ZM0 6.031C0 7.35.469 8.521 1.26 9.43c.498.556 1.23 1.728 1.523 2.695v.03H7.5v-.03c.293-.967 1.025-2.139 1.523-2.695a5.14 5.14 0 0 0 1.29-3.399c0-2.842-2.344-5.156-5.186-5.156C2.139.905 0 3.307 0 6.031Zm5.156-2.343A2.332 2.332 0 0 0 2.813 6.03a.482.482 0 0 1-.47.469.463.463 0 0 1-.468-.469A3.295 3.295 0 0 1 5.156 2.75c.235 0 .469.234.469.469a.482.482 0 0 1-.469.469Z"
				fill="#fff"
			/>
		</Svg>
	);
}

export default LightBulb;
