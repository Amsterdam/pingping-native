/* eslint-disable react/jsx-no-useless-fragment */
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';

import ListItemSeperator from './ListItemSeperator';
import ScrollViewListItem from './ScrollViewListItem';

function RenderItem({
	label = '',
	value = '',
	onSelectItem = () => {},
	searchText = '',
	showBorder = false,
}) {
	let titleHighlighted = '';
	let titleStart = value;
	let titleEnd = '';
	const substrIndex = label.toLowerCase().indexOf(searchText.toLowerCase());
	if (substrIndex !== -1) {
		titleStart = label.slice(0, substrIndex);
		titleHighlighted = label.slice(substrIndex, substrIndex + searchText.length);
		titleEnd = label.slice(substrIndex + searchText.length);
		return (
			<View key={value}>
				<ScrollViewListItem
					titleStart={titleStart}
					titleHighlighted={titleHighlighted}
					titleEnd={titleEnd}
					onPress={() => onSelectItem(value)}
				/>
				{showBorder && <ListItemSeperator />}
			</View>
		);
	}
	return null;
}

RenderItem.propTypes = {
	label: PropTypes.string.isRequired,
	searchText: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onSelectItem: PropTypes.func.isRequired,
	showBorder: PropTypes.bool.isRequired,
};

export default memo(RenderItem);
