import { useCallback, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { Platform } from 'react-native';
import { Notifications } from 'react-native-notifications';

import notificationHandler from './notificationHandler';

import REGISTER_NOTIFICATIONS_MUTATION from '../../apollo/Mutation/registerNotificationsMutation';
import sentryHelper from '../../helpers/sentryHelper';

const isIos = Platform.OS === 'ios';

/** The PushNotificationService initializes all listeners with regards to pushnotifications
 * initialnotifications (notifications that are received when the application is in a killed state) are handled
 * in the linking object of react-native-navigation
 */
function PushNotificationService() {
	const [registerNotifications] = useMutation(
		REGISTER_NOTIFICATIONS_MUTATION
	);

	useEffect(() => {
		Notifications.registerRemoteNotifications();
		Notifications.events().registerRemoteNotificationsRegistered(
			async (event) => {
				await registerClientToken(event.deviceToken);
			}
		);
		registerNotificationEvents();
		if (isIos) {
			Notifications.ios.setBadgeCount(0);
		}
	}, [registerNotificationEvents, registerClientToken]);

	const registerNotificationEvents = useCallback(async () => {
		/**
		 * Event listener for notifications that are received in the foreground - so when using the app
		 * @param {object} notification A notification object containing a payload including title, body and type
		 * For ios calling the completion handler is enough to display a notification when the app is foregrounded
		 * For android the notification must be handled in a custom toast component, the notification will be the first parameter.
		 */
		Notifications.events().registerNotificationReceivedForeground(
			(_, completion) => {
				completion({
					alert: true,
					sound: true,
					badge: false,
				});
			}
		);

		/**
		 * Event listener for notifications that are opened when the app is open or in the background
		 * @param {object} notification A notification object containing a payload including title, body and type
		 */
		Notifications.events().registerNotificationOpened(
			(notification, completion) => {
				if (notification?.payload?.type) {
					notificationHandler(notification.payload);
				}
				completion();
			}
		);
	}, []);

	const registerClientToken = useCallback(
		async (token) => {
			try {
				await registerNotifications({
					variables: {
						input: {
							deviceToken: token,
							notificationStatus: 'Approved',
						},
					},
				});
			} catch (error) {
				sentryHelper(error.message);
			}
		},
		[registerNotifications]
	);

	return null;
}

export default PushNotificationService;
