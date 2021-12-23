import React from 'react';

import {Box} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, StatusBar} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const SimpleHeader = ({title = '', color = 'primary', style = {}}) => {
	return (
		<Box safeAreaTop style={[styles.header, style]}>
			<StatusBar
				barStyle={color === 'primary' ? 'light-content' : 'dark-content'}
			/>

			<Title
				style={[
					color === 'primary' && styles.titleWhite,
					color === 'white' && styles.titlePrimary,
				]}
				variant="h6">
				{title}
			</Title>
		</Box>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: appColors.white,
	},
	titlePrimary: {
		color: appColors.primary,
	},
	titleWhite: {
		color: ppBaseColors.PP_WHITE,
	},
});

SimpleHeader.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	style: PropTypes.object,
};

SimpleHeader.defaultProps = {
	title: '',
	color: 'primary',
	style: {},
};

export default SimpleHeader;
