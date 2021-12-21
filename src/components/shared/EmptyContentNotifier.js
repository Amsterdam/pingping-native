import React from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import {appColors} from '../../config/colors';
import Body from '../typography/Body';

const EmptyContentNotifier = ({text}) => {
	return (
		<View style={styles.container}>
			<Body variant="b3" style={styles.text}>
				{text}
			</Body>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: appColors.background,
		padding: 20,
		borderRadius: 5,
	},
});

EmptyContentNotifier.propTypes = {
	text: PropTypes.string.isRequired,
};

export default EmptyContentNotifier;
