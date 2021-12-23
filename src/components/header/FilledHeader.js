import React from 'react';

import {StatusBar} from 'native-base';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import HeaderBackButton from './HeaderBackButton';

import {appColors} from '../../config/colors';
import Title from '../typography/Title';

const FilledHeader = ({
	navigation = () => {},
	title = 'none',
	color = 'light',
}) => {
	return (
		<View style={[styles.header, styles.filledHeader]}>
			<StatusBar barStyle={'light-content'} />
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
		minHeight: 56,
	},
	headerTitle: {
		marginTop: 5,
		color: appColors.white,
	},
	filledHeader: {
		backgroundColor: appColors.headerColor,
	},
	backButton: {
		position: 'absolute',
		left: 0,
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
