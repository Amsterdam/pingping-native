import React from 'react';

import PropTypes from 'prop-types';
import {View, StyleSheet, StatusBar} from 'react-native';

import HeaderBackButton from './HeaderBackButton';

import theme from '../../config/theme';
import Title from '../typography/Title';

const FilledHeader = ({
	navigation = () => {},
	title = 'none',
	color = 'light',
}) => {
	return (
		<View style={styles.header}>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor={theme.colors.headerColor}
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

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.headerColor,
		minHeight: 56,
		position: 'relative',
	},
	headerTitle: {
		marginTop: theme.spacing.xxs,
		color: theme.colors.white,
	},
	backButton: {
		position: 'absolute',
		left: theme.spacing.xxs,
	},
});

FilledHeader.propTypes = {
	navigation: PropTypes.object.isRequired,
	title: PropTypes.string,
	color: PropTypes.string,
};
FilledHeader.defaultProps = {
	title: '',
	color: 'light',
};

export default FilledHeader;
