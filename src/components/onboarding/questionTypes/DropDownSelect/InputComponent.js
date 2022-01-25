import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from 'native-base';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';

import ScrollViewListItem from './ScrollViewListItem';

import theme from '../../../../config/theme';
import Body from '../../../typography/Body';

function InputComponent({ choices, placeholder, noResultLabel, selectedItem, setSelectedItem }) {
	const inputRef = useRef(null);
	const [isOpened, setIsOpened] = useState(false);
	const [searchText, setSearchText] = useState('');

	const toggle = useCallback(() => {
		setIsOpened(!isOpened);
	}, [isOpened]);

	const onSelectItem = useCallback(
		(item) => {
			setSelectedItem(item);
			setIsOpened(false);
			setSearchText(item);
			inputRef.current.blur();
		},
		[setSelectedItem]
	);

	const onChangeText = useCallback((text) => {
		setSearchText(text);
	}, []);

	const onClearPress = useCallback(() => {
		setSearchText('');
		setSelectedItem(null);
		setIsOpened(false);
		inputRef.current.blur();
	}, [setSelectedItem]);

	useEffect(() => {
		if (selectedItem) {
			setSearchText(selectedItem ?? '');
		} else {
			setSearchText('');
		}
	}, [selectedItem]);

	const renderItem = useCallback(
		(key, value) => {
			let titleHighlighted = '';
			let titleStart = value;
			let titleEnd = '';
			const substrIndex = value.toLowerCase().indexOf(searchText.toLowerCase());
			if (substrIndex !== -1) {
				titleStart = value.slice(0, substrIndex);
				titleHighlighted = value.slice(substrIndex, substrIndex + searchText.length);
				titleEnd = value.slice(substrIndex + searchText.length);
				return (
					<ScrollViewListItem
						titleStart={titleStart}
						titleHighlighted={titleHighlighted}
						titleEnd={titleEnd}
						onPress={() => onSelectItem(key)}
					/>
				);
			}
			return null;
		},
		[searchText, onSelectItem]
	);

	const scrollContent = useMemo(() => {
		const dataSet = Object.entries(choices);
		if (!Array.isArray(dataSet)) {
			return null;
		}
		const content = [];
		const itemsCount = choices.length - 1;
		dataSet.forEach(([key, value], i) => {
			const listItem = renderItem(key, value);
			if (listItem) {
				content.push(
					<View key={key}>
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
	}, [choices, renderItem]);

	const onSubmit = () => {
		inputRef.current.blur();
	};

	return (
		<View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput
					ref={inputRef}
					value={searchText}
					onChangeText={onChangeText}
					placeholderTextColor="#d0d4dc"
					placeholder={placeholder}
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
						keyboardShouldPersistTaps="handled"
						nestedScrollEnabled
						contentContainerStyle={{ padding: theme.spacing.xxs }}
					>
						<View>
							{scrollContent.length > 0
								? scrollContent
								: !!searchText && <Body variant="b4">{noResultLabel}</Body>}
						</View>
					</ScrollView>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { width: '100%' },
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
	choices: PropTypes.object.isRequired,
	placeholder: PropTypes.string,
	noResultLabel: PropTypes.string,
	setSelectedItem: PropTypes.func.isRequired,
	selectedItem: PropTypes.string,
};

InputComponent.defaultProps = {
	placeholder: 'Selecteer of type',
	noResultLabel: 'Mijn optie staat er niet bij',
	selectedItem: '',
};

export default InputComponent;
