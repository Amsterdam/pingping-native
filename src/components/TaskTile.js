import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Title from '../components/typography/Title';
import {Text} from 'native-base';
import {appColors} from '../lib/colors';

const MARGIN = 10;

const styles = StyleSheet.create({
  tileContainer: {
    marginTop: MARGIN,
    marginLeft: MARGIN,
    backgroundColor: appColors.primaryColor,
    justifyContent: 'space-between',
    borderRadius: 8,
    height: 150,
    width: 250,
    padding: 14,
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
  taskLabel: {fontSize: 22, color: '#fff'},
  imageAndLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLine: {
    backgroundColor: '#000',
    height: 10,
    flex: 1,
    borderRadius: 100,
  },
  progressBullet: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#000',
  },
});

const TaskTile = ({benefit, navigation, benefits}) => {
  console.log(navigation.state);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <View style={styles.tileContainer}>
          <View style={styles.imageAndLabelContainer}>
            <View style={styles.imageContainer}>
              <Text>😙</Text>
            </View>
            <View>
              <View style={styles.labelContainer}>
                <Title style={styles.label}>20 City Pings</Title>
              </View>
            </View>
          </View>
          <View>
            <Title style={styles.taskLabel}>Regel je woonadres</Title>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.progressContainer}>
        <View style={styles.progressLine} />
        <View style={styles.progressBullet} />
        <View style={styles.progressLine} />
      </View>
    </View>
  );
};

export default TaskTile;
