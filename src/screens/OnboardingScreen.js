import React, {useEffect, useRef, useState} from 'react';

import {useQuery} from '@apollo/client';
import {HStack} from 'native-base';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';

import {testIDs} from '../../e2e/modulesTestIDs';
import {version} from '../../package.json';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';
import BackPack from '../assets/svg/BackPack';
import Vault from '../assets/svg/Vault';
import WelcomeIllustration from '../assets/svg/WelcomeIllustration';
import OnboardingItem from '../components/onboarding/OnboardingItem';
import Container from '../components/shared/Container';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import {appColors, ppBaseColors} from '../config/colors';

const onboardingViews = [
	{
		title: 'WAT IS PING PING',
		text:
			'Maak je persoonlijke routeplan om je (financiële) basis op orde te hebben.',
		svg: <WelcomeIllustration />,
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.WHAT_BUTTON,
	},
	{
		title: 'WAT IS PING PING',
		text:
			'Met elke stap die je afrondt kom je dichter bij je doel en verdien je city pings',
		svg: <BackPack />,
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.HOW_BUTTON,
	},
	{
		title: 'Wat is PING PING',
		text:
			'Als je route klaar is heb je je basis gefikst en kun je je reward claimen met je city pings',
		svg: <Vault />,
		buttonLabel: 'Volgende',
		testid: testIDs.ONBOARDING.WHERE_BUTTON,
	},
];

const OnboardingScreen = ({navigation}) => {
	const [swiper, setSwiper] = useState(null);
	const debugMode = __DEV__;
	const swiperRef = useRef(null);
	const {data} = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'cache-only',
	});

	useEffect(() => {
		setSwiper(swiperRef);
		const guideUser = () => {
			// if the user has completed all onboardingtasks, current tasks should be null
			// we send the user to the notification decisionscreen
			if (!data.getStatus.currentTask) {
				navigation.navigate(routes.onboardingStack.notificationDecisionScreen);
			}
			// if the user has already completed an onboarding tasks we do not have
			// to show the user the onboarding again, we send this user to the question screen
			if (data.getStatus.previousTask && data.getStatus.currentTask) {
				navigation.navigate(routes.onboardingStack.questionScreen);
			}
		};
		data && guideUser();
	}, [swiper, data, navigation]);

	return (
		<Container testID={testIDs.ONBOARDING.SCREEN} safeArea>
			<View style={styles.header}>
				<StatusBar
					barStyle="dark-content"
					backgroundColor={appColors.background}
				/>

				<View>
					<Title style={styles.headerTitle} variant="h6" align="center">
						INTRODUCTIE
					</Title>
				</View>

				<View style={styles.right}>
					<TouchableOpacity
						testID={testIDs.ONBOARDING.LOG_IN_BUTTON}
						onPress={() =>
							navigation.navigate(routes.onboardingStack.importDataScreen)
						}>
						<Title style={styles.buttonLabel} variant="h7" align="right">
							Inloggen
						</Title>
					</TouchableOpacity>
				</View>
			</View>

			{debugMode ? (
				<Body variant="b3" align="center">{`${version} beta`}</Body>
			) : (
				<></>
			)}

			<Swiper
				loop={false}
				dotColor={ppBaseColors.PP_GRAY}
				activeDotColor={appColors.primary}
				ref={swiperRef}>
				{onboardingViews.map((view, index) => (
					<OnboardingItem
						view={view}
						key={view.title}
						buttonAction={swiperRef?.current}
						navigation={navigation}
						isLastItem={onboardingViews.length - 1 === index}
					/>
				))}
			</Swiper>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexdirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	right: {
		position: 'absolute',
		margin: 5,
		right: 0,
	},
	headerTitle: {
		color: appColors.primary,
	},
	buttonLabel: {
		color: appColors.greyedOut,
	},
});

OnboardingScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default OnboardingScreen;
