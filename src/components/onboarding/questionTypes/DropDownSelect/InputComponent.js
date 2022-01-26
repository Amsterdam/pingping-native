import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from 'native-base';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';

import NoResultListItem from './NoResultListItem';
import RenderItem from './RenderItem';

import theme from '../../../../config/theme';

function InputComponent({ choices, placeholder, noResultChoice, selectedItem, setSelectedItem }) {
	const inputRef = useRef(null);
	const [isOpened, setIsOpened] = useState(false);
	const [searchText, setSearchText] = useState('');

	const toggle = useCallback(() => {
		setIsOpened(!isOpened);
	}, [isOpened]);

	const onSelectItem = useCallback(
		(choice) => {
			setSelectedItem(choice);
			setIsOpened(false);
			setSearchText(choice.label);
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
			setSearchText(selectedItem.label ?? '');
		} else {
			setSearchText('');
		}
	}, [selectedItem]);

	const scrollContent = useMemo(() => {
		const dataSet = Object.entries(choices);
		if (!Array.isArray(dataSet)) {
			return null;
		}
		const content = [];
		const itemsCount = dataSet.length - 1;
		dataSet.forEach(([value, label], i) => {
			const isSubString = label.toLowerCase().includes(searchText.toLowerCase());
			if (isSubString) {
				content.push(
					<RenderItem
						key={value}
						choice={{ value, label }}
						searchText={searchText}
						onSelectItem={onSelectItem}
						showBorder={i < itemsCount}
					/>
				);
			}
		});
		return content;
	}, [choices, searchText, onSelectItem]);

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
							{!searchText && (
								<NoResultListItem
									noResultChoice={noResultChoice}
									onSelectItem={onSelectItem}
									showBorder
								/>
							)}
							{scrollContent.length > 0
								? scrollContent
								: !!searchText && (
										<NoResultListItem
											noResultChoice={noResultChoice}
											onSelectItem={onSelectItem}
										/>
								  )}
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
		fontSize: 16,
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
	noResultChoice: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	}),
	setSelectedItem: PropTypes.func.isRequired,
	selectedItem: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	}),
};

InputComponent.defaultProps = {
	placeholder: 'Selecteer of type',
	noResultChoice: {
		label: 'Mijn optie staat er niet bij',
		value: 'no',
	},
	selectedItem: '',
};

export default InputComponent;
