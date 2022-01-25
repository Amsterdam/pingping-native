import React, { useEffect, useRef, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';
import Header from '../components/header/Header';
import HeaderBackButton from '../components/header/HeaderBackButton';
import ContentLayout from '../components/layout/ContentLayout';
import QuestionRenderer from '../components/onboarding/QuestionRenderer';
import Container from '../components/shared/Container';
import ErrorComponent from '../components/shared/ErrorComponent';
import ProgressBar from '../components/shared/ProgressBar';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import { ERROR_TYPES, ONBOARDING_STATES } from '../config/constants';
import theme from '../config/theme';
import { setAsyncStorage } from '../helpers/asyncStorageHelpers';
import {
	revertTaskFunc,
	setRevertedQuestionValues,
	submitAnswer,
} from '../helpers/questionAnswerHelpers';

const INITIAL_STATE = {
	answerSelected: '',
	day: '',
	month: '',
	year: '',
	choices: [],
};

function QuestionScreen({ navigation }) {
	const { data, loading, error, refetch } = useQuery(GET_STATUS_QUERY);
	const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
	const [revertTask] = useMutation(REVERT_TASK_MUTATION);
	const [loadingQuestion, setLoadingQuestion] = useState(false);
	const animationRef = useRef(null);
	const current = data?.getStatus?.currentTask;
	const answeredBefore = current?.answer;
	const currentTask = current?.task;
	const previousTask = data?.getStatus?.previousTask?.task;
	const [state, setState] = useState(INITIAL_STATE);

	useEffect(() => {
		if (answeredBefore) {
			setRevertedQuestionValues(currentTask, answeredBefore, setState);
		}
	}, [answeredBefore, currentTask, navigation]);

	useEffect(() => {
		if (data && !currentTask) {
			setAsyncStorage(
				'@pingpingNative_onboardingStatus',
				ONBOARDING_STATES.onboardingQuestionsFinished
			);
			navigation.navigate(routes.onboardingStack.screens.notificationDecisionScreen);
		}
	}, [currentTask, data, navigation]);

	if (error) {
		return (
			<ErrorComponent
				functionToRetry={refetch}
				error={ERROR_TYPES.unkownError}
				navigation={navigation}
			/>
		);
	}

	if (loadingQuestion || loading) {
		return <QuestionSkeleton />;
	}

	if (data && currentTask) {
		const doRevertTask = () => {
			revertTaskFunc(
				setLoadingQuestion,
				previousTask,
				navigation,
				refetch,
				revertTask,
				animationRef
			);
		};

		const doUpdateTask = (answer) => {
			submitAnswer(
				currentTask,
				state,
				setLoadingQuestion,
				updateTask,
				setState,
				refetch,
				INITIAL_STATE,
				animationRef,
				answer
			);
		};

		return (
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'position' : 'height'}
				style={styles.container}
			>
				<AnimatableView
					style={styles.flex}
					duration={400}
					ref={animationRef}
					useNativeDriver
				>
					<Container>
						<Header
							left={<HeaderBackButton onPressAction={doRevertTask} color="dark" />}
							right={<ProgressBar progress={currentTask.progress} />}
							title={currentTask.headerTitle}
						/>
						<ContentLayout>
							<QuestionRenderer
								currentTask={currentTask}
								updateTask={updateTask}
								refetch={refetch}
								doRevertTask={doRevertTask}
								state={state}
								setState={setState}
								doUpdateTask={doUpdateTask}
							/>
						</ContentLayout>
					</Container>
				</AnimatableView>
			</KeyboardAvoidingView>
		);
	}
	return <QuestionSkeleton />;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		flex: 1,
	},
	flex: { height: '100%' },
});

QuestionScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
