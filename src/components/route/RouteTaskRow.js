import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';

import routes from '../../App/stacks/routes';
import Badge from '../../assets/svg/Badge';
import {appColors, ppBaseColors} from '../../config/colors';
import Title from '../typography/Title';

const CIRCLE_RADIUS = 30;

const RouteTaskRow = ({
  task: {task, status},
  index,
  navigation,
  routeId,
  tasksToDo,
}) => {
  const isCompleted = status === 'Completed';
  const isCurrentTask =
    tasksToDo.length > 0 && tasksToDo[0].task.taskId === task.taskId;

  const doNavigate = () => {
    navigation.navigate(routes.routeStack.taskScreen, {
      routeId,
      task: {...task, status},
    });
  };

  return (
    <TouchableOpacity onPress={doNavigate}>
      <View style={[styles.container, index % 2 === 0 && styles.background]}>
        <View
          style={[
            styles.circleStepIndicator,
            isCurrentTask && styles.circleActive,
            isCompleted && styles.circleDisabled,
          ]}>
          <Title variant="h6" style={styles.label}>
            {index}
          </Title>
        </View>
        <Title
          style={[styles.title, isCompleted && styles.disabled]}
          variant="h5">
          {task.title}
        </Title>
        {isCompleted && (
          <AnimatableView animation="bounceIn" delay={200}>
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
    padding: 20,
  },
  circleStepIndicator: {
    backgroundColor: appColors.secondary,
    height: CIRCLE_RADIUS,
    width: CIRCLE_RADIUS,
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  circleDisabled: {
    backgroundColor: appColors.subtleGrey,
  },
  circleActive: {
    backgroundColor: appColors.primary,
  },
  label: {
    color: ppBaseColors.PP_WHITE,
    marginLeft: 1,
  },
  title: {
    width: '70%',
  },
  disabled: {
    flexGrow: 1,
    color: appColors.subtleGrey,
  },
  badge: {marginLeft: 5},
  background: {
    backgroundColor: appColors.taskRowBackground,
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
