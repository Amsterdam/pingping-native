import React from 'react';

import {useMutation} from '@apollo/client';
import {Container, Header, Left, Right} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Notifications} from 'react-native-notifications';

import {testIDs} from '../../e2e/modulesTestIDs';
import REGISTER_NOTIFICATIONS_MUTATION from '../apollo/Mutation/registerNotificationsMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import Bell from '../assets/svg/Bell';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import {appColors} from '../config/colors';
import sentryHelper from '../helpers/sentryHelper';

const NotificationDecisionScreen = ({navigation, setLogin}) => {
	const [registerNotifications] = useMutation(REGISTER_NOTIFICATIONS_MUTATION);

	const acceptNotifications = async () => {
		Notifications.registerRemoteNotifications();
		Notifications.events().registerRemoteNotificationsRegistered(
			async event => {
				await doRegister('Approved', event.deviceToken);
			},
		);
	};

	const declineNotifications = async () => {
		await doRegister('Declined', 'null');
	};

	const doRegister = async (decision, token) => {
		try {
			await registerNotifications({
				variables: {
					deviceToken: token,
					notificationStatus: decision,
				},
				refetchQueries: [
					{
						query: GET_STATUS_QUERY,
					},
				],
			});
			setLogin(true);
		} catch (error) {
			sentryHelper(error.message);
		}
	};

	return (
		<Container testID={testIDs.NOTIFICATON.SCREEN}>
			<Header style={styles.header} transparent noShadow>
				<StatusBar
					barStyle="dark-content"
					backgroundColor={appColors.background}
				/>
				<Left style={styles.flex} />
				<Title style={styles.headerTitle} variant="h6">
					Notificaties
				</Title>
				<Right>
					<TouchableOpacity
						onPress={declineNotifications}
						testID={testIDs.NOTIFICATON.SKIP_BUTTON}>
						<Title style={styles.headerSubButton} variant="h7">
							Overslaan
						</Title>
					</TouchableOpacity>
				</Right>
			</Header>
			<View style={styles.viewContainer}>
				<View>
					<Bell Bell />
				</View>
				<View>
					<Title style={styles.title} variant="h1" align="center">
						NOTIFICATIES
					</Title>
					<Body variant="b3" style={styles.onboardingText} align="center">
						Wil je een berichtje krijgen voor een actie die je nog moet doen of
						als er een nieuwe route is toegevoegd?
					</Body>
				</View>
				<View>
					<Button
						style={styles.button}
						onPress={acceptNotifications}
						testid={testIDs.NOTIFICATON.ACCEPT_BUTTON}
						label="ACCEPTEREN"
					/>
				</View>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: appColors.background,
		paddingHorizontal: 25,
	},
	title: {
		fontWeight: '400',
		color: appColors.text,
		marginBottom: 20,
	},
	onboardingText: {
		color: appColors.subText,
	},
	button: {
		backgroundColor: appColors.primary,
	},
	headerSubButton: {
		color: appColors.greyedOut,
	},
	header: {
		backgroundColor: appColors.background,
		alignItems: 'center',
	},
	headerTitle: {
		color: appColors.primary,
	},
	flex: {
		flex: 1,
	},
});

NotificationDecisionScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	setLogin: PropTypes.func.isRequired,
};

export default NotificationDecisionScreen;
