import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Title from '../components/typography/Title';
import ProgressLine from '../components/ProgressLine';
import {Text} from 'native-base';
import {appColors} from '../lib/colors';

const MARGIN = 10;

const styles = StyleSheet.create({
  tileContainer: {
    marginTop: MARGIN,
    marginLeft: MARGIN,
    backgroundColor: appColors.secondary,
    justifyContent: 'space-between',
    borderRadius: 8,
    height: 150,
    width: 250,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tileComplete: {
    backgroundColor: appColors.success,
  },
  tileCurrent: {
    backgroundColor: appColors.primaryColor,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  labelContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
    borderRadius: 100,
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  taskLabel: {fontSize: 20, color: '#fff'},
  imageAndLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  progressLine: {
    backgroundColor: appColors.accentColor,
    height: 10,
    flex: 1,
  },
  progressLineHidden: {
    backgroundColor: '#fff',
    height: 10,
    flex: 1,
    borderRadius: 100,
  },
  progressBullet: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: appColors.accentColor,
    justifyContent: 'center',
  },
  progressBulletInner: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: appColors.bullet,
    borderColor: '#fff',
    borderWidth: 2,
    alignSelf: 'center',
  },
});

const TaskTile = ({navigation, task, index, tasksLength}) => {
  const generateTileClass = () => {
    if (task.completed) {
      return {...styles.tileContainer, ...styles.tileComplete};
    }
    if (task.current) {
      return {...styles.tileContainer, ...styles.tileCurrent};
    }

    return styles.tileContainer;
  };
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Task', {task})}>
        <View style={generateTileClass()}>
          <View style={styles.imageAndLabelContainer}>
            <View style={styles.imageContainer}>
              <Text>😙</Text>
            </View>
            <View>
              <View style={styles.labelContainer}>
                <Title
                  style={
                    styles.label
                  }>{`${task.cityPingValue} City Pings`}</Title>
              </View>
            </View>
          </View>
          <View>
            <Title style={styles.taskLabel}>{task.title}</Title>
          </View>
        </View>
      </TouchableOpacity>
      <ProgressLine index={index} tasksLength={tasksLength} />
    </View>
  );
};

export default TaskTile;
