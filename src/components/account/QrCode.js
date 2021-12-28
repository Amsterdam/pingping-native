import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import theme from '../../config/theme';

const QrCode = ({exportToken = ''}) => {
	return (
		<View style={styles.qrCode}>
			{exportToken ? (
				<QRCode value={exportToken} size={200} />
			) : (
				<ActivityIndicator color={theme.colors.primary} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	qrCode: {
		borderWidth: 5,
		padding: theme.spacing.xs,
		borderRadius: 5,
		borderColor: theme.colors.primary,
	},
});

QrCode.propTypes = {
	exportToken: PropTypes.string,
};
QrCode.defaultprops = {
	exportToken: '',
};

export default memo(QrCode);
