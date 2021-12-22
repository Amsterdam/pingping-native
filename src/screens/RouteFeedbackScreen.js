import React from 'react';

import {useMutation} from '@apollo/client';
import {VStack} from 'native-base';
import PropTypes from 'prop-types';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	TextInput,
	View,
} from 'react-native';

import SUBMIT_ROUTE_FEEDBACK_MUTATION from '../apollo/Mutation/submitRouteFeedback';
import GET_ROUTES from '../apollo/Query/getRoutes';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import ThankYouFeedbackModal from '../components/modals/ThankYouFeedbackModal';
import StarRating from '../components/route/StarRating';
import MinimalErrorComponent from '../components/shared/MinimalErrorComponent';
import RoundedButton from '../components/shared/RoundedButton';
import Title from '../components/typography/Title';

const INITIAL_STATE = {feedback: '', numberActive: 0};

const MARGIN = 30;

function RouteFeedbackScreen({navigation = () => {}, route = {}}) {
	const {cover, routeId} = route.params;
	const [submitFeedback] = useMutation(SUBMIT_ROUTE_FEEDBACK_MUTATION);
	const [state, setState] = React.useState(INITIAL_STATE);
	const [displayError, setDisplayError] = React.useState({
		show: false,
		message: '',
	});
	const [thankYouOpen, setThankYouOpen] = React.useState(false);

	const onRate = stars => () => {
		setState({...state, numberActive: stars});
	};

	const doSubmit = async () => {
		try {
			await submitFeedback({
				variables: {
					routeId,
					feedback: state.feedback,
					rating: state.numberActive,
				},
				refetchQueries: [
					{
						query: GET_ROUTES,
					},
				],
			});
			setThankYouOpen(true);
			setTimeout(() => {
				setThankYouOpen(false);
				navigation.goBack();
			}, 2000);
		} catch (error) {
			setThankYouOpen(false);
			setDisplayError({
				show: true,
				message:
					'Er ging iets mis bij het verzenden van je feedback. Probeer het later nog eens.',
			});
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'position' : 'height'}
			style={{backgroundColor: 'white', flex: 1}}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={{backgroundColor: 'white'}}>
				<ImageOverlayHeader navigation={navigation} cover={cover} />
				<View style={styles.contentContainer}>
					{displayError.show && (
						<MinimalErrorComponent message={displayError.message} />
					)}
					<Title variant="h2" style={styles.title}>
						Wat vond je van de route?
					</Title>
					<View style={styles.starContainer}>
						<StarRating
							numberActive={state.numberActive}
							numberOfStars={5}
							onRate={onRate}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Title style={styles.anyTips} variant="h4">
							Heb je nog tips om de app te verbeteren?
						</Title>
						<TextInput
							style={styles.inputContainerMultiline}
							onChangeText={text => setState({...state, feedback: text})}
							value={state.feedback}
							placeholder="Wat vind jij dat er beter kan?"
							multiline
							scrollEnabled={false}
							numberOfLines={6}
						/>
					</View>
					<RoundedButton
						label="verstuur"
						style={styles.button}
						onPress={doSubmit}
						disabled={!state.numberActive > 0}
					/>
				</View>
				<ThankYouFeedbackModal open={thankYouOpen} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: 40,
		paddingVertical: 20,
	},

	title: {
		marginTop: MARGIN,
	},

	starContainer: {
		flexDirection: 'row',
		marginVertical: 30,
		justifyContent: 'space-around',
	},
	anyTips: {
		marginBottom: MARGIN,
	},
	button: {
		marginTop: MARGIN,
		alignSelf: 'flex-end',
	},
});

RouteFeedbackScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
	cover: PropTypes.object,
};

RouteFeedbackScreen.defaultProps = {
	cover: {
		value: '',
		thumbnail: '',
		color: '',
	},
};

export default RouteFeedbackScreen;
