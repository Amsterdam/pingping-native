import React from 'react';

import { useQuery } from '@apollo/client';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import {
	Animated,
	StatusBar,
	StyleSheet,
	View,
	ScrollView,
} from 'react-native';

import GET_AVAILABLE_REWARDS from '../apollo/Query/getAvailableRewards';
import GET_ROUTES from '../apollo/Query/getRoutes';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';
import confettiCelebration from '../assets/lottieFiles/confetti-celebration.json';
import CityPingsCoin from '../assets/svg/CityPingCoin';
import ContentLayout from '../components/layout/ContentLayout';
import ChevronButton from '../components/reward/ChevronButton';
import RewardCardMini from '../components/reward/RewardCardMini';
import RouteCard from '../components/route/RouteCard';
import CitypingsChip from '../components/shared/CitypingsChip';
import Container from '../components/shared/Container';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import { commonStyles } from '../config/commonStyles';
import theme from '../config/theme';

const HEADER_HEIGHT = 200;

const CompletedRouteCelebrationModalScreen = ({
	navigation,
	route,
}) => {
	const { pings } = route.params;
	const routeData = useQuery(GET_ROUTES, {
		fetchPolicy: 'cache-and-network',
	});
	const rewardData = useQuery(
		GET_AVAILABLE_REWARDS,
		{
			fetchPolicy: 'cache-and-network',
		},
	);
	const me = useQuery(GET_STATUS_QUERY, {
		fetchPolicy: 'cache-and-network',
	});

	const scrollY = new Animated.Value(0);
	const translateY = scrollY.interpolate({
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
	});

	let balance = 0;
	const availableRoutes =
		routeData?.data?.getRoutes?.availableRoutes;
	const availableRewards =
		rewardData?.data?.getAvailableRewards;
	balance = me.data?.getStatus?.user?.balance;

	return (
		<Container>
			<StatusBar
				backgroundColor={theme.colors.primary}
				barStyle="light-content"
			/>

			<Animated.View
				style={[
					styles.header,
					{
						transform: [
							{ translateY: translateY },
						],
					},
				]}
			/>

			<ScrollView
				onScroll={e => {
					scrollY.setValue(
						e.nativeEvent.contentOffset.y,
					);
				}}
				scrollEventThrottle={16}
				contentContainerStyle={styles.content}
			>
				<ContentLayout>
					<View style={styles.headerContainer}>
						<Title
							style={styles.title}
							variant="h3"
							align="left"
						>
							GOED BEZIG!
						</Title>
						<CitypingsChip value={balance} />
					</View>
					<View style={styles.paper}>
						<LottieView
							source={confettiCelebration}
							autoPlay
							loop
							resizeMode="cover"
							style={styles.lottieView}
						/>
						<Body variant="b3" align="center">
							Je hebt weer een aantal CityPings
							verdiend!
						</Body>
						<View style={styles.coinContainer}>
							<CityPingsCoin
								height={30}
								width={30}
							/>
						</View>
						<Title>{pings}</Title>
					</View>

					{availableRewards?.length > 0 && (
						<View style={styles.blockContainer}>
							<View style={styles.rowFlex}>
								<Title
									style={styles.subTitle}
									variant="h3"
									align="left"
								>
									Verzilveren
								</Title>
								<ChevronButton
									onPress={() =>
										navigation.navigate(
											routes.citypingsStack
												.screens.homeScreen,
											{
												screen: 'Main',
												initial: false,
											},
										)
									}
								/>
							</View>
							<View style={styles.rowFlex}>
								{availableRewards.map(reward => (
									<RewardCardMini
										navigation={navigation}
										reward={reward}
										key={reward.rewardId}
										balance={balance}
									/>
								))}
							</View>
						</View>
					)}

					{availableRoutes?.length > 0 && (
						<View style={styles.blockContainer}>
							<View style={styles.rowFlex}>
								<Title
									variant="h3"
									style={styles.subTitle}
								>
									Nieuwe Route
								</Title>
								<ChevronButton
									onPress={() =>
										navigation.navigate(
											routes.routeStack.name,
											{
												screen:
													routes.routeStack
														.screens.homeScreen,
											},
										)
									}
								/>
							</View>
							<View>
								{availableRoutes.map(
									availableRoute => (
										<RouteCard
											navigation={navigation}
											route={availableRoute}
											key={availableRoute.routeId}
										/>
									),
								)}
							</View>
						</View>
					)}
				</ContentLayout>
			</ScrollView>
			<View style={styles.underLayer} />
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'column',
		backgroundColor: theme.colors.primary,
		height: HEADER_HEIGHT,
		left: 0,
		top: 0,
		right: 0,
		position: 'absolute',
	},
	coinContainer: {
		marginVertical: theme.spacing.s,
	},
	paper: {
		...commonStyles.shadow,
		backgroundColor: theme.colors.background,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadius,
		marginVertical: theme.spacing.m,
		padding: theme.spacing.s,
		alignItems: 'center',
	},
	content: {
		position: 'absolute',
		top: 25,
		paddingBottom: theme.spacing.multiplier(15),
	},
	underLayer: {
		position: 'absolute',
		flex: 1,
		zIndex: -1,
		elevation: 0,
		backgroundColor: theme.colors.almostNotBlue,
		top: 100, // replace this with a percentage of the screenheight to be responsive
		bottom: 0,
		left: 0,
		right: 0,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rowFlex: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	blockContainer: {
		marginBottom: theme.spacing.m,
	},
	lottieView: {
		margin: theme.spacing.xxs,
	},
	title: {
		color: theme.colors.white,
	},
});

CompletedRouteCelebrationModalScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default CompletedRouteCelebrationModalScreen;
