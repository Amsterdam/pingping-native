const SPACING_UNIT = 5;

const theme = {
	colors: {
		primary: '#fb9f00',
		secondary: '#2dbcca',
		danger: '#f9454f',
		headerColor: '#0d2036',
		text: '#000',
		subText: '#000',
		black: '#000',
		accentColor: '#bfe9ee',
		bullet: '#99dce4',
		success: '#24ba10',
		white: '#fff',
		background: '#fff',
		greyedOut: '#b9b9b9',
		subtleGrey: '#e9e9e9',
		almostNotBlue: '#f7fbff',
		modalBackground: 'rgba(1,1,1,0.8)',
		taskRowBackground: 'rgba(191, 233, 238, 0.3)',
	},
	spacing: {
		multiplier: function spacing(multiplier = 1) {
			return SPACING_UNIT * multiplier;
		},
		xxs: SPACING_UNIT,
		xs: SPACING_UNIT * 2,
		s: SPACING_UNIT * 3,
		m: SPACING_UNIT * 4,
		l: SPACING_UNIT * 5,
		xl: SPACING_UNIT * 6,
		xxl: SPACING_UNIT * 7,
	},
	borderRadius: 10,
	screenFadeDurationInMs: 400,
};

export default theme;
