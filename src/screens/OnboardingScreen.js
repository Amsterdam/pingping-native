/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect, useState } from 'react';

import { StyleSheet, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';

import testIDs from '../../e2e/modulesTestIDs';
import { version } from '../../package.json';
import routes from '../App/stacks/routes';
import Header from '../components/header/Header';
import OnboardingFooter from '../components/onboarding/OnboardingFooter';
import OnboardingPage from '../components/onboarding/OnboardingPage';
import Container from '../components/shared/Container';
import TextButton from '../components/shared/TextButton';
import Body from '../components/typography/Body';
import onboardingViews from '../config/onboardingContent';
import { getFromAsyncStorage, setAsyncStorage } from '../helpers/asyncStorageHelpers';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

function OnboardingScreen({ navigation }) {
	const pagerRef = useRef(null);
	const scrollOffsetAnimatedValue = useRef(new Animated.Value(0)).current;
	const positionAnimatedValue = useRef(new Animated.Value(0)).current;
	const [activePage, setActivePage] = useState(0);
	const isLastPage = activePage + 1 === onboardingViews.length;

	useEffect(() => {
		const checkOnboardingStatus = async () => {
			const onboardingStatus = await getFromAsyncStorage('@pingpingNative_onboardingStatus');

			switch (onboardingStatus) {
				case 'SWIPER_COMPLETED':
					navigation.navigate(routes.onboardingStack.screens.privacyPolicyScreen, {
						fromOnboarding: true,
					});
					break;
				case 'QUESTIONS_STARTED':
					navigation.navigate(routes.onboardingStack.screens.questionScreen);
					break;
				case 'QUESTIONS_FINISHED':
					navigation.navigate(routes.onboardingStack.screens.notificationDecisionScreen);
					break;
				default:
					break;
			}
		};
		checkOnboardingStatus();
	}, [navigation]);

	const handlePageSelected = ({ nativeEvent: { position } }) => {
		setActivePage(position);
	};

	const handlePageChange = async (value) => {
		if (isLastPage && value === 1) {
			await setAsyncStorage('@pingpingNative_onboardingStatus', 'SWIPER_COMPLETED');
			return navigation.navigate(routes.onboardingStack.screens.privacyPolicyScreen, {
				fromOnboarding: true,
			});
		}
		return pagerRef.current.setPage(activePage + value);
	};

	return (
		<Container testID={testIDs.ONBOARDING.SCREEN} safeArea>
			<Header
				title="INTRODUCTIE"
				actionLabel="INLOGGEN"
				right={
					<TextButton
						onPress={() =>
							navigation.navigate(routes.onboardingStack.screens.importDataScreen)
						}
						testID={testIDs.ONBOARDING.LOG_IN_BUTTON}
						label="INLOGGEN"
					/>
				}
			/>
			{__DEV__ && <Body variant="b3" align="center">{`${version} beta`}</Body>}
			<AnimatedPagerView
				style={styles.pagerView}
				initialPage={0}
				ref={pagerRef}
				onPageSelected={handlePageSelected}
				onPageScroll={Animated.event(
					[
						{
							nativeEvent: {
								offset: scrollOffsetAnimatedValue,
								position: positionAnimatedValue,
							},
						},
					],
					{
						useNativeDriver: true,
					}
				)}
			>
				{onboardingViews.map((page, index) => (
					<OnboardingPage key={index} pageContent={page} />
				))}
			</AnimatedPagerView>
			<OnboardingFooter
				handlePageChange={handlePageChange}
				pages={onboardingViews}
				activePage={activePage}
				positionAnimatedValue={positionAnimatedValue}
				scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
			/>
		</Container>
	);
}

const styles = StyleSheet.create({
	pagerView: {
		flex: 1,
	},
});

export default OnboardingScreen;
