import React, {useEffect, useState} from 'react';

import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import {testIDs} from '../../e2e/modulesTestIDs';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import routes from '../App/stacks/routes';
import FloppyDisk from '../assets/svg/FloppyDisk';
import Header from '../components/header/Header';
import FilledHeader from '../components/header/FilledHeader';
import Container from '../components/shared/Container';
import Loading from '../components/shared/LoadingComponent';
import PrivacyPolicyAccordion from '../components/shared/PrivacyPolicyAccordion';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import {appColors} from '../config/colors';
import {doRegisterDevice} from '../helpers/authHelper';
import sentryHelper from '../helpers/sentryHelper';

// this screen is used in both the onboardingscreen and the settingscreen
// therefore we configure it based on if the user has accepted the privacy policy
// we need to set the color accordingly

const PrivacyPolicyScreen = ({navigation}) => {
	useEffect(() => {
		async function policyCheck() {
			const acceptedPolicy = await AsyncStorage.getItem('@acceptedPolicy');
			setPolicy(acceptedPolicy);
		}
		policyCheck();
	}, []);

	const [open, setOpen] = useState(false);
	const [policyAccepted, setPolicy] = useState(false);
	const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
	const [loading, setLoading] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const doAcceptPolicy = async () => {
		setLoading(true);
		try {
			await doRegisterDevice(registerDevice);
			await AsyncStorage.setItem('@acceptedPolicy', JSON.stringify(true));
			const token = await AsyncStorage.getItem('@access_token');
			if (token) {
				setLoading(false);
				navigation.navigate(routes.onboardingStack.questionScreen);
			}
		} catch (error) {
			sentryHelper(error.message);
		}
	};

	return (
		<Container
			testID={testIDs.PRIVACY.SCREEN}
			statusBarColor={policyAccepted ? appColors.headerColor : appColors.white}>
			{policyAccepted ? (
				FilledHeader navigation={navigation} title="Privacy" />
			) : (
				<Header title="Privacy" color="light" />
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
							Om Ping Ping optimaal te laten functioneren verzamelen wij
							informatie. Klik hieronder om meer hierover te lezen. Wij slaan zo
							min mogelijk informatie op.
						</Body>
					</View>
					<PrivacyPolicyAccordion open={open} toggleOpen={toggleOpen} />
					{!policyAccepted && (
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
};

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: appColors.background,
		padding: 15,
	},
	title: {
		color: appColors.text,
		marginBottom: 20,
	},
	onboardingText: {
		color: appColors.subText,
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
};

export default PrivacyPolicyScreen;
