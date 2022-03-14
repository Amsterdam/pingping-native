import React from 'react';

import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import confettiCelebration from '../../assets/lottieFiles/confetti-celebration.json';
import CityPingsCoin from '../../assets/svg/CityPingCoin';
import commonStyles from '../../config/commonStyles';
import theme from '../../config/theme';
import CitypingsChip from '../shared/CitypingsChip';
import Body from '../typography/Body';
import Title from '../typography/Title';

function LottieCelebration({ balance, pings }) {
	return (
		<>
			<View style={styles.headerContainer}>
				<Title style={styles.title} variant="h3" align="left">
					GOED BEZIG!
				</Title>
				<CitypingsChip value={balance} />
			</View>
			<View style={styles.paper}>
				<LottieView
					source={confettiCelebration}
					autoPlay
					loop
					resizeMode="cover"
					style={styles.lottieView}
				/>
				<Body variant="b3" align="center">
					Je hebt weer een aantal CityPings verdiend!
				</Body>
				<View style={styles.coinContainer}>
					<CityPingsCoin height={30} width={30} />
				</View>
				<Title>{pings}</Title>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	paper: {
		...commonStyles.shadow,
		backgroundColor: theme.colors.background,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadius,
		marginVertical: theme.spacing.m,
		padding: theme.spacing.s,
		alignItems: 'center',
	},
	lottieView: {
		margin: theme.spacing.xxs,
	},
	title: {
		color: theme.colors.white,
	},
	coinContainer: {
		marginVertical: theme.spacing.s,
	},
});

LottieCelebration.propTypes = {
	balance: PropTypes.number.isRequired,
	pings: PropTypes.number.isRequired,
};

export default LottieCelebration;
