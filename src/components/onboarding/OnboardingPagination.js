/* eslint-disable react/no-array-index-key */
import React from 'react';

import PropTypes from 'prop-types';
import { Animated, StyleSheet, View } from 'react-native';

import theme from '../../config/theme';

const DOT_SIZE = 10;
const MARGIN = 20;

function Pagination({ scrollOffsetAnimatedValue, positionAnimatedValue, pages }) {
	const inputRange = [0, pages.length];
	const translateX = Animated.add(scrollOffsetAnimatedValue, positionAnimatedValue).interpolate({
		inputRange,
		outputRange: [0, pages.length * (DOT_SIZE + MARGIN)],
	});

	return (
		<View style={styles.container}>
			<View style={styles.pagination}>
				<Animated.View
					style={[
						styles.paginationIndicator,
						{
							transform: [{ translateX }],
						},
					]}
				/>
				{pages.map((item, index) => (
					<View key={index} style={styles.paginationDotContainer}>
						<View style={[styles.paginationDot, { backgroundColor: item.color }]} />
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: MARGIN,
		marginBottom: MARGIN,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 50,
	},
	pagination: {
		flexDirection: 'row',
		height: DOT_SIZE,
	},
	paginationDot: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE,
		borderColor: theme.colors.gray,
		borderWidth: 2,
	},
	paginationDotContainer: {
		width: DOT_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: MARGIN,
	},
	paginationIndicator: {
		position: 'absolute',
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE,
		backgroundColor: theme.colors.primary,
		borderColor: theme.colors.primary,
		borderWidth: 2,
		zIndex: 1,
	},
});

Pagination.propTypes = {
	pages: PropTypes.array.isRequired,
	scrollOffsetAnimatedValue: PropTypes.object.isRequired,
	positionAnimatedValue: PropTypes.object.isRequired,
};

export default Pagination;
