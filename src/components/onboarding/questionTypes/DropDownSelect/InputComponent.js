import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from 'native-base';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';

import ScrollViewListItem from './ScrollViewListItem';

import theme from '../../../../config/theme';
import Body from '../../../typography/Body';

function InputComponent({ dataSet = [] }) {
	const inputRef = useRef(null);
	const [isOpened, setIsOpened] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [selectedItem, setSelectedItem] = useState(null);

	const toggle = useCallback(() => {
		setIsOpened(!isOpened);
	}, [isOpened]);

	const onSelectItem = useCallback((item) => {
		setSelectedItem(item);
		inputRef.current.blur();
		setIsOpened(false);
	}, []);

	const onChangeText = useCallback((text) => {
		setSearchText(text);
	}, []);

	const onClearPress = useCallback(() => {
		setSearchText('');
		setSelectedItem(null);
		setIsOpened(false);
		inputRef.current.blur();
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
					<View key={item}>
						{listItem}
						{i < itemsCount && (
							<View
								style={{
									height: 2,
									width: '100%',
									backgroundColor: theme.colors.greyedOut,
									borderRadius: theme.borderRadius,
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
		<View style={{ width: '100%' }}>
			<View style={styles.searchSection}>
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
				<TouchableOpacity style={styles.clearButton} onPress={onClearPress}>
					{!!searchText && <CloseIcon size="3" />}
				</TouchableOpacity>
				<TouchableOpacity style={styles.chevronButton} onPress={toggle}>
					{isOpened ? <ChevronUpIcon size="7" /> : <ChevronDownIcon size="7" />}
				</TouchableOpacity>
			</View>
			{isOpened && (
				<View style={styles.listContainer}>
					<ScrollView
						keyboardDismissMode="on-drag"
						keyboardShouldPersistTaps="handled"
						nestedScrollEnabled
						contentContainerStyle={{ padding: theme.spacing.xxs }}
					>
						<View>
							{scrollContent.length > 0
								? scrollContent
								: !!searchText && <Body variant="b4">No results found</Body>}
						</View>
					</ScrollView>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		maxWidth: '70%',
		minWidth: '70%',
		textAlign: 'left',
		fontFamily: 'Heavitas',
		fontSize: 18,
		marginLeft: theme.spacing.xs,
	},

	listContainer: {
		maxHeight: 100,
		backgroundColor: '#fff',
		marginTop: 10,
		width: '100%',
	},
	searchSection: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderColor: '#d0d4dc',
		borderWidth: 1,
		borderRadius: 5,
		minHeight: 60,
	},
	chevronButton: {
		position: 'absolute',
		right: 5,
	},
	clearButton: {
		position: 'absolute',
		right: 45,
	},
});

InputComponent.propTypes = {
	dataSet: PropTypes.array.isRequired,
};

export default InputComponent;
