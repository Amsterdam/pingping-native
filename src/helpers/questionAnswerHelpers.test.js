import {
	revertTaskFunc,
	setRevertedQuestionValues,
	submitAnswer,
	checkDisabled,
} from './questionAnswerHelpers';

// move this to another file when needed for other tests
const currentTaskYesOrNo = {
	__typename: 'TaskResponse',
	taskId: 'onboarding.woonAdres',
	title: 'Sta je ingeschreven op een vast adres?',
	meta: null,
	description:
		'<p>Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen. Meestal is een adres de plek waar je woont. Heb je geen vast woonadres of heb je een inschrijfprobleem, dan kan je soms tijdelijk <a href="https://www.amsterdam.nl/veelgevraagd/?caseid=%7BB5E2584B-217C-489D-B346-42EE7511D445%7D">een briefadres krijgen.</a></p><p>Verblijf je in Amsterdam, maar sta je niet ingeschreven of dreig je uitgeschreven te worden? Meld je dan bij het <a href="https://www.amsterdam.nl/werk-inkomen/jongerenpunt/">Jongerenpunt van de gemeente Amsterdam.</a></p><p>Ben je dakloos en heb je hulp en steun nodig? Kijk dan op <a href="http://straatapp.nl/">straatapp.nl</a></p>',
	choices: { yes: 'Ja ik sta ingeschreven', no: 'Nee nog niet' },
	type: 'YesOrNo',
	progress: 0.42,
	headerTitle: 'woonadres',
	media: {
		__typename: 'Media',
		type: 'Image',
		value: '/images/task1.jpg',
		thumbnail: '/images/task1Thumb.jpg',
		color: '#d8d8d5',
	},
};

const currentTaskBirthdate = {
	__typename: 'TaskResponse',
	taskId: 'onboarding.dateOfBirth',
	title: 'Wat is je geboortedatum?',
	meta: null,
	description: null,
	choices: null,
	type: 'DateOfBirth',
	progress: 0.33,
	headerTitle: 'geboortedatum',
	media: null,
};

const currentTaskMultipleChoices = {
	__typename: 'TaskResponse',
	taskId: 'onboarding.waarKomtJeInkomenVandaan',
	title: 'Waar komt je inkomen vandaan?',
	meta: null,
	description: null,
	choices: {
		bijbaan: 'Een bijbaan',
		studiefinanciering: 'Studiefinanciering',
		family: 'Ouders / Familie',
	},
	type: 'MultipleChoices',
	progress: 0.92,
	headerTitle: 'inkomen',
	media: null,
};

const previousTask = {
	taskId: 'onboarding.waarKomtJeInkomenVandaan',
};
const INITIAL_STATE = {
	selectedChoice: { label: '', value: '' },
	day: '',
	month: '',
	year: '',
	choices: [],
};

let state = {
	selectedChoice: { label: '', value: '' },
	day: '',
	month: '',
	year: '',
	choices: [],
};
const updateTask = jest.fn().mockResolvedValue(true);
const revertTask = jest.fn().mockResolvedValue(true);
const setState = jest.fn();
const refetch = jest.fn().mockResolvedValue(true);
const animationRef = { current: { fadeIn: jest.fn() } };
const answer = '';
const navigation = { goBack: jest.fn() };

const setLoadingQuestion = jest.fn();

beforeEach(async () => {
	state = INITIAL_STATE;
});

afterEach(async () => {
	jest.clearAllMocks();
});

