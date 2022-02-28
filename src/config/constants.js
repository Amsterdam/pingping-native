import PropTypes from 'prop-types';

import testIDs from '../../e2e/modulesTestIDs';

// const LOCAL_URL = 'http://192.168.1.110:4000';
const ACC_URL = 'https://acc.api.pingping.amsterdam.nl';
const PROD_URL = 'https://api.pingping.amsterdam.nl';

export const BASE_URL = __DEV__ ? ACC_URL : PROD_URL;

export const API_URL = `${BASE_URL}/api`;

export const ASYNC_STORAGE_KEYS = {
	dismissedUpdate: '@pingpingNative_dismissedUpdate',
	acceptedPolicy: '@pingpingNative_acceptedPolicy',
	accessToken: '@pingpingNative_accessToken',
	onboardingStatus: '@pingpingNative_onboardingStatus',
};

export const ERROR_TYPES = {
	backendError: 'BACKEND_ERROR',
	networkError: 'NETWORK_ERROR',
	unkownError: 'UNKNOWN_ERROR',
};

export const USER_STATES = {
	onboarder: 'ONBOARDER',
	loggedIn: 'LOGGED_IN',
};

export const ONBOARDING_STATES = {
	onboardingSwiperCompleted: 'SWIPER_COMPLETED',
	onboardingQuestionsStarted: 'QUESTIONS_STARTED',
	onboardingQuestionsFinished: 'QUESTIONS_FINISHED',
};

export const NAVIGATION_TYPE = PropTypes.shape({
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

export const QUESTION_TYPES = {
	YES_OR_NO: 'YesOrNo',
	MULTIPLE_CHOICES: 'MultipleChoices',
	GO_BACK: 'GoBack',
	DATE_OF_BIRTH: 'DateOfBirth',
	CONFIRM: 'Confirm',
	DROPDOWN_SELECT: 'DropdownSelect',
};

export const ONBOARDING_VIEWS = [
	{
		title: 'WAT IS PING PING',
		text: 'Maak je persoonlijke routeplan om je (financiële) basis op orde te hebben.',
		svg: 'WelcomeIllustration',
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.WHAT_BUTTON,
	},
	{
		title: 'WAT IS PING PING',
		text: 'Met elke stap die je afrondt kom je dichter bij je doel en verdien je city pings',
		svg: 'BackPack',
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.HOW_BUTTON,
	},
	{
		title: 'Wat is PING PING',
		text: 'Als je route klaar is heb je je basis gefikst en kun je je reward claimen met je city pings',
		svg: 'Vault',
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.WHERE_BUTTON,
	},
];
