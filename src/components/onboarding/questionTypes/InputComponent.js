import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import PropTypes from 'prop-types';
import { TextInput, StyleSheet, ScrollView, View } from 'react-native';

import ScrollViewListItem from './ScrollViewListItem';

import theme from '../../../config/theme';
import Body from '../../typography/Body';

function InputComponent({ dataSet = [] }) {
	const inputRef = useRef(null);
	const [isOpened, setIsOpened] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [selectedItem, setSelectedItem] = useState(null);

	const onSelectItem = useCallback((item) => {
		setSelectedItem(item);
	}, []);

	const onChangeText = useCallback((text) => {
		setSearchText(text);
	}, []);

	useEffect(() => {
		if (selectedItem) {
			setSearchText(selectedItem ?? '');
		} else {
			setSearchText('');
		}
	}, [selectedItem]);

	const renderItem = useCallback(
		(item) => {
			let titleHighlighted = '';
			let titleStart = item;
			let titleEnd = '';
			const substrIndex = item.toLowerCase().indexOf(searchText.toLowerCase());
			if (substrIndex !== -1) {
				titleStart = item.slice(0, substrIndex);
				titleHighlighted = item.slice(substrIndex, substrIndex + searchText.length);
				titleEnd = item.slice(substrIndex + searchText.length);
				return (
					<ScrollViewListItem
						titleStart={titleStart}
						titleHighlighted={titleHighlighted}
						titleEnd={titleEnd}
						onPress={() => onSelectItem(item)}
					/>
				);
			}
			return null;
		},
		[searchText, onSelectItem]
	);

	const scrollContent = useMemo(() => {
		if (!Array.isArray(dataSet)) {
			return null;
		}

		const content = [];
		const itemsCount = dataSet.length - 1;
		dataSet.forEach((item, i) => {
			const listItem = renderItem(item);
			if (listItem) {
				content.push(
					<View key={item.id}>
						{listItem}
						{i < itemsCount && (
							<View
								style={{
									height: 2,
									width: '100%',
									backgroundColor: theme.colors.greyedOut,
								}}
							/>
						)}
					</View>
				);
			}
		});
		return content;
	}, [dataSet, renderItem]);

	const onSubmit = () => {
		inputRef.current.blur();
	};

	return (
		<View>
			<TextInput
				ref={inputRef}
				value={searchText}
				onChangeText={onChangeText}
				placeholderTextColor="#d0d4dc"
				placeholder="JOUW GEMEENTE"
				autoCorrect={false}
				onSubmitEditing={onSubmit}
				onFocus={() => setIsOpened(true)}
				onBlur={() => setIsOpened(false)}
				style={styles.input}
			/>
			{isOpened && (
				<ScrollView
					keyboardDismissMode="on-drag"
					keyboardShouldPersistTaps="handled"
					nestedScrollEnabled
				>
					<View>
						{scrollContent.length > 0
							? scrollContent
							: !!searchText && <Body>No results found</Body>}
					</View>
				</ScrollView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 60,
		borderColor: '#d0d4dc',
		borderWidth: 1,
		borderRadius: 5,
		textAlign: 'center',
		margin: theme.spacing.xs,
		fontFamily: 'Heavitas',
		fontSize: 18,
	},
});

InputComponent.propTypes = {
	dataSet: PropTypes.array.isRequired,
};

export default InputComponent;
