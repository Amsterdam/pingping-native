import * as Sentry from '@sentry/react-native';

export default function sentryHelper(message = '') {
	if (!__DEV__) {
		Sentry.captureMessage(message);
	} else {
		console.error(message);
	}
}
