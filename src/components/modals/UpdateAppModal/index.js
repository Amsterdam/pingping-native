import React, { useEffect, useState } from 'react';

import { Platform, Linking } from 'react-native';
import checkVersion from 'react-native-store-version';

import Modal from './Modal';

import { version } from '../../../../package.json';
import { ASYNC_STORAGE_KEYS } from '../../../config/constants';
import { getFromAsyncStorage, setAsyncStorage } from '../../../helpers/asyncStorageHelpers';
import sentryHelper from '../../../helpers/sentryHelper';

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
						ASYNC_STORAGE_KEYS.dismissedUpdate
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

	return <Modal open={open} openAppStore={openAppStore} closeModal={closeModal} />;
}

export default UpdateAppModal;
