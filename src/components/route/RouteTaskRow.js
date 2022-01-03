import React, { memo } from 'react';

import PropTypes from 'prop-types';
import {
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

import routes from '../../App/stacks/routes';
import Badge from '../../assets/svg/Badge';
import theme from '../../config/theme';
import Title from '../typography/Title';

const CIRCLE_RADIUS = 30;

const RouteTaskRow = ({
	task: { task, status },
	index,
	navigation,
	routeId,
	tasksToDo,
}) => {
	const isCompleted = status === 'Completed';
	const isCurrentTask =
		tasksToDo.length > 0 &&
		tasksToDo[0].task.taskId === task.taskId;

	const doNavigate = () => {
		navigation.navigate(
			routes.routeStack.screens.taskScreen,
			{
				routeId,
				task: { ...task, status },
			},
		);
	};

	return (
		<TouchableOpacity onPress={doNavigate}>
			<View
				style={[
					styles.container,
					index % 2 === 0 && styles.background,
				]}
			>
				<View
					style={[
						styles.circleStepIndicator,
						isCurrentTask && styles.circleActive,
						isCompleted && styles.circleDisabled,
					]}
				>
					<Title
						variant="h6"
						style={styles.label}
					>
						{index}
					</Title>
				</View>
				<Title
					style={[
						styles.title,
						isCompleted && styles.disabled,
					]}
					variant="h5"
				>
					{task.title}
				</Title>
				{isCompleted && (
					<AnimatableView
						animation="bounceIn"
						delay={200}
					>
						<Badge style={styles.badge} />
					</AnimatableView>
				)}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		padding: theme.spacing.m,
	},
	circleStepIndicator: {
		backgroundColor: theme.colors.secondary,
		height: CIRCLE_RADIUS,
		width: CIRCLE_RADIUS,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: theme.spacing.s,
	},
	circleDisabled: {
		backgroundColor: theme.colors.subtleGrey,
	},
	circleActive: {
		backgroundColor: theme.colors.primary,
	},
	label: {
		color: theme.colors.white,
		marginLeft: 1,
	},
	title: {
		width: '70%',
	},
	disabled: {
		flexGrow: 1,
		color: theme.colors.subtleGrey,
	},
	badge: {
		marginLeft: theme.spacing.xxs,
	},
	background: {
		backgroundColor:
			theme.colors.taskRowBackground,
	},
});

RouteTaskRow.propTypes = {
	task: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	navigation: PropTypes.object.isRequired,
	routeId: PropTypes.string.isRequired,
	tasksToDo: PropTypes.array.isRequired,
};

export default memo(RouteTaskRow);
