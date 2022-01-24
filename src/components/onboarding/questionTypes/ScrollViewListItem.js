import React, { memo } from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';

import theme from '../../../config/theme';
import Body from '../../typography/Body';

function ScrollViewListItem({
	titleHighlighted,
	titleStart,
	titleEnd,
	onPress,
	numberOfLines = 1,
}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Body numberOfLines={numberOfLines} variant="b2">
					<Body numberOfLines={1} style={styles.text} variant="b2">
						{titleStart}
					</Body>
					<Body numberOfLines={1} style={styles.textMatch} variant="b2">
						{titleHighlighted}
					</Body>
					<Body numberOfLines={1} style={styles.text} variant="b2">
						{titleEnd}
					</Body>
				</Body>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexWrap: 'nowrap',
		width: '100%',
	},
	text: { color: theme.colors.greyedOut },
	textMatch: { color: theme.colors.text },
});

export default ScrollViewListItem;
