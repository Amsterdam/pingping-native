import React from 'react';

import PropTypes from 'prop-types';
import { View } from 'react-native';

const CardDisabledOverlay = ({
	disabledString = '',
}) => {
	return <View style={styles.disabledStyle} />;
};

const styles = {
	disabledStyle: {
		backgroundColor: 'rgba(255,255,255,0.7)',
		position: 'absolute',
		right: 0,
		left: 0,
		top: 0,
		bottom: 0,
		zIndex: 100,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
};

CardDisabledOverlay.propTypes = {
	disabledString: PropTypes.string.isRequired,
};

export default CardDisabledOverlay;
