import * as React from 'react';

import PropTypes from 'prop-types';
import Svg, {
	Ellipse,
	G,
	Path,
	Defs,
	ClipPath,
} from 'react-native-svg';

const UpdateSvg = props => (
	<Svg
		width={props.width}
		height={props.height}
		viewBox="0 0 140 137"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Ellipse
			cx={65.078}
			cy={129.609}
			rx={47.578}
			ry={7.109}
			fill="#D2CECE"
		/>
		<G clipPath="url(#a)">
			<Path
				d="M101.514 17.304v88.952l-15.381 7.691V9.613l15.381 7.69Z"
				fill="#06F5DD"
			/>
			<Path
				d="M93.823 9.613v104.334l-64.087-7.691V17.304l64.087-7.69Z"
				fill="#8CFFF3"
			/>
			<Path
				d="m93.823 106.256-7.69 23.071h7.69c4.23 0 7.691-3.461 7.691-7.69v-15.381h-7.69ZM93.823 1.922h-7.69l7.69 15.38h7.691v-7.69c0-4.23-3.461-7.69-7.69-7.69Z"
				fill="#BFBFBF"
			/>
			<Path
				d="M93.823 106.256v15.381c0 4.229-3.46 7.69-7.69 7.69H37.427c-4.23 0-7.69-3.461-7.69-7.69v-15.381h64.086ZM93.823 9.612v7.69H29.736v-7.69c0-4.23 3.461-7.69 7.69-7.69h48.707c4.23 0 7.69 3.46 7.69 7.69Z"
				fill="#DBDBDB"
			/>
			<Path
				d="M65.625 121.638a3.846 3.846 0 1 0 0-7.691 3.846 3.846 0 0 0 0 7.691Z"
				fill="#fff"
			/>
			<Path
				d="M93.823 0H37.427c-5.301 0-9.613 4.312-9.613 9.613v112.024c0 5.301 4.312 9.613 9.612 9.613h56.397c5.3 0 9.613-4.312 9.613-9.613V9.613c0-5.3-4.312-9.613-9.613-9.613ZM37.427 3.845h56.396a5.774 5.774 0 0 1 5.768 5.768v5.768H31.659V9.613a5.774 5.774 0 0 1 5.767-5.768Zm56.396 123.56H37.427a5.775 5.775 0 0 1-5.768-5.768v-13.458h5.767a1.923 1.923 0 0 0 0-3.846H31.66V19.226H99.59v85.107H45.117a1.923 1.923 0 0 0 0 3.846H99.59v13.458a5.775 5.775 0 0 1-5.768 5.768Z"
				fill="#000"
			/>
			<Path
				d="M65.625 11.537h7.69a1.923 1.923 0 0 0 0-3.846h-7.69a1.923 1.923 0 0 0 0 3.846ZM65.625 112.023a5.775 5.775 0 0 0-5.768 5.768 5.774 5.774 0 0 0 5.768 5.768 5.774 5.774 0 0 0 5.768-5.768 5.775 5.775 0 0 0-5.768-5.768Zm0 7.691a1.925 1.925 0 0 1-1.922-1.923c0-1.06.862-1.922 1.922-1.922s1.923.862 1.923 1.922a1.925 1.925 0 0 1-1.923 1.923ZM57.934 11.537a1.923 1.923 0 1 0 0-3.846 1.923 1.923 0 0 0 0 3.846Z"
				fill="#000"
			/>
		</G>
		<Path
			d="M78.728 29.274a32.038 32.038 0 0 1 36.044 4.001h-3.829a4.717 4.717 0 0 0 0 9.434h14.428a4.715 4.715 0 0 0 4.717-4.717V23.564a4.716 4.716 0 0 0-8.052-3.335 4.716 4.716 0 0 0-1.382 3.335v2.323a41.482 41.482 0 0 0-46.387-4.925 4.717 4.717 0 1 0 4.462 8.312ZM78.466 85.586A32.037 32.037 0 0 1 62.418 51.36l2.015 3.488a4.717 4.717 0 1 0 8.17-4.716l-7.214-12.495a4.717 4.717 0 0 0-6.444-1.727L46.45 43.125a4.717 4.717 0 0 0 4.717 8.17l1.872-1.081a41.474 41.474 0 0 0 20.894 43.645 4.717 4.717 0 1 0 4.533-8.273ZM130.567 52.565h-.023a4.72 4.72 0 0 0-4.694 4.739 32.025 32.025 0 0 1-21.389 30.395l1.916-3.32a4.713 4.713 0 0 0-1.733-6.431 4.717 4.717 0 0 0-6.436 1.715l-7.204 12.475-.013.023a4.716 4.716 0 0 0 1.729 6.44l12.495 7.213a4.717 4.717 0 0 0 4.716-8.17l-2.017-1.165a41.446 41.446 0 0 0 27.369-39.22 4.713 4.713 0 0 0-4.716-4.694Z"
			fill="#FF9800"
		/>
		<Path
			d="M125.371 43.882h-14.428a6.287 6.287 0 0 1-6.278-5.87 6.289 6.289 0 0 1 5.443-6.653 30.506 30.506 0 0 0-30.636-1.099 6.289 6.289 0 1 1-5.948-11.082 43.078 43.078 0 0 1 45.618 3.117 6.289 6.289 0 0 1 12.518.87v14.428a6.297 6.297 0 0 1-6.289 6.289Zm-14.428-9.434a3.146 3.146 0 0 0 0 6.29h14.428a3.15 3.15 0 0 0 3.145-3.145V23.165a3.148 3.148 0 0 0-3.145-3.144 3.142 3.142 0 0 0-3.144 3.144v2.323a1.57 1.57 0 0 1-1.786 1.558 1.57 1.57 0 0 1-.805-.36 39.91 39.91 0 0 0-44.625-4.738 3.145 3.145 0 0 0 2.974 5.542 33.61 33.61 0 0 1 37.817 4.199 1.575 1.575 0 0 1-1.03 2.76h-3.829ZM76.198 96.012a6.298 6.298 0 0 1-3.02-.775 43.045 43.045 0 0 1-22.127-42.15 6.29 6.29 0 0 1-5.385-11.323L58.16 34.55a6.29 6.29 0 0 1 8.592 2.301l7.214 12.495a6.29 6.29 0 0 1-5.442 9.434 6.312 6.312 0 0 1-5.093-2.595 30.467 30.467 0 0 0 15.794 28.022 6.29 6.29 0 0 1-3.027 11.805ZM53.04 48.642a1.57 1.57 0 0 1 1.548 1.846A39.899 39.899 0 0 0 74.69 92.48a3.144 3.144 0 1 0 3.023-5.515 33.61 33.61 0 0 1-16.836-35.903 1.572 1.572 0 0 1 2.906-.487l2.013 3.488a3.143 3.143 0 1 0 5.447-3.145L64.03 38.424a3.145 3.145 0 0 0-4.296-1.152l-12.495 7.215a3.144 3.144 0 1 0 3.145 5.446l1.87-1.081c.24-.138.511-.21.787-.21ZM107.569 108.418a6.293 6.293 0 0 1-3.14-.843l-12.495-7.215a6.297 6.297 0 0 1-2.304-8.587l.013-.022 7.203-12.477a6.289 6.289 0 0 1 11.281 5.493 30.417 30.417 0 0 0 11.095-10.07 30.419 30.419 0 0 0 4.938-14.147c.082-.944.122-1.9.118-2.84a6.294 6.294 0 0 1 6.259-6.32h.03a6.302 6.302 0 0 1 6.289 6.26 43.726 43.726 0 0 1-.166 3.997 43.026 43.026 0 0 1-12.691 26.921 43.471 43.471 0 0 1-12.578 8.584 6.29 6.29 0 0 1 1.599 8.121 6.306 6.306 0 0 1-5.451 3.145Zm-5.271-29.144a3.16 3.16 0 0 0-2.728 1.573l-7.216 12.497a3.15 3.15 0 0 0 1.152 4.293l12.495 7.214a3.137 3.137 0 0 0 3.487-.228 3.148 3.148 0 0 0-.342-5.218l-2.018-1.165a1.577 1.577 0 0 1-.46-2.32c.183-.238.43-.418.711-.52a39.878 39.878 0 0 0 26.332-37.736 3.147 3.147 0 0 0-3.144-3.13v-1.572l-.007 1.573a3.149 3.149 0 0 0-3.138 3.16 34.135 34.135 0 0 1-.13 3.129 33.592 33.592 0 0 1-22.308 28.755 1.571 1.571 0 0 1-1.884-2.268l1.916-3.32a3.15 3.15 0 0 0-1.148-4.293 3.147 3.147 0 0 0-1.57-.424Z"
			fill="#000"
		/>
		<Defs>
			<ClipPath id="a">
				<Path
					fill="#fff"
					d="M0 0h131.25v131.25H0z"
				/>
			</ClipPath>
		</Defs>
	</Svg>
);

UpdateSvg.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

UpdateSvg.defaultProps = {
	height: 137,
	width: 140,
};

export default UpdateSvg;
