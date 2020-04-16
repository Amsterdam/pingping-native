import React from 'react';
import {View, StyleSheet} from 'react-native';
import {appColors, ppBaseColors} from '../lib/colors';
import {Icon} from 'native-base';

const styles = StyleSheet.create({
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
  successBullet: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: ppBaseColors.PP_PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});

const ProgressLine = ({index, tasksLength, vertical = false, success}) => {
  const generateContainerStyle = () => {
    if (vertical) {
      return {
        ...styles.progressContainer,
        flexDirection: 'column',
        marginTop: 0,
      };
    }
    return styles.progressContainer;
  };

  const generateLineStyle = trailingLine => {
    if (index === 0 && !vertical && !trailingLine) {
      return styles.progressLineHidden;
    }
    if (index === tasksLength - 1 && trailingLine && !vertical) {
      return styles.progressLineHidden;
    }
    if (vertical) {
      return {...styles.progressLine, width: 10};
    }

    return styles.progressLine;
  };

  if (success) {
    return (
      <View style={generateContainerStyle()}>
        <View style={generateLineStyle()} />
        <View style={styles.successBullet}>
          <Icon style={styles.icon} name="medal" type="Entypo" />
        </View>
        <View style={styles.progressLineHidden} />
      </View>
    );
  }
  return (
    <View style={generateContainerStyle()}>
      <View style={generateLineStyle(false)} />
      <View style={styles.progressBullet}>
        <View style={styles.progressBulletInner} />
      </View>
      <View style={generateLineStyle(true)} />
    </View>
  );
};

export default ProgressLine;
