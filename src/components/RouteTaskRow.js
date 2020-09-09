import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'native-base';
import Title from './typography/Title';
import {appColors} from '../config/colors';

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
    navigation.navigate('TaskScreen', {
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
          {isCompleted ? (
            <Icon name="check" type="Entypo" style={styles.icon} />
          ) : (
            <Title style={styles.label}>{index}</Title>
          )}
        </View>
        <Title style={isCompleted ? styles.disabled : styles.title}>
          {task.title}
        </Title>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#fff',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
  },
  disabled: {
    color: appColors.subtleGrey,
    fontSize: 16,
  },
  background: {
    backgroundColor: 'rgba(191, 233, 238, 0.3)',
  },
  icon: {
    color: '#fff',
    fontSize: 12,
  },
});

RouteTaskRow.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
  routeId: PropTypes.string.isRequired,
};

export default memo(RouteTaskRow);
