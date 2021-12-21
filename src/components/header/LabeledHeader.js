import React from 'react';

import {Header, Left, Right} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet} from 'react-native';

import HeaderBackButton from './HeaderBackButton';

import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const LabeledHeader = ({
	navigation = () => {},
	filledHeader = false,
	title = 'none',
}) => {
	const styles = StyleSheet.create({
		header: {
			alignItems: 'center',
			justifyContent: 'center',
		},
		headerTitle: {
			marginTop: 5,
			color: filledHeader ? ppBaseColors.PP_WHITE : appColors.primary,
		},
		filledHeader: {
			backgroundColor: appColors.headerColor,
		},
		flex: {
			flex: 1,
		},
	});

	return (
		<Header
			style={[styles.header, filledHeader && styles.filledHeader]}
			transparent
			noShadow>
			<StatusBar
				barStyle={filledHeader ? 'light-content' : 'dark-content'}
				backgroundColor={appColors.headerColor}
			/>
			<Left style={styles.flex}>
				<HeaderBackButton
					color={filledHeader ? 'black' : 'white'}
					navigation={navigation}
				/>
			</Left>
			<Title style={styles.headerTitle} variant="h6">
				{title}
			</Title>
			<Right style={styles.flex} />
		</Header>
	);
};

LabeledHeader.propTypes = {
	navigation: PropTypes.object.isRequired,
	filledHeader: PropTypes.bool,
	title: PropTypes.string,
};
LabeledHeader.defaultProps = {
	filledHeader: false,
	title: '',
};

export default LabeledHeader;
