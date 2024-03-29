import React from 'react';

import {
	Dimensions,
	StyleSheet,
	View,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import theme from '../../config/theme';

const screenHeight = Dimensions.get('window')
	.height;
const screenWidth = Dimensions.get('window')
	.width;

function RouteDetailSkeleton() {
  return <View style={styles.container}>
		<SkeletonPlaceholder>
			<View style={styles.image} />
			<View style={styles.content}>
				<View style={styles.shortText} />
				<View style={styles.title} />
				<View style={styles.paragraphFull} />
				<View style={styles.paragraphFull} />
				<View style={styles.paragraphFull} />
				<View style={styles.paragraphHalf} />
				<View style={styles.row}>
					<View style={styles.steps} />
					<View style={styles.steps} />
				</View>
				<View style={styles.subTitle} />

				<View style={styles.task}>
					<View style={styles.circle} />
					<View style={styles.taskTitle} />
				</View>
				<View style={styles.task}>
					<View style={styles.circle} />
					<View style={styles.taskTitle} />
				</View>
				<View style={styles.task}>
					<View style={styles.circle} />
					<View style={styles.taskTitle} />
				</View>
				<View style={styles.task}>
					<View style={styles.circle} />
					<View style={styles.taskTitle} />
				</View>
			</View>
		</SkeletonPlaceholder>
	</View>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.background,
		flex: 1,
	},
	content: {
		padding: theme.spacing.m,
	},
	image: {
		width: '100%',
		height: screenHeight * 0.3,
	},
	shortText: {
		width: '30%',
		borderRadius: 4,
		height: 10,
	},
	title: {
		marginVertical: theme.spacing.s,
		width: '80%',
		borderRadius: 4,
		height: 40,
	},
	subTitle: {
		marginTop: theme.spacing.l,
		width: '40%',
		borderRadius: 4,
		height: 25,
	},
	paragraphFull: {
		marginVertical: 2,
		width: '100%',
		borderRadius: 4,
		height: 15,
	},
	paragraphHalf: {
		marginVertical: 2,
		width: '50%',
		borderRadius: 4,
		height: 15,
	},
	row: {
		marginTop: theme.spacing.l,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	task: {
		marginTop: theme.spacing.l,
		flexDirection: 'row',
		alignItems: 'center',
	},
	steps: {
		width: 120,
		height: 15,
		borderRadius: 4,
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 50,
		marginRight: 20,
	},
	taskTitle: {
		width: screenWidth - 100,
		height: 20,
	},
});
export default RouteDetailSkeleton;
