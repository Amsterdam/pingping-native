import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ListItemSeperator from './ListItemSeperator';

import theme from '../../../../config/theme';
import Title from '../../../typography/Title';

function NoResultListItem({ noResultChoice = {}, onSelectItem = () => {}, showBorder = false }) {
	return (
		<TouchableOpacity onPress={() => onSelectItem(noResultChoice)}>
			<View style={styles.container}>
				<Title variant="h6">{noResultChoice.label}</Title>
			</View>
			{showBorder && <ListItemSeperator />}
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
	textMatch: { color: theme.colors.primary, fontWeight: 'bold' },
});

NoResultListItem.propTypes = {
	onSelectItem: PropTypes.func.isRequired,
	showBorder: PropTypes.bool,
	noResultChoice: PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
	}).isRequired,
};

NoResultListItem.defaultProps = {
	showBorder: false,
};

export default NoResultListItem;
