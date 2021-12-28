import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import routes from '../../App/stacks/routes';
import LightBulb from '../../assets/svg/icons/LightBulb';
import theme from '../../config/theme';
import Title from '../typography/Title';

const TipsChip = ({navigation, tips}) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigation.navigate(routes.routeStack.tipScreen, {
					tips,
				})
			}>
			<LightBulb />
			<Title style={styles.title} variant="h5">
				Tips
			</Title>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 5,
		zIndex: 10,
	},
	title: {
		color: theme.colors.white,
		marginTop: 5,
		marginLeft: 5,
	},
});

TipsChip.propTypes = {
	navigation: PropTypes.object.isRequired,
	tips: PropTypes.array.isRequired,
};

export default TipsChip;
