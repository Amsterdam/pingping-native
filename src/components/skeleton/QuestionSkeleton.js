import React from 'react';

import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {appColors} from '../../config/colors';
import {BORDER_RADIUS} from '../../config/commonStyles';

const QuestionSkeleton = () => (
  <View style={styles.container}>
    <SkeletonPlaceholder>
      <View style={styles.row}>
        <View style={styles.backButton} />
        <View style={styles.headerTitle} />
        <View style={styles.progressBar} />
      </View>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.title} />
          <View style={styles.subTitle} />
        </View>
        <View>
          <View style={styles.button} />
          <View style={styles.button} />
        </View>
        <View>
          <View style={styles.nextButton} />
        </View>
      </View>
    </SkeletonPlaceholder>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  subContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  headerTitle: {width: 100, height: 20, borderRadius: 10, marginTop: 10},
  progressBar: {width: 70, height: 20, borderRadius: 10, marginTop: 10},
  title: {width: '100%', height: 40, borderRadius: 10, marginTop: 10},
  subTitle: {width: '80%', height: 40, marginTop: 6, borderRadius: 10},
  button: {
    marginTop: 6,
    width: '100%',
    height: 50,
    borderRadius: BORDER_RADIUS,
  },
  nextButton: {
    marginTop: 6,
    width: 100,
    height: 25,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  row: {
    marginTop: 25,
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default QuestionSkeleton;
