import React, {useEffect, useState} from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import Body from '../typography/Body';

const Loading = () => {
	const [loading, setLoading] = useState(false);
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		var timer1 = setTimeout(() => {
			setLoading(true);
		}, 250);
		var timer2 = setTimeout(() => {
			setShowText(true);
		}, 3000);
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	if (!loading) {
		return <></>;
	}
	return (
		<View style={styles.acitivityContainer}>
			<ActivityIndicator size="large" color={appColors.primary} />
			{showText && (
				<React.Fragment>
					<Body variant="b3">Het laden duurt langer dan normaal</Body>
					<Body variant="b3">Nog even wachten</Body>
				</React.Fragment>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	acitivityContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: ppBaseColors.PP_WHITE,
		opacity: 0.8,
	},
});

export default Loading;
