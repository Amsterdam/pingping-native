import { Dimensions, StyleSheet } from 'react-native';

import theme from './theme';

const commonStyles = StyleSheet.create({
	logoFont: {
		fontSize: 50,
		letterSpacing: 3,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: theme.colors.white,
		fontFamily: 'Heavitas',
	},
	subTitle: {
		fontSize: 40,
		letterSpacing: 5,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: theme.colors.white,
		fontFamily: 'Heavitas',
		marginTop: theme.spacing.xl,
	},
	shadow: {
		shadowColor: theme.colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	textShadow: {
		textShadowColor: theme.colors.black,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	buttonStyle: {
		width: Dimensions.get('window').width - 60,
		justifyContent: 'center',
		marginBottom: theme.spacing.xxs,
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
	iconButton: {
		backgroundColor: theme.colors.headerColor,
		borderRadius: 50,
	},
});

export default commonStyles;
