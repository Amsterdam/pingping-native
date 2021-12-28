import {useCallback, useEffect} from 'react';

import PropTypes from 'prop-types';
import {Linking, Platform} from 'react-native';
import {Notifications} from 'react-native-notifications';

import sentryHelper from '../helpers/sentryHelper';

const notificationTypes = {
	remindUserToCompleteOnboarding: 'RemindUserToCompleteOnboarding',
	remindUserToContinueRoute: 'RemindUserToContinueRoute',
};

const platform = Platform.OS;

const handleNotifcationWithType = payload => {
	if (
		payload.type.toLowerCase() ===
		notificationTypes.remindUserToContinueRoute.toLowerCase()
	) {
		setTimeout(() => {
			Linking.openURL(`pingpingnative://route/${payload.routeId}`);
		}, 1000);
	}
};

// @todo handle initial notification in linking.js

const PushNotificationManager = ({children}) => {
	useEffect(() => {
		Notifications.registerRemoteNotifications();
		registerNotificationEvents();
		platform === 'ios' && Notifications.ios.setBadgeCount(0);
	}, [registerNotificationEvents]);

	const registerNotificationEvents = useCallback(async () => {
		/**
		 * Event listener for notifications that are received in the foreground - so when using the app
		 * @param {object} notification A notification component containing a payload including title, body and type
		 */
		Notifications.events().registerNotificationReceivedForeground(
			(notification, completion) => {
				if (notification) {
					// if we want to handle notifications within the android app we can do it here with
				}
			},
		);

		/**
		 * Event listener for initial notifications, initial notifications are notifications that are received when the app is fully closed
		 * @param {object} notification A notification component containing a payload including title, body and type
		 */
		Notifications.getInitialNotification()
			.then(notification => {
				if (notification?.payload?.type) {
					handleNotifcationWithType(notification.payload);
				}
			})
			.catch(error => sentryHelper(error.message));

		/**
		 * Event listener for notifications that are opened when the app is open or in the background
		 * @param {object} notification A notification component containing a payload including title, body and type
		 */
		Notifications.events().registerNotificationOpened(
			(notification, completion) => {
				if (notification?.payload?.type) {
					handleNotifcationWithType(notification.payload);
				}
			},
		);
	}, []);

	return children;
};

PushNotificationManager.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default PushNotificationManager;
