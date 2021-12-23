import React from 'react';

import {Box} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, View} from 'react-native';

import {appColors} from '../../config/colors';
import Title from '../typography/Title';

const QuestionScreenHeader = ({title, left, right, color = 'light'}) => {
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
		marginHorizontal: 10,
	},
	left: {
		position: 'absolute',
		left: 0,
	},
	right: {
		position: 'absolute',
		right: 0,
	},
});

QuestionScreenHeader.propTypes = {
	currentTask: PropTypes.object.isRequired,
	doRevertTask: PropTypes.func.isRequired,
	title: PropTypes.string,
	left: PropTypes.element,
	right: PropTypes.element,
	color: PropTypes.string,
};

export default QuestionScreenHeader;
