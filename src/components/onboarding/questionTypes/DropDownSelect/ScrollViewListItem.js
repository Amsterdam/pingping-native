import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import theme from '../../../../config/theme';
import Title from '../../../typography/Title';

function ScrollViewListItem({
	titleHighlighted = '',
	titleStart = '',
	titleEnd = '',
	onPress = () => {},
}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Title variant="h6">
					<Title numberOfLines={1} style={styles.text} variant="h6">
						{titleStart}
					</Title>
					<Title numberOfLines={1} style={styles.textMatch} variant="h6">
						{titleHighlighted}
					</Title>
					<Title numberOfLines={1} style={styles.text} variant="h6">
						{titleEnd}
					</Title>
				</Title>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: theme.spacing.xs,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexWrap: 'nowrap',
		width: '100%',
	},
	text: { color: theme.colors.black },
	textMatch: { color: theme.colors.primary },
});

ScrollViewListItem.propTypes = {
	titleHighlighted: PropTypes.string,
	titleStart: PropTypes.string,
	titleEnd: PropTypes.string,
	onPress: PropTypes.func.isRequired,
};
ScrollViewListItem.defaultProps = {
	titleHighlighted: '',
	titleStart: '',
	titleEnd: '',
};

export default ScrollViewListItem;
