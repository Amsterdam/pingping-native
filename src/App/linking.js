import { Linking } from 'react-native';
import { Notifications } from 'react-native-notifications';

import routes from './stacks/routes';

import sentryHelper from '../helpers/sentryHelper';
import { notificationTypes } from '../services/PushNotifications/notificationTypes';

// @todo test if linking works with new configuration

const linking = {
	prefixes: ['pingpingnative://'],
	config: {
		screens: {
			[routes.routeStack.name]: {
				screens: {
					[routes.routeStack.screens
						.routeDetailsScreen]:
						'route/:routeId',
					[routes.routeStack.screens.taskScreen]:
						'route/:routeId/:task',
				},
			},
		},
	},
	// custom getInitialUrl https://reactnavigation.org/docs/navigation-container/#linkinggetinitialurl):
	async getInitialURL() {
		try {
			// Check if app was opened from a deeplink if so return the link url so navigation can handle it
			const url = await Linking.getInitialURL();
			if (url !== null) {
				return url;
			}

			// Check if there is an initial notification with a payload and a type
			const initialNotification = await Notifications.getInitialNotification();
			if (
				initialNotification?.payload?.type.toLowerCase() ===
					notificationTypes.remindUserToContinueRoute.toLowerCase() &&
				initialNotification?.payload?.routeId
			) {
				return `pingpingnative://route/${initialNotification.payload.routeId}`;
			}
			return null;
		} catch (error) {
			sentryHelper(error.message);
			return null;
		}
	},
};

export default linking;
