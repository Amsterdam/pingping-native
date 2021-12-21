import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	Modal,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import WebView from 'react-native-webview';

import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const WebViewModal = ({closeModal, urlToVisit, webViewOpen}) => {
	const [loading, setLoading] = useState(false);

	const handleWebViewNavigationStateChange = newNavState => {
		setLoading(newNavState.loading);
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={webViewOpen}
			statusBarTranslucent
			onRequestClose={closeModal}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TouchableOpacity onPress={closeModal} style={styles.closeButton}>
						<Title style={styles.buttonLabel}>SLUITEN</Title>
					</TouchableOpacity>
					<View style={styles.webView}>
						<WebView
							source={{uri: urlToVisit}}
							onNavigationStateChange={handleWebViewNavigationStateChange}
						/>
						{loading && (
							<ActivityIndicator
								color={appColors.primary}
								style={styles.activivityIndicator}
							/>
						)}
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: appColors.modalBackground,
	},
	modalView: {
		marginTop: 75,
		flex: 1,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		backgroundColor: appColors.background,
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
		backgroundColor: appColors.primary,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
	},
	webView: {
		flex: 1,
		padding: 5,
	},
	buttonLabel: {
		marginTop: 10,
		color: ppBaseColors.PP_WHITE,
	},
});

WebViewModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	urlToVisit: PropTypes.string.isRequired,
	webViewOpen: PropTypes.bool.isRequired,
};

export default WebViewModal;
