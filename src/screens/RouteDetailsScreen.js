import React from 'react';

import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, StyleSheet, View, StatusBar } from 'react-native';

import GET_ROUTE_QUERY from '../apollo/Query/getRoute';
import routes from '../App/stacks/routes';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import ContentLayout from '../components/layout/ContentLayout';
import RouteTaskRow from '../components/route/RouteTaskRow';
import TipsChip from '../components/route/TipsChip';
import TrophyOrProgress from '../components/route/TrophyOrProgress';
import Container from '../components/shared/Container';
import ErrorComponent from '../components/shared/ErrorComponent';
import Button from '../components/shared/RoundedButton';
import RouteDetailSkeleton from '../components/skeleton/RouteDetailsSkeleton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import { ERROR_TYPES } from '../config/constants';
import theme from '../config/theme';

const screenHeight = Dimensions.get('window').height;
function RouteDetailsScreen({ navigation, route }) {
	const { routeId } = route.params;
	const { data, error, refetch } = useQuery(GET_ROUTE_QUERY, {
		variables: {
			routeId,
		},
	});

	const numberOfSteps = data?.getRoute?.numberOfSteps;

	if (error) {
		return (
			<ErrorComponent
				functionToRetry={refetch}
				error={ERROR_TYPES.UNKNOWN_ERROR}
				navigation={navigation}
			/>
		);
	}

	if (data && data.getRoute) {
		const { totalPoints, targetAudience, progress, tips, tasks, title, description, cover } =
			data.getRoute;

		const tasksToDo = tasks.filter((task) => task.status !== 'Completed');

		const startTasks = () => {
			navigation.navigate(routes.routeStack.screens.taskScreen, {
				routeId,
				task: {
					...tasksToDo[0].task,
					status: tasksToDo[0].status,
				},
			});
		};

		return (
			<Container>
				<StatusBar backgroundColor={cover.color} barStyle="light-content" />
				<ScrollView showsVerticalScrollIndicator={false}>
					<ImageOverlayHeader
						navigate={() => navigation.navigate(routes.routeStack.screens.homeScreen)}
						cityPings={totalPoints}
						cover={cover}
					/>
					<ContentLayout>
						<Body variant="b3" style={styles.label}>
							{targetAudience}
						</Body>
						<Title style={styles.title}>{title}</Title>
						<View style={styles.balanceContainer}>
							<View style={styles.saldo}>
								<Body variant="b3" style={styles.savings}>
									{numberOfSteps} stappen
								</Body>
							</View>
							<TrophyOrProgress progress={progress} />
						</View>
						<Body variant="b3" style={styles.description}>
							{description}
						</Body>
						<Title style={styles.subtitle} variant="h3">
							De Route
						</Title>
					</ContentLayout>
					<View>
						{tasks.map((task, index) => (
							<RouteTaskRow
								routeId={routeId}
								key={task.task.taskId}
								task={task}
								index={index + 1}
								navigation={navigation}
								tasksToDo={tasksToDo}
							/>
						))}
					</View>
					<View style={styles.tipsChip}>
						<TipsChip navigation={navigation} tips={tips} />
					</View>
				</ScrollView>

				<View style={styles.buttonContainer}>
					{tasksToDo.length === 0 ? (
						<Body variant="b3">Je hebt alle taken afgerond</Body>
					) : (
						<>
							<Body variant="b3">
								{numberOfSteps === tasksToDo.length
									? 'Begin bij het begin'
									: 'Ga verder'}
							</Body>
							<Button style={styles.button} label="Let's Go" onPress={startTasks} />
						</>
					)}
				</View>
			</Container>
		);
	}
	return <RouteDetailSkeleton />;
}

const styles = StyleSheet.create({
	label: {
		color: theme.colors.primary,
	},
	title: {
		marginVertical: theme.spacing.m,
	},
	description: {
		marginTop: theme.spacing.m,
	},
	buttonContainer: {
		paddingHorizontal: theme.spacing.multiplier(8),
		marginTop: theme.spacing.m,
		marginBottom: theme.spacing.m,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	balanceContainer: {
		marginTop: theme.spacing.m,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	subtitle: {
		marginTop: theme.spacing.multiplier(8),
	},
	tipsChip: {
		position: 'absolute',
		top: screenHeight * 0.28,
		right: 25,
	},
});

RouteDetailsScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default RouteDetailsScreen;
