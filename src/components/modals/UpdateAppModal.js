import React, { useEffect, useState } from 'react';

import { CloseIcon, IconButton } from 'native-base';
import { Dimensions, Modal, StyleSheet, Platform, Linking, View } from 'react-native';
import checkVersion from 'react-native-store-version';

import { version } from '../../../package.json';
import UpdateSvg from '../../assets/svg/UpdateSvg';
import { asyncStorageKeys } from '../../config/constants';
import theme from '../../config/theme';
import { getFromAsyncStorage, setAsyncStorage } from '../../helpers/asyncStorageHelpers';
import sentryHelper from '../../helpers/sentryHelper';
import RoundedButton from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const screenWidth = Dimensions.get('window').width;

function UpdateAppModal() {
	const [open, setOpen] = useState(false);
	const [versionResult, setVersionResult] = useState(null);

	useEffect(() => {
		//  init() checks the current version of the app with the remote version of the app
		//  if the remote version is higher than the current version, the user is prompted to update.
		//  The user can also dismiss the prompt by clicking the close button on the top right of the modal.
		//  If the user dismisses the prompt, the modal will not be shown again. This is to prevent the user from
		//  being prompted to update the app everytime they open the app. We keep track of the version in AsyncStorage
		//  so that we can check if the user has dismissed the prompt or not. We register the local-version and the
		//  remote-version at the time of dismissing the prompt. Only if the app is updated again the user will be prompted again.
		const init = async () => {
			try {
				const check = await checkVersion({
					version,
					iosStoreURL: 'https://apps.apple.com/app/id1531867912',
					androidStoreURL:
						'https://play.google.com/store/apps/details?id=com.pingpingnative',
					country: 'nl',
				});

				setVersionResult(check);
				if (check.result === 'new') {
					const dismissedUpdate = await getFromAsyncStorage(
						asyncStorageKeys.dismissedUpdate
					);
					if (dismissedUpdate === `${check.local}-${check.remote}`) {
						return;
					}
					setOpen(true);
				}
			} catch (error) {
				sentryHelper(error.message);
			}
		};
		init();
	}, []);

	const closeModal = async () => {
		await setAsyncStorage(
			'@pingpingNative_dismissedUpdate',
			`${versionResult.local}-${versionResult.remote}`
		);
		setOpen(false);
	};

	const openAppStore = () => {
		const link =
			Platform.OS === 'ios'
				? 'itms-apps://apps.apple.com/nl/app/pingping/id1531867912?l=nl'
				: 'market://details?id=com.pingpingnative';
		Linking.canOpenURL(link).then(
			(supported) => {
				if (supported) {
					Linking.openURL(link);
				}
			},
			(error) => sentryHelper(error.message)
		);
	};

	return (
		<Modal animationType="fade" transparent visible={open} statusBarTranslucent>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<View style={styles.modalContainer}>
						<IconButton
							onPress={closeModal}
							style={styles.closeButton}
							icon={<CloseIcon style={styles.icon} size="4" />}
						/>
						<Title variant="h3" style={styles.title}>
							Hey! Er is een nieuwe versie
						</Title>
						<View style={styles.svgContainer}>
							<UpdateSvg width={91} height={94} />
						</View>
						<Body variant="b3" style={styles.body} align="center">
							Er is een nieuwe versie van de app beschikbaar. Druk op de knop
							hieronder om de update te starten.
						</Body>
						<RoundedButton label="Start update" full onPress={openAppStore} />
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
		alignItems: 'center',
		backgroundColor: theme.colors.modalBackground,
	},
	modalView: {
		width: screenWidth * 0.9,
		backgroundColor: theme.colors.white,
		borderRadius: 5,
		shadowColor: theme.colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	modalContainer: {
		paddingHorizontal: theme.spacing.xl,
		paddingVertical: theme.spacing.m,
		position: 'relative',
	},
	closeButton: {
		borderRadius: 50,
		position: 'absolute',
		right: 0,
	},
	svgContainer: {
		alignSelf: 'center',
	},
	icon: {
		color: theme.colors.black,
		margin: theme.spacing.xs,
	},
	title: {
		marginBottom: theme.spacing.l,
	},
	body: {
		marginVertical: theme.spacing.l,
	},
});

export default UpdateAppModal;
