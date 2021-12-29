import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { commonStyles } from '../../config/commonStyles';
import theme from '../../config/theme';

const CardSkeleton = ({ withTitle = true }) => (
	<SkeletonPlaceholder>
		{withTitle ? (
			<View style={styles.title} />
		) : (
			<></>
		)}
		<View
			style={[styles.paper, styles.paperShadow]}
		>
			<View>
				<View style={styles.image} />
				<View style={styles.container}>
					<View style={styles.text} />
					<View style={styles.subText} />
					<View style={styles.shortText} />
					<View style={styles.progress} />
				</View>
			</View>
		</View>
	</SkeletonPlaceholder>
);

const styles = StyleSheet.create({
	title: {
		marginVertical: theme.spacing.xs,
		width: '90%',
		height: 30,
		borderRadius: 4,
	},
	image: { width: '100%', height: 125 },
	container: {
		marginTop: theme.spacing.m,
		padding: theme.spacing.m,
	},
	text: {
		width: '90%',
		height: 20,
		borderRadius: 4,
	},
	subText: {
		width: '80%',
		height: 20,
		marginTop: 6,
		borderRadius: 4,
	},
	shortText: {
		marginTop: 6,
		width: 80,
		height: 20,
		borderRadius: 4,
	},
	progress: {
		marginTop: 6,
		width: 50,
		height: 10,
		borderRadius: 4,
		alignSelf: 'flex-end',
	},
	paper: {
		backgroundColor: theme.colors.background,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadius,
		marginVertical: theme.spacing.xs,
	},
	paperShadow: {
		...commonStyles.shadow,
	},
});

CardSkeleton.propTypes = {
	withTitle: PropTypes.bool,
};
CardSkeleton.defaultProps = {
	withTitle: true,
};

export default CardSkeleton;
