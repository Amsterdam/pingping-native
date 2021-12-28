import React from 'react';

import {Box} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';

import {appColors} from '../../config/colors';
import Title from '../typography/Title';

const Header = ({title = '', left, right, color = 'light'}) => {
	return (
		<Box safeAreaTop>
			<View style={styles.header}>
				<StatusBar
					barStyle={color === 'light' ? 'dark-content' : 'light-content'}
					backgroundColor={appColors.background}
				/>
				<View style={styles.left}>{left}</View>

				<Title
					style={[
						color === 'light' && {color: appColors.primary},
						color === 'dark' && {color: appColors.white},
					]}
					variant="h6"
					align="center">
					{title}
				</Title>

				<View style={styles.right}>{right}</View>
			</View>
		</Box>
	);
};

const styles = StyleSheet.create({
	header: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	left: {
		position: 'absolute',
		left: 5,
	},
	right: {
		position: 'absolute',
		right: 5,
	},
});

Header.propTypes = {
	title: PropTypes.string,
	left: PropTypes.element,
	right: PropTypes.element,
	color: PropTypes.string,
};

export default Header;
