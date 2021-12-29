import React from 'react';

import Svg, {
	ClipPath,
	Defs,
	G,
	Path,
} from 'react-native-svg';

function Export(props) {
	return (
		<Svg
			width={56}
			height={56}
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<G clipPath="url(#prefix__clip0)">
				<Path
					d="M10.188 23.475v23.168c0 .854.53 1.618 1.329 1.919l16.596 6.235 16.596-6.235a2.05 2.05 0 001.33-1.92v-22.5"
					fill="#C5EAD3"
				/>
				<Path
					d="M46.038 20.255l-17.925-6-17.925 6 17.925 6.908 17.925-6.908z"
					fill="#F9F9F9"
				/>
				<Path
					d="M28.113 27.163l-3.487 5.248a1.77 1.77 0 01-2.128.666L8.336 27.45a1.77 1.77 0 01-.875-2.54l2.727-4.655 17.925 6.908z"
					fill="#91C6A5"
				/>
				<Path
					d="M28.113 27.163L31.6 32.41a1.77 1.77 0 002.128.666L47.89 27.45a1.77 1.77 0 00.874-2.54l-2.727-4.655-17.925 6.908z"
					fill="#91C6A5"
				/>
				<Path
					d="M31.105 20.78V10.047h2.891L28.113.984l-5.883 9.063h2.891V20.78h5.984z"
					fill="#C5EAD3"
				/>
				<Path
					d="M49.709 24.359l-2.727-4.657-.115-.16a1.089 1.089 0 00-.443-.31L32.198 14.47v-3.33h1.798a1.094 1.094 0 00.918-1.689L29.03.39a1.094 1.094 0 00-1.835 0L21.312 9.45a1.094 1.094 0 00.918 1.69h1.798v3.329L9.775 19.243c-.232.094-.414.26-.532.463l-2.725 4.653a2.861 2.861 0 001.413 4.108l1.163.462v17.714c0 1.302.82 2.484 2.038 2.942l16.596 6.236a1.095 1.095 0 00.77 0l16.596-6.236a3.158 3.158 0 002.038-2.942V28.929l1.163-.462a2.862 2.862 0 001.413-4.108zM28.113 2.993l3.87 5.96h-.878c-.604 0-1.094.49-1.094 1.094v9.639h-3.796v-9.64c0-.603-.49-1.093-1.093-1.093h-.878l3.87-5.96zm-2.992 18.88h5.984c.604 0 1.093-.489 1.093-1.093v-4.003l10.61 3.551-14.695 5.663-14.695-5.663 10.61-3.551v4.003c0 .604.49 1.094 1.093 1.094zM8.35 26.027a.67.67 0 01.055-.562l2.257-3.854 15.786 6.083-2.733 4.114a.68.68 0 01-.813.254L8.74 26.434a.667.667 0 01-.39-.408zm36.595 20.617a.961.961 0 01-.62.895l-15.118 5.68V47.81a1.094 1.094 0 00-2.187 0v5.407l-15.118-5.679a.961.961 0 01-.62-.895V29.798l10.813 4.296a2.877 2.877 0 003.442-1.077l1.483-2.231v7.131a1.094 1.094 0 102.187 0v-7.131l1.482 2.231a2.878 2.878 0 003.443 1.077l10.813-4.296v16.845zm2.931-20.617a.667.667 0 01-.39.408L33.325 32.06a.68.68 0 01-.813-.254l-2.733-4.114 15.786-6.082 2.257 3.853a.668.668 0 01.056.562z"
					fill="#000"
				/>
				<Path
					d="M28.113 43.937c-.463 0-.887-.303-1.036-.742-.148-.438.002-.94.37-1.22.35-.265.832-.296 1.214-.077a1.1 1.1 0 01.53 1.124 1.105 1.105 0 01-1.078.915z"
					fill="#000"
				/>
			</G>
			<Defs>
				<ClipPath id="prefix__clip0">
					<Path fill="#fff" d="M0 0h56v56H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default Export;