describe('Tests for the questionAnswerHelper functions', () => {
	describe('checkDisbled', () => {
		it('checkDisabled is working properly for a YesOrNo typed task', () => {
			state.selectedChoice = { label: 'yes', value: 'yes' };
			expect(checkDisabled(currentTaskYesOrNo, state)).toEqual(false);
			state.selectedChoice = { label: '', value: '' };
			expect(checkDisabled(currentTaskYesOrNo, state)).toEqual(true);
		});
		it('checkDisabled is working properly for birthday typed task', () => {
			expect(checkDisabled(currentTaskBirthdate, state)).toEqual(true);
			state.day = '1';
			state.month = '1';
			state.year = '2000';
			expect(checkDisabled(currentTaskBirthdate, state)).toEqual(false);
		});
		it('checkDisabled is working properly for multiplechoice typed task', () => {
			expect(checkDisabled(currentTaskMultipleChoices, state)).toEqual(true);
			state.choices = ['bijbaan', 'glijbaan', 'autobahn'];
			expect(checkDisabled(currentTaskMultipleChoices, state)).toEqual(false);
		});
	});
	describe('submitAnswer', () => {
		it('submits an answer for YesOrNo typed', async () => {
			state.selectedChoice = { label: 'yes', value: 'yes' };
			await submitAnswer(
				currentTaskYesOrNo,
				state,
				setLoadingQuestion,
				updateTask,
				setState,
				refetch,
				state,
				animationRef,
				answer
			);
			expect(setLoadingQuestion).toHaveBeenCalledTimes(2);
			expect(updateTask).toHaveBeenCalledWith({
				variables: {
					answer: 'yes',
					taskId: currentTaskYesOrNo.taskId,
				},
			});
			expect(refetch).toHaveBeenCalled();
			expect(setState).toHaveBeenCalledWith(INITIAL_STATE);
			expect(animationRef.current.fadeIn).toHaveBeenCalled();
		});
		it('submits an answer for currentTaskBirthdate type', async () => {
			state.day = '1';
			state.month = '1';
			state.year = '2000';
			await submitAnswer(
				currentTaskBirthdate,
				state,
				setLoadingQuestion,
				updateTask,
				setState,
				refetch,
				state,
				animationRef,
				answer
			);
			expect(setLoadingQuestion).toHaveBeenCalledTimes(2);
			expect(updateTask).toHaveBeenCalledWith({
				variables: {
					answer: '2000-1-1',
					taskId: currentTaskBirthdate.taskId,
				},
			});
			expect(refetch).toHaveBeenCalled();
			expect(setState).toHaveBeenCalledWith(INITIAL_STATE);
			expect(animationRef.current.fadeIn).toHaveBeenCalled();
		});
		it('submits an answer for multipleChoice type', async () => {
			state.choices = ['bijbaan', 'glijbaan', 'autobahn'];
			await submitAnswer(
				currentTaskMultipleChoices,
				state,
				setLoadingQuestion,
				updateTask,
				setState,
				refetch,
				state,
				animationRef,
				answer
			);
			expect(setLoadingQuestion).toHaveBeenCalledTimes(2);
			expect(updateTask).toHaveBeenCalledWith({
				variables: {
					answer: 'bijbaan,glijbaan,autobahn',
					taskId: currentTaskMultipleChoices.taskId,
				},
			});
			expect(refetch).toHaveBeenCalled();
			expect(setState).toHaveBeenCalledWith(INITIAL_STATE);
			expect(animationRef.current.fadeIn).toHaveBeenCalled();
		});
	});
	describe('revertTaskFunc', () => {
		it('tests if revertTaskFunc works properly', async () => {
			await revertTaskFunc(
				setLoadingQuestion,
				previousTask,
				navigation,
				refetch,
				revertTask,
				animationRef
			);
			expect(setLoadingQuestion).toHaveBeenCalledTimes(2);
			expect(animationRef.current.fadeIn).toHaveBeenCalled();
			expect(refetch).toHaveBeenCalled();
			expect(revertTask).toHaveBeenCalledWith({
				variables: {
					taskId: currentTaskMultipleChoices.taskId,
				},
			});
		});
		it('tests if revertTaskFunc works properly when there is no taskId ', async () => {
			await revertTaskFunc(
				setLoadingQuestion,
				'',
				navigation,
				refetch,
				revertTask,
				animationRef
			);
			expect(navigation.goBack).toHaveBeenCalled();
		});
	});
	describe('setRevertedQuestionValues', () => {
		it('tests if setRevertedQuestionValues works properly', async () => {
			setRevertedQuestionValues({ task: currentTaskYesOrNo, answer: 'yes' }, setState);
			expect(setState).toHaveBeenCalledTimes(1);
		});
	});
});
