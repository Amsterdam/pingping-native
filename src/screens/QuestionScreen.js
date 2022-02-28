import React, { useEffect, useRef, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView, ScrollView, Dimensions, Platform } from 'react-native';
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
import { asyncStorageKeys, ERROR_TYPES, ONBOARDING_STATES } from '../config/constants';
import theme from '../config/theme';
import { setAsyncStorage } from '../helpers/asyncStorageHelpers';
import {
	revertTaskFunc,
	setRevertedQuestionValues,
	submitAnswer,
} from '../helpers/questionAnswerHelpers';

const INITIAL_STATE = {
	selectedChoice: { label: '', value: '' },
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
	const currentTask = data?.getStatus?.currentTask;
	const previousTask = data?.getStatus?.previousTask?.task;
	const [state, setState] = useState(INITIAL_STATE);
	const scrollViewRef = useRef(null);
	const isIos = Platform.OS === 'ios';

	useEffect(() => {
		if (currentTask?.answer) {
			setRevertedQuestionValues(currentTask, setState);
		}
	}, [currentTask, setState]);

	useEffect(() => {
		if (data && !currentTask) {
			setAsyncStorage(
				asyncStorageKeys.onboardingStatus,
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

	if (data && currentTask?.task) {
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
				currentTask.task,
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

		const scrollToBottom = () => {
			if (!isIos && scrollViewRef?.current) {
				scrollViewRef.current.scrollToEnd();
			}
		};
		return (
			<KeyboardAvoidingView style={styles.container} behavior={isIos ? 'position' : ''}>
				<ScrollView
					keyboardShouldPersistTaps="handled"
					contentContainerStyle={styles.scrollView}
					ref={scrollViewRef}
				>
					<AnimatableView
						style={styles.flex}
						duration={400}
						ref={animationRef}
						useNativeDriver
					>
						<Container>
							<Header
								left={
									<HeaderBackButton onPressAction={doRevertTask} color="dark" />
								}
								right={<ProgressBar progress={currentTask.task.progress} />}
								title={currentTask.task.headerTitle}
							/>
							<ContentLayout>
								<QuestionRenderer
									scrollToBottom={scrollToBottom}
									currentTask={currentTask.task}
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
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
	return <QuestionSkeleton />;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.white,
		height: '100%',
		flex: 1,
	},
	scrollView: {
		height: Dimensions.get('window').height,
	},
	flex: { flex: 1 },
});

QuestionScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
