import React from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import theme from '../../config/theme';

const screenHeight = Dimensions.get('window').height;

const RouteDetailSkeleton = () => (
	<SkeletonPlaceholder>
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.backButton} />
				<View style={styles.headerTitle} />
				<View style={styles.progressBar} />
			</View>

			<View>
				<View style={styles.title} />
				<View style={styles.subTitle} />
			</View>

			<View>
				<View style={styles.button} />
				<View style={styles.button} />
			</View>

			<View>
				<View style={styles.nextButton} />
			</View>
		</View>
	</SkeletonPlaceholder>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: screenHeight,
		padding: 20,
	},
	row: {
		marginTop: 25,
		marginBottom: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	backButton: {
		width: 30,
		height: 30,
		borderRadius: 10,
		marginTop: 10,
	},
	headerTitle: {width: 100, height: 20, borderRadius: 10, marginTop: 10},
	progressBar: {width: 70, height: 20, borderRadius: 10, marginTop: 10},
	title: {width: '100%', height: 40, borderRadius: 10, marginTop: 10},
	subTitle: {width: '80%', height: 40, marginTop: 6, borderRadius: 10},
	button: {
		marginTop: 6,
		width: '100%',
		height: 50,
		borderRadius: theme.borderRadius,
	},
	nextButton: {
		marginTop: 6,
		width: 100,
		height: 25,
		borderRadius: 6,
		alignSelf: 'flex-end',
	},
});
export default RouteDetailSkeleton;
