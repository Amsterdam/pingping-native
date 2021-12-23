import React from 'react';

import {StatusBar} from 'native-base';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import HeaderBackButton from './HeaderBackButton';

import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const LabeledHeader = ({
	navigation = () => {},
	filledHeader = false,
	title = 'none',
	color = 'light',
}) => {
	const styles = StyleSheet.create({
		header: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: 56,
		},
		headerTitle: {
			marginTop: 5,
			color: filledHeader ? ppBaseColors.PP_WHITE : appColors.primary,
		},
		filledHeader: {
			backgroundColor: appColors.headerColor,
		},
		backButton: {
			position: 'absolute',
			left: 0,
		},
	});

	return (
		<View style={[styles.header, filledHeader && styles.filledHeader]}>
			<StatusBar
				barStyle={color === 'light' ? 'light-content' : 'dark-content'}
			/>
			<View style={styles.backButton}>
				<HeaderBackButton
					onPressAction={() => navigation.goBack()}
					color={color}
				/>
			</View>

			<Title style={styles.headerTitle} variant="h6">
				{title}
			</Title>
		</View>
	);
};

LabeledHeader.propTypes = {
	navigation: PropTypes.object.isRequired,
	filledHeader: PropTypes.bool,
	title: PropTypes.string,
	color: PropTypes.string,
};
LabeledHeader.defaultProps = {
	filledHeader: false,
	title: '',
	color: 'light',
};

export default LabeledHeader;
