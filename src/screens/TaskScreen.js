import React, {useState} from 'react';

import {useMutation, useQuery} from '@apollo/client';
import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	Dimensions,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import YouTube from 'react-native-youtube';

import COMPLETE_TASK_MUTATION from '../apollo/Mutation/completeTaskMutation';
import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import routes from '../App/stacks/routes';
import FilledHeader from '../components/header/FilledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import WebViewModal from '../components/modals/WebViewModal';
import Container from '../components/shared/Container';
import HTMLRenderer from '../components/shared/HTMLRenderer';
import Loading from '../components/shared/LoadingComponent';
import ProgressiveImage from '../components/shared/ProgressiveImage';
import Button from '../components/shared/RoundedButton';
import Title from '../components/typography/Title';
import {appColors, ppBaseColors} from '../config/colors';
import {BASE_URL} from '../config/initialSettings';
import {YOUTUBE_API_KEY} from '../config/keys';
import sentryHelper from '../helpers/sentryHelper';

const TaskScreen = ({navigation, route}) => {
	const {task, routeId} = route.params;
	const [completeTask] = useMutation(COMPLETE_TASK_MUTATION);
	const {refetch} = useQuery(GET_ROUTE_QUERY, {
		variables: {routeId},
	});
	const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
	const [webViewOpen, setWebviewOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [videoReady, setVideoReady] = useState(false);

	const doCompleteTask = async () => {
		setLoading(true);
		try {
			await completeTask({
				variables: {taskId: task.taskId},
			});

			/* This code checks if the route is done in order to show the celebration modal yes/no */
			const routeResponse = await refetch();
			const routeDone =
				routeResponse?.data?.getRoute?.tasks.filter(
					routeTask => routeTask.status !== 'Completed',
				).length === 0;

			if (routeDone) {
				setLoading(false);
				navigation.navigate(routes.citypingsStack.name, {
					screen: routes.citypingsStack.completedRouteCelebrationModalScreen,
					params: {pings: routeResponse.data.getRoute.totalPoints},
					initial: false,
				});
				return navigation.popToTop();
			}

			return navigation.goBack();
		} catch (error) {
			sentryHelper(error.message);
		} finally {
			setLoading(false);
		}
	};

	const renderMedia = media => {
		switch (media.type) {
			case 'YouTube':
				return (
					<View style={styles.videoContainer}>
						{!videoReady && (
							<ActivityIndicator
								color={appColors.primary}
								style={styles.activivityIndicator}
							/>
						)}
						<YouTube
							videoId={task.media.value} // The YouTube video ID
							play={false} // control playback of video with true/false
							loop={false} // control whether the video should loop when ended
							apiKey={YOUTUBE_API_KEY}
							style={[
								styles.videoContainer,
								!videoReady && styles.videoNotReady,
							]}
							onError={error => sentryHelper(error.message)}
							onReady={() => setVideoReady(true)}
							resumePlayAndroid={false}
							showFullscreenButton={false}
						/>
					</View>
				);
			case 'Image':
				return (
					<ProgressiveImage
						source={{uri: `${BASE_URL}${task.media.value}`}}
						thumbnailSource={{uri: `${BASE_URL}${task.media.thumbnail}`}}
						mainColor={task.media.color}
						style={styles.imageContainer}
					/>
				);
			default:
				break;
		}
	};

	const closeModal = () => {
		setWebviewOpen(false);
	};

	const needHelp = () => {
		try {
			throw new Error('Om Hulp Gevraagd');
		} catch (error) {
			sentryHelper(error.message);
			// Toast.show({
			// 	text: 'Het is op dit moment nog niet mogelijk om hulp te vragen',
			// 	textStyle: {fontFamily: 'Raleway-Regular'},
			// 	style: {backgroundColor: ppBaseColors.PP_BLACK, borderRadius: 10},
			// 	duration: 2000,
			// }); // change the error message once complete
		}
	};

	const taskStatus = task.status === 'Completed';

	return (
		<Container>
			FilledHeader navigation={navigation} title={task.headerTitle} />
			<ScrollView contentContainerStyle={styles.contentContainer}>
				{task?.media && renderMedia(task.media)}
				<ContentLayout>
					<Title variant="h3">{task.title}</Title>
					<HTMLRenderer
						html={task.description}
						setUrlToVisit={setUrlToVisit}
						setWebviewOpen={setWebviewOpen}
					/>
				</ContentLayout>
			</ScrollView>
			{taskStatus ? (
				<View style={styles.completedTagLineContainer}>
					<Title style={styles.completedTagLine} variant="h6" align="center">
						Je {task.headerTitle} is gefikst
					</Title>
				</View>
			) : (
				<View style={styles.buttonContainer}>
					<React.Fragment>
						<Button
							style={styles.buttonHelp}
							label="Hulp nodig?"
							onPress={needHelp}
						/>
						<Button label="Gelukt!" onPress={doCompleteTask} />
					</React.Fragment>
				</View>
			)}
			{loading && <Loading />}
			<WebViewModal
				urlToVisit={urlToVisit}
				closeModal={closeModal}
				webViewOpen={webViewOpen}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: 'center',
		width: '100%',
		backgroundColor: appColors.background,
	},
	videoContainer: {
		width: Dimensions.get('window').width,
		height: 200,
		backgroundColor: ppBaseColors.PP_BLACK,
	},
	activivityIndicator: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	videoNotReady: {
		display: 'none',
	},
	imageContainer: {
		alignSelf: 'stretch',
		height: 200,
	},
	buttonContainer: {
		paddingHorizontal: 40,
		marginTop: 10,
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonHelp: {
		backgroundColor: appColors.greyedOut,
		flex: 1,
		marginRight: 10,
		justifyContent: 'center',
	},
	completedTagLineContainer: {
		padding: 10,
	},
	completedTagLine: {
		color: appColors.primary,
		marginTop: 10,
		marginBottom: 20,
	},
});

TaskScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default TaskScreen;
