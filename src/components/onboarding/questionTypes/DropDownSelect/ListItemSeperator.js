import React from 'react';

import { View, StyleSheet } from 'react-native';

import theme from '../../../../config/theme';

function ListItemSeperator() {
	return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
	seperator: {
		height: 2,
		width: '100%',
		backgroundColor: theme.colors.greyedOut,
		borderRadius: theme.borderRadius,
	},
});
export default ListItemSeperator;
