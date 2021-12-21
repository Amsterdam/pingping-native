import {Dimensions, StyleSheet} from 'react-native';

import {ppBaseColors} from './colors';

export const commonStyles = StyleSheet.create({
	logoFont: {
		fontSize: 50,
		letterSpacing: 3,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: ppBaseColors.PP_WHITE,
		fontFamily: 'Heavitas',
	},
	subTitle: {
		fontSize: 40,
		letterSpacing: 5,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: ppBaseColors.PP_WHITE,
		fontFamily: 'Heavitas',
		marginTop: 30,
	},
	shadow: {
		shadowColor: ppBaseColors.PP_BLACK,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	textShadow: {
		textShadowColor: ppBaseColors.PP_BLACK,
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
	},
	buttonStyle: {
		width: Dimensions.get('window').width - 60,
		justifyContent: 'center',
		marginBottom: 5,
	},
	buttonLabel: {
		textAlign: 'center',
		fontSize: 14,
	},
	title: {
		fontFamily: 'Heavitas',
		textAlign: 'center',
		fontSize: 40,
	},
});

export const BORDER_RADIUS = 5;
