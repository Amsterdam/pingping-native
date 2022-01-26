/* eslint-disable react/jsx-no-useless-fragment */
import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';

import ListItemSeperator from './ListItemSeperator';
import ScrollViewListItem from './ScrollViewListItem';

function RenderItem({ choice = {}, onSelectItem = () => {}, searchText = '', showBorder = false }) {
	let titleHighlighted = '';
	let titleStart = choice.label;
	let titleEnd = '';
	const substrIndex = choice.label.toLowerCase().indexOf(searchText.toLowerCase());
	if (substrIndex !== -1) {
		titleStart = choice.label.slice(0, substrIndex);
		titleHighlighted = choice.label.slice(substrIndex, substrIndex + searchText.length);
		titleEnd = choice.label.slice(substrIndex + searchText.length);
		return (
			<View key={choice.value}>
				<ScrollViewListItem
					titleStart={titleStart}
					titleHighlighted={titleHighlighted}
					titleEnd={titleEnd}
					onPress={() => onSelectItem(choice)}
				/>
				{showBorder && <ListItemSeperator />}
			</View>
		);
	}
	return null;
}

RenderItem.propTypes = {
	choice: PropTypes.shape({
		value: PropTypes.string,
		label: PropTypes.string,
	}).isRequired,
	searchText: PropTypes.string.isRequired,
	onSelectItem: PropTypes.func.isRequired,
	showBorder: PropTypes.bool.isRequired,
};

export default memo(RenderItem);
