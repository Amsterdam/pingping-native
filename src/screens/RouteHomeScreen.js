import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { Animated, RefreshControl, StyleSheet, View, ScrollView } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

import testIDs from '../../e2e/modulesTestIDs';
import GET_ROUTES from '../apollo/Query/getRoutes';
import ContentLayout from '../components/layout/ContentLayout';
import RouteCard from '../components/route/RouteCard';
import EmptyContentNotifier from '../components/shared/EmptyContentNotifier';
import ErrorComponent from '../components/shared/ErrorComponent';
import FocusAwareStatusBar from '../components/shared/FocusAwareStatusBar';
import CardSkeleton from '../components/skeleton/CardSkeleton';
import Title from '../components/typography/Title';
import { ERROR_TYPES } from '../config/constants';
import theme from '../config/theme';

const HEADER_HEIGHT = 200;

function RouteHomeScreen({ navigation }) {
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			refetch();
		});
		return unsubscribe;
	}, [navigation, refetch]);

	const scrollY = new Animated.Value(0);
	const translateY = scrollY.interpolate({
		inputRange: [0, HEADER_HEIGHT],
		outputRange: [0, -HEADER_HEIGHT],
	});

	const { data, error, refetch } = useQuery(GET_ROUTES, {
		fetchPolicy: 'cache-and-network',
	});

	const [refreshing, setRefreshing] = useState(false);

	if (error) {
		return (
			<ErrorComponent
				functionToRetry={refetch}
				issue={ERROR_TYPES.UNKNOWN_ERROR}
				navigation={navigation}
			/>
		);
	}

	const onRefresh = () => {
		setRefreshing(true);
		refetch();
		setRefreshing(false);
	};

	function compareProgress(a, b) {
		return b.progress - a.progress;
	}

	const renderRoutes = () => {
		const {
			availableRoutes,
			currentRoutes,
			//   archivedRoutes,
		} = data.getRoutes;

		const suggestedRoutes = [];
		const otherRoutes = [];
		const mergedRoutes = [...availableRoutes, ...currentRoutes];
		mergedRoutes.forEach((route) => {
			if (route.isSuggested) {
				return suggestedRoutes.push(route);
			}
			return otherRoutes.push(route);
		});

		suggestedRoutes.sort(compareProgress);
		otherRoutes.sort(compareProgress);

		return (
			<AnimatableView animation="fadeIn">
				{suggestedRoutes.length > 0 && (
					<>
						<Title style={styles.title} variant="h2" align="left">
							Aanbevolen
						</Title>
						{suggestedRoutes.map((route) => (
							<RouteCard navigation={navigation} route={route} key={route.routeId} />
						))}
					</>
				)}

				<>
					<Title
						variant="h3"
						align="left"
						style={suggestedRoutes.length > 0 ? styles.subTitle : styles.title}
					>
						Andere life events
					</Title>

					<EmptyContentNotifier text="In de toekomst krijg je een notificatie wanneer een nieuwe route beschikbaar is." />

					{otherRoutes.map((route) => (
						<RouteCard navigation={navigation} route={route} key={route.routeId} />
					))}
				</>
			</AnimatableView>
		);
	};

	return (
		<View style={styles.container} testID={testIDs.ROUTES.SCREEN}>
			<View style={styles.underLayer} testID={testIDs.ROUTES.ANIMATED_VIEW} />
			<FocusAwareStatusBar
				backgroundColor={theme.colors.headerColor}
				barStyle="light-content"
			/>
			<Animated.View
				style={[
					styles.header,
					{
						transform: [{ translateY }],
					},
				]}
			/>

			<ScrollView
				onScroll={(e) => {
					scrollY.setValue(e.nativeEvent.contentOffset.y);
				}}
				scrollEventThrottle={16}
				contentContainerStyle={styles.content}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						tintColor={theme.colors.primary}
						style={{
							backgroundColor: theme.colors.headerColor,
						}}
					/>
				}
			>
				<ContentLayout>
					{!data ? (
						<AnimatableView animation="fadeIn">
							<CardSkeleton />
							<CardSkeleton />
						</AnimatableView>
					) : (
						renderRoutes()
					)}
				</ContentLayout>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.headerColor,
		position: 'relative',
	},
	header: {
		flexDirection: 'column',
		backgroundColor: theme.colors.headerColor,
		height: HEADER_HEIGHT,
		left: 0,
		top: 0,
		right: 0,
		position: 'absolute',
	},
	title: {
		color: theme.colors.white,
	},
	subTitle: {
		color: theme.colors.primary,
		marginVertical: theme.spacing.xs,
	},
	content: {
		top: 25,
		paddingBottom: theme.spacing.multiplier(15),
	},
	underLayer: {
		position: 'absolute',
		flex: 1,
		zIndex: -5,
		elevation: 0,
		backgroundColor: theme.colors.almostNotBlue,
		top: 100, // replace this with a percentage of the screenheight to be responsive
		bottom: 0,
		left: 0,
		right: 0,
	},
});

RouteHomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default RouteHomeScreen;
