import React from 'react';

import { Box } from 'native-base';
import PropTypes from 'prop-types';
import {
	StatusBar,
	StyleSheet,
	View,
} from 'react-native';

import theme from '../../config/theme';
import Title from '../typography/Title';

const Header = ({
	title = '',
	left,
	right,
	color = 'light',
}) => {
	return (
		<Box>
			<View style={styles.header}>
				<StatusBar
					barStyle={
						color === 'light'
							? 'dark-content'
							: 'light-content'
					}
					backgroundColor={
						theme.colors.background
					}
				/>
				<View style={styles.left}>{left}</View>

				<Title
					style={[
						color === 'light' && {
							color: theme.colors.primary,
						},
						color === 'dark' && {
							color: theme.colors.white,
						},
					]}
					variant="h6"
					align="center"
				>
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
		marginHorizontal: theme.spacing.xs,
		marginTop: theme.spacing.s,
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
