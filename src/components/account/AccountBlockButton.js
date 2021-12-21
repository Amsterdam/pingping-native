import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const AccountBlockButton = ({button, navigation}) => {
	return (
		<TouchableOpacity
			testID={button.testID}
			style={styles.accountMainButton}
			onPress={() => navigation.navigate(button.route)}>
			{button.image}
			<Title variant="h6" align="center">
				{button.title}
			</Title>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	accountMainButton: {
		backgroundColor: appColors.background,
		borderRadius: 10,
		width: '45%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		shadowColor: ppBaseColors.PP_BLACK,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
	},
});

AccountBlockButton.propTypes = {
	button: PropTypes.object.isRequired,
	navigation: PropTypes.object.isRequired,
};

export default AccountBlockButton;
