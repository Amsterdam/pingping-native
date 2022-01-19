import PropTypes from 'prop-types';

export const ERROR_TYPES = {
	backendError: 'BACKEND_ERROR',
	networkError: 'NETWORK_ERROR',
	unkownError: 'UNKNOWN_ERROR',
};

export const USER_STATES = {
	onboarder: 'ONBOARDER',
	loggedIn: 'LOGGED_IN',
};

export const navigationType = PropTypes.shape({
	dispatch: PropTypes.func.isRequired,
	goBack: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired,
	setParams: PropTypes.func.isRequired,
	state: PropTypes.shape({
		key: PropTypes.string.isRequired,
		routeName: PropTypes.string.isRequired,
		path: PropTypes.string,
		params: PropTypes.object,
	}).isRequired,
}).isRequired;
