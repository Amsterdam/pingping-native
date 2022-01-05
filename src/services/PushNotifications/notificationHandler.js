import { Linking } from 'react-native';

import { notificationTypes } from './notificationTypes';

export default function noficationHandler(
	payload = null,
	initial = false,
) {
	if (
		payload?.type &&
		payload?.routeId &&
		notificationTypes[payload?.type]?.route
	) {
		const url = `${
			notificationTypes[payload.type].route
		}${payload.routeId}`;

		if (initial) {
			return url;
		}
		return Linking.openURL(url);
	}
	return null;
}
