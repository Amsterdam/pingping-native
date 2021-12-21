import * as React from 'react';

import Svg, {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';

function Badge(props) {
	return (
		<Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
			<G clipPath="url(#prefix__clip0)">
				<Path
					d="M26.305 26.282l-3.454-.76-1.07 3.38a.293.293 0 01-.534.057l-4.273-7.423a10.61 10.61 0 005.416-3.04l4.232 7.353a.293.293 0 01-.317.433z"
					fill="#FD646F"
				/>
				<Path
					d="M26.305 26.282l-3.193-.703a.293.293 0 00-.342.198l-.99 3.124a.293.293 0 01-.533.058l-3.66-6.36-.613-1.063a10.61 10.61 0 005.416-3.04l.607 1.055 3.625 6.298a.293.293 0 01-.317.433z"
					fill="#FD646F"
				/>
				<Path
					d="M26.305 26.282l-3.192-.703a.293.293 0 00-.343.197l.344-1.067a.293.293 0 01.342-.197l2.748.611.418.727a.293.293 0 01-.317.431z"
					fill="#FC4755"
				/>
				<Path
					d="M13.093 21.447l-4.34 7.539a.293.293 0 01-.534-.058l-.99-3.124a.293.293 0 00-.342-.198l-3.193.703a.293.293 0 01-.316-.433l4.037-7.014c1.507 1.43 3.54 2.233 5.678 2.585z"
					fill="#FD646F"
				/>
				<Path
					d="M7.986 19.906l-3.597 6.25-.694.152a.293.293 0 01-.317-.432l3.436-5.97.93-1.619c.25.237.511.462.784.674l-.542.945zM9.176 28.25l-.424.736a.293.293 0 01-.533-.058l-.99-3.124a.293.293 0 00-.342-.198l1.095-.241a.293.293 0 01.342.198l.852 2.687z"
					fill="#FC4755"
				/>
				<Path
					d="M7.513 18.684l2.855 1.287 2.726 1.476-.731 1.268a11.736 11.736 0 01-5.549-2.81l.699-1.221zM22.997 19.551l-.607-1.055-3.216 1.42-2.2 1.62.247.429.607 1.055 3.42 5.939c.126.22.455.185.532-.058l.218-.687-3.398-5.919a11.73 11.73 0 004.397-2.744z"
					fill="#FC4755"
				/>
				<Path
					d="M25.635 11.108c0 2.868-1.128 5.471-2.964 7.388a10.61 10.61 0 01-5.416 3.04 10.645 10.645 0 01-3.99.099 10.58 10.58 0 01-5.569-2.773 10.704 10.704 0 01-2.877-4.656c-.295-.98-.455-2.02-.455-3.098C4.364 5.218 9.126.441 15 .441a10.587 10.587 0 017.946 3.577 10.646 10.646 0 012.69 7.09z"
					fill="#FAA03B"
				/>
				<Path
					d="M15 18.75c4.207 0 7.618-3.422 7.618-7.642 0-4.22-3.41-7.64-7.618-7.64-4.207 0-7.618 3.42-7.618 7.64S10.792 18.75 15 18.75z"
					fill="#FAD207"
				/>
				<Path
					d="M22.617 11.108c0 4.22-3.41 7.641-7.617 7.641s-7.618-3.42-7.618-7.64c0-.32.02-.633.058-.941.462 3.777 3.67 6.7 7.56 6.7 3.89 0 7.098-2.923 7.56-6.7.038.308.058.622.058.94z"
					fill="#FAA03B"
				/>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M15 3.468c-4.207 0-7.618 3.42-7.618 7.64S10.792 18.75 15 18.75c4.207 0 7.617-3.42 7.617-7.64S19.207 3.467 15 3.467zm0 14.4c-3.716 0-6.739-3.032-6.739-6.76 0-3.727 3.023-6.759 6.739-6.759 3.716 0 6.738 3.032 6.738 6.76 0 3.726-3.022 6.758-6.738 6.758z"
					fill="#FAF063"
				/>
				<Path
					d="M15.263 6.883l1.046 2.138a.293.293 0 00.222.161l2.352.338c.24.034.337.33.162.5l-1.705 1.66a.293.293 0 00-.085.26l.407 2.35a.293.293 0 01-.426.308l-2.099-1.112a.293.293 0 00-.274 0l-2.1 1.112a.293.293 0 01-.425-.309l.406-2.348a.293.293 0 00-.084-.26l-1.706-1.661a.293.293 0 01.163-.5l2.352-.338a.293.293 0 00.221-.161l1.047-2.138a.293.293 0 01.526 0z"
					fill="#FAA03B"
				/>
				<Path
					d="M18.878 17.691a.44.44 0 00.61.124c.453-.3.88-.648 1.267-1.035 3.151-3.152 3.159-8.271.017-11.413-3.142-3.142-8.261-3.134-11.412.017-3.152 3.152-3.16 8.271-.018 11.413a8.031 8.031 0 008.162 1.97.439.439 0 10-.266-.838 7.156 7.156 0 01-7.272-1.756c-2.799-2.799-2.792-7.36.015-10.167C12.79 3.198 17.35 3.192 20.15 5.99c2.799 2.799 2.792 7.36-.016 10.167a7.275 7.275 0 01-1.13.923.44.44 0 00-.125.61z"
					fill="#000"
				/>
				<Path
					d="M22.433 13.054a.44.44 0 00.518-.344c.11-.532.164-1.08.164-1.628C23.115 6.626 19.501 3 15.057 3 10.614 3 7 6.626 7 11.082c0 4.456 3.614 8.082 8.057 8.082a8.031 8.031 0 007.164-4.379.439.439 0 10-.781-.405 7.156 7.156 0 01-6.383 3.902c-3.958 0-7.178-3.23-7.178-7.2s3.22-7.2 7.178-7.2c3.959 0 7.18 3.23 7.18 7.2 0 .489-.05.977-.147 1.452a.44.44 0 00.343.52z"
					fill="#000"
				/>
				<Path
					d="M19.89 9.468a.44.44 0 00-.355-.3l-2.865-.411-1.275-2.606c-.146-.324-.644-.323-.79 0L13.33 8.757l-2.864.411c-.353.04-.506.514-.244.753l2.076 2.022-.495 2.86c-.072.346.33.64.638.464l2.56-1.355 2.558 1.355c.307.177.71-.118.638-.465l-.495-2.86 2.076-2.021a.441.441 0 00.112-.453zm-2.967 2.004a.442.442 0 00-.127.392l.382 2.204-1.973-1.045a.439.439 0 00-.41 0l-1.973 1.045.382-2.204a.442.442 0 00-.127-.392l-1.6-1.558 2.208-.318a.44.44 0 00.332-.242L15 7.346l.983 2.008a.44.44 0 00.332.242l2.209.318-1.6 1.558z"
					fill="#000"
				/>
				<Path
					d="M27.334 26.204l-4.296-7.463a11.086 11.086 0 003.037-7.633C26.075 4.983 21.107 0 15 0c-1.879 0-3.735.48-5.368 1.39a.442.442 0 00.427.77A10.179 10.179 0 0115 .883c5.622 0 10.196 4.587 10.196 10.226 0 5.639-4.574 10.226-10.196 10.226S4.805 16.747 4.805 11.108c0-3.025 1.325-5.878 3.635-7.828a.442.442 0 00.053-.621.438.438 0 00-.62-.054 11.104 11.104 0 00-3.947 8.503c0 2.958 1.16 5.65 3.046 7.643l-1.217 2.114c-.291.489.48.941.761.44l1.106-1.92a11.049 11.049 0 004.709 2.504l-3.793 6.589-.97-3.063a.44.44 0 00-.513-.297l-3.13.688 2.591-4.5a.439.439 0 10-.761-.44L2.666 26.23c-.195.315.115.742.475.65l3.71-.816 1.15 3.632c.101.357.625.415.8.087l4.438-7.71a11.062 11.062 0 003.537-.002l2.665 4.63a.439.439 0 10.76-.44l-2.518-4.377a11.048 11.048 0 004.705-2.51l3.687 6.404-3.13-.688a.44.44 0 00-.513.297l-.97 3.063-1.26-2.19a.439.439 0 10-.761.441l1.758 3.055c.175.328.699.27.8-.087l1.15-3.632 3.71.817c.36.091.67-.336.475-.651z"
					fill="#000"
				/>
			</G>
			<Circle cx={15} cy={11} r={10.5} stroke="#000" />
			<Defs>
				<ClipPath id="prefix__clip0">
					<Path fill="#fff" d="M0 0h30v30H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default Badge;
