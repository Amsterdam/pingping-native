import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	Modal,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import WebView from 'react-native-webview';

import theme from '../../config/theme';
import Title from '../typography/Title';

function WebViewModal({
	closeModal,
	urlToVisit,
	webViewOpen,
}) {
	const [loading, setLoading] = useState(false);

	const handleWebViewNavigationStateChange = newNavState => {
		setLoading(newNavState.loading);
	};

	return (
		<Modal
			animationType="slide"
			transparent
			visible={webViewOpen}
			statusBarTranslucent
			onRequestClose={closeModal}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TouchableOpacity
						onPress={closeModal}
						style={styles.closeButton}
					>
						<Title style={styles.buttonLabel}>
							SLUITEN
						</Title>
					</TouchableOpacity>
					<View style={styles.webView}>
						<WebView
							source={{ uri: urlToVisit }}
							onNavigationStateChange={
								handleWebViewNavigationStateChange
							}
						/>
						{loading && (
							<ActivityIndicator
								color={theme.colors.primary}
								style={styles.activivityIndicator}
							/>
						)}
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: theme.colors.modalBackground,
	},
	modalView: {
		marginTop: theme.spacing.multiplier(15),
		flex: 1,
		borderTopLeftRadius: theme.spacing.xxl,
		borderTopRightRadius: theme.spacing.xxl,
		backgroundColor: theme.colors.background,
	},
	activivityIndicator: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	closeButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.primary,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
	},
	webView: {
		flex: 1,
		padding: theme.spacing.xxs,
	},
	buttonLabel: {
		marginTop: theme.spacing.xs,
		color: theme.colors.white,
	},
});

WebViewModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	urlToVisit: PropTypes.string.isRequired,
	webViewOpen: PropTypes.bool.isRequired,
};

export default WebViewModal;
