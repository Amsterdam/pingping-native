import React from 'react';

import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'react-native-notifications';

import { testIDs } from '../../e2e/modulesTestIDs';
import REGISTER_NOTIFICATIONS_MUTATION from '../apollo/Mutation/registerNotificationsMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import Bell from '../assets/svg/Bell';
import Header from '../components/header/Header';
import Container from '../components/shared/Container';
import Button from '../components/shared/RoundedButton';
import TextButton from '../components/shared/TextButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import theme from '../config/theme';
import sentryHelper from '../helpers/sentryHelper';
import useAppContext from '../hooks/useAppContext';

const NotificationDecisionScreen = () => {
	const [registerNotifications] = useMutation(
		REGISTER_NOTIFICATIONS_MUTATION,
	);
	const { setUserState } = useAppContext();

	const acceptNotifications = async () => {
		Notifications.registerRemoteNotifications();
		Notifications.events().registerRemoteNotificationsRegistered(
			async event => {
				await doRegister(
					'Approved',
					event.deviceToken,
				);
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
			setUserState('LOGGED_IN');
		} catch (error) {
			sentryHelper(error.message);
		}
	};

	return (
		<Container>
			<Header
				title="Notificaties"
				right={
					<TextButton
						onPress={declineNotifications}
						testID={
							testIDs.NOTIFICATON.SKIP_BUTTON
						}
						label="OVERSLAAN"
					/>
				}
				color="light"
			/>
			<View style={styles.viewContainer}>
				<View>
					<Bell Bell />
				</View>
				<View>
					<Title
						style={styles.title}
						variant="h1"
						align="center"
					>
						NOTIFICATIES
					</Title>
					<Body
						variant="b3"
						style={styles.onboardingText}
						align="center"
					>
						Wil je een berichtje krijgen voor een
						actie die je nog moet doen of als er
						een nieuwe route is toegevoegd?
					</Body>
				</View>
				<View>
					<Button
						style={styles.button}
						onPress={acceptNotifications}
						testid={
							testIDs.NOTIFICATON.ACCEPT_BUTTON
						}
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
		backgroundColor: theme.colors.background,
		paddingHorizontal: theme.spacing.l,
	},
	title: {
		fontWeight: '400',
		color: theme.colors.text,
		marginBottom: theme.spacing.m,
	},
	onboardingText: {
		color: theme.colors.subText,
	},
	button: {
		backgroundColor: theme.colors.primary,
	},
});

NotificationDecisionScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default NotificationDecisionScreen;
