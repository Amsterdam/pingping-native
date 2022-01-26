import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';

import testIDs from '../../e2e/modulesTestIDs';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import routes from '../App/stacks/routes';
import FloppyDisk from '../assets/svg/FloppyDisk';
import FilledHeader from '../components/header/FilledHeader';
import Header from '../components/header/Header';
import Container from '../components/shared/Container';
import Loading from '../components/shared/LoadingComponent';
import PrivacyPolicyAccordion from '../components/shared/PrivacyPolicyAccordion';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import { ONBOARDING_STATES } from '../config/constants';
import theme from '../config/theme';
import { getFromAsyncStorage, multiSetAsyncStorage } from '../helpers/asyncStorageHelpers';
import { doRegisterDevice } from '../helpers/authHelper';
import sentryHelper from '../helpers/sentryHelper';

// this screen is used in both the onboardingscreen and the settingscreen
// therefore we configure it based on if the user has accepted the privacy policy
// we need to set the color accordingly

function PrivacyPolicyScreen({ navigation, route }) {
	const { fromOnboarding } = route.params || { fromOnboarding: false };
	const [open, setOpen] = useState(false);
	const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
	const [loading, setLoading] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const doAcceptPolicy = async () => {
		setLoading(true);
		try {
			await doRegisterDevice(registerDevice);
			await multiSetAsyncStorage([
				['@pingpingNative_acceptedPolicy', JSON.stringify(true)],
				['@pingpingNative_onboardingStatus', ONBOARDING_STATES.onboardingQuestionsStarted],
			]);
			const token = await getFromAsyncStorage('@pingpingNative_accessToken');
			if (token) {
				setLoading(false);
				navigation.navigate(routes.onboardingStack.screens.questionScreen);
			}
		} catch (error) {
			sentryHelper(error.message);
		}
	};

	return (
		<Container
			testID={testIDs.PRIVACY.SCREEN}
			statusBarColor={fromOnboarding ? theme.colors.white : theme.colors.headerColor}
		>
			{fromOnboarding ? (
				<Header title="Privacy" color="light" />
			) : (
				<FilledHeader navigation={navigation} title="Privacy" />
			)}
			<ScrollView contentContainerStyle={styles.content}>
				<View style={styles.viewContainer}>
					<View>
						<FloppyDisk />
					</View>
					<View>
						<Title style={styles.title} variant="h1" align="center">
							PRIVACY
						</Title>
						<Body variant="b3" style={styles.onboardingText} align="center">
							Om Ping Ping optimaal te laten functioneren verzamelen wij informatie.
							Klik hieronder om meer hierover te lezen. Wij slaan zo min mogelijk
							informatie op.
						</Body>
					</View>
					<PrivacyPolicyAccordion open={open} toggleOpen={toggleOpen} />
					{fromOnboarding && (
						<View style={styles.buttonContainer}>
							<Button
								testid={testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON}
								onPress={doAcceptPolicy}
								label="Accepteren"
							/>
						</View>
					)}
				</View>
			</ScrollView>
			{loading && <Loading />}
		</Container>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: theme.colors.background,
		padding: theme.spacing.s,
	},
	title: {
		color: theme.colors.text,
		marginBottom: theme.spacing.m,
	},
	onboardingText: {
		color: theme.colors.subText,
	},
	buttonContainer: {
		alignItems: 'center',
	},
	content: {
		flexGrow: 1,
	},
});

PrivacyPolicyScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default PrivacyPolicyScreen;
