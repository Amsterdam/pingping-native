import React, { useEffect, useState } from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

import theme from '../../config/theme';
import Body from '../typography/Body';

function Loading() {
	const [loading, setLoading] = useState(false);
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setLoading(true);
		}, 250);
		const timer2 = setTimeout(() => {
			setShowText(true);
		}, 3000);
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, []);

	if (!loading) {
		return false;
	}
	return (
		<View style={styles.acitivityContainer}>
			<ActivityIndicator size="large" color={theme.colors.primary} />
			{showText && (
				<>
					<Body variant="b3">Het laden duurt langer dan normaal</Body>
					<Body variant="b3">Nog even wachten</Body>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	acitivityContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.white,
		opacity: 0.8,
	},
});

export default Loading;
