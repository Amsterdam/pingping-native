import React from 'react';

import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {appColors} from '../../config/colors';
import Title from '../typography/Title';

function TextButton({onPress, testID, label}) {
	return (
		<TouchableOpacity onPress={onPress} testID={testID}>
			<Title style={styles.buttonLabel} variant="h7">
				{label}
			</Title>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonLabel: {
		color: appColors.greyedOut,
		padding: 10,
	},
});

TextButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	testID: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default TextButton;
