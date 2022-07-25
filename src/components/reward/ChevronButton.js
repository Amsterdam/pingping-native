import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ChevronRightIcon from '../../assets/svg/icons/ChevronRightIcon';
import Body from '../typography/Body';

function ChevronButton({ onPress = () => {} }) {
	return (
		<TouchableOpacity style={styles.rowFlex} onPress={onPress}>
			<Body variant="b4">Alles</Body>
			<ChevronRightIcon />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	rowFlex: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

ChevronButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};

export default ChevronButton;
