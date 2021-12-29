import React, {
	useEffect,
	useRef,
	useState,
} from 'react';

import {
	useMutation,
	useQuery,
} from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import Header from '../components/header/Header';
import HeaderBackButton from '../components/header/HeaderBackButton';
import ContentLayout from '../components/layout/ContentLayout';
import QuestionComponent from '../components/onboarding/QuestionComponent';
import Container from '../components/shared/Container';
import ErrorComponent from '../components/shared/ErrorComponent';
import ProgressBar from '../components/shared/ProgressBar';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import {
	revertTaskFunc,
	setRevertedQuestionValues,
	submitAnswer,
	updateConfirmTask,
} from '../helpers/questionAnswerHelpers';

const INITIAL_STATE = {
	answerSelected: false,
	day: '',
	month: '',
	year: '',
	choices: [],
};

const QuestionScreen = ({ navigation }) => {
	const {
		data,
		loading,
		error,
		refetch,
	} = useQuery(GET_STATUS_QUERY);
	const [updateTask] = useMutation(
		UPDATE_TASK_MUTATION,
	);
	const [revertTask] = useMutation(
		REVERT_TASK_MUTATION,
	);
	const [
		loadingQuestion,
		setLoadingQuestion,
	] = useState(false);
	const animationRef = useRef(null);
	const current = data?.getStatus?.currentTask;
	const answeredBefore = current?.answer;
	const currentTask = current?.task;
	const previousTask =
		data?.getStatus?.previousTask?.task;
	const [state, setState] = useState(
		INITIAL_STATE,
	);

	useEffect(() => {
		if (answeredBefore) {
			setRevertedQuestionValues(
				currentTask,
				answeredBefore,
				setState,
			);
		}
	}, [answeredBefore, currentTask, navigation]);

	if (error) {
		return (
			<ErrorComponent
				functionToRetry={refetch}
				somethingWentWrong
				onPress={() => navigation.goBack()}
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
				animationRef,
			);
		};

		const doUpdateTask = () => {
			submitAnswer(
				currentTask,
				state,
				setLoadingQuestion,
				updateTask,
				setState,
				refetch,
				INITIAL_STATE,
				animationRef,
			);
		};

		const doUpdateConfirmTask = answer => {
			updateConfirmTask(
				answer,
				updateTask,
				currentTask,
				refetch,
				animationRef,
				setLoadingQuestion,
			);
		};

		return (
			<AnimatableView
				style={styles.flex}
				duration={400}
				ref={animationRef}
				useNativeDriver
			>
				<Container>
					<Header
						left={
							<HeaderBackButton
								onPressAction={doRevertTask}
								color="dark"
							/>
						}
						right={
							<ProgressBar
								progress={currentTask.progress}
							/>
						}
						title={currentTask.headerTitle}
					/>
					<ContentLayout>
						<QuestionComponent
							currentTask={currentTask}
							updateTask={updateTask}
							refetch={refetch}
							doRevertTask={doRevertTask}
							state={state}
							setState={setState}
							doUpdateTask={doUpdateTask}
							setLoadingQuestion={
								setLoadingQuestion
							}
							doUpdateConfirmTask={
								doUpdateConfirmTask
							}
						/>
					</ContentLayout>
				</Container>
			</AnimatableView>
		);
	}
	return <QuestionSkeleton />;
};

const styles = StyleSheet.create({
	flex: { flex: 1 },
});

QuestionScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
