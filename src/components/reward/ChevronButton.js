import React from 'react';

import {ChevronRightIcon} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Body from '../typography/Body';

const ChevronButton = ({onPress = () => {}}) => {
	return (
		<TouchableOpacity style={styles.rowFlex} onPress={onPress}>
			<Body variant="b4">Alles</Body>
			<ChevronRightIcon size="4" />
		</TouchableOpacity>
	);
};

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
