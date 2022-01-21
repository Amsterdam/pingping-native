import testIDs from '../../e2e/modulesTestIDs';

const onboardingViews = [
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

export default onboardingViews;
