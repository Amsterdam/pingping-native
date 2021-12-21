import React from 'react';

import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import routes from '../../App/stacks/routes';
import {appColors, ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';
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
			<Icon name="lightbulb-o" type="FontAwesome" style={styles.icon} />
			<Title style={styles.title} variant="h5">
				Tips
			</Title>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: appColors.primary,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 5,
		zIndex: 10,
	},
	title: {
		color: ppBaseColors.PP_WHITE,
		marginTop: 5,
		marginLeft: 5,
	},
	icon: {
		color: ppBaseColors.PP_WHITE,
		fontSize: normalizeValue(18),
	},
});

TipsChip.propTypes = {
	navigation: PropTypes.object.isRequired,
	tips: PropTypes.array.isRequired,
};

export default TipsChip;
