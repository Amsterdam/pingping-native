import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from 'native-base';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';

import NoResultListItem from './NoResultListItem';
import RenderItem from './RenderItem';

import theme from '../../../../config/theme';

function InputComponent({
	choices,
	placeholder,
	noResultChoice,
	selectedItem,
	setSelectedItem,
	isOpened,
	setIsOpened,
	scrollToBottom,
}) {
	const inputRef = useRef(null);
	const [searchText, setSearchText] = useState('');
	const dataSet = Object.entries(choices);
	const toggle = useCallback(() => {
		setIsOpened(!isOpened);
	}, [isOpened, setIsOpened]);

	const onSelectItem = useCallback(
		(choice) => {
			setSelectedItem(choice);
			setIsOpened(false);
			setSearchText(choice.label);
			inputRef.current.blur();
		},
		[setSelectedItem, setIsOpened]
	);

	const onChangeText = useCallback((text) => {
		setSearchText(text);
	}, []);

	const onClearPress = useCallback(() => {
		setSearchText('');
		setSelectedItem({ value: '', label: '' });
		setIsOpened(false);
		inputRef.current.blur();
	}, [setSelectedItem, setIsOpened]);

	useEffect(() => {
		if (selectedItem) {
			setSearchText(selectedItem.label ?? '');
		} else {
			setSearchText('');
		}
	}, [selectedItem]);

	const scrollContent = useMemo(() => {
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
	}, [searchText, onSelectItem, dataSet]);

	const onSubmit = () => {
		inputRef.current.blur();
	};

	const onBlur = () => {
		setIsOpened(false);
		if (searchText) {
			const found = dataSet.find(([, label]) => label === searchText);
			if (found) {
				setSelectedItem({ value: found[0], label: found[1] });
			}
		}
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
					onFocus={() => {
						setIsOpened(true);
						setTimeout(() => {
							scrollToBottom();
						}, 300);
					}}
					onBlur={onBlur}
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
		height: 60,
		maxWidth: '70%',
		minWidth: '70%',
		textAlign: 'left',
		fontFamily: 'Heavitas',
		fontSize: 16,
		marginLeft: theme.spacing.xs,
	},

	listContainer: {
		maxHeight: 125,
		minHeight: 100,
		backgroundColor: '#fff',

		borderWidth: 1,
		borderColor: theme.colors.black,
		padding: theme.spacing.xxs,
		width: '100%',
	},
	searchSection: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderColor: theme.colors.black,
		borderWidth: 1,
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
	isOpened: PropTypes.bool.isRequired,
	setIsOpened: PropTypes.func.isRequired,
	scrollToBottom: PropTypes.func.isRequired,
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
