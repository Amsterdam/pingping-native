import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const QuestionSkeleton = () => (
  <SkeletonPlaceholder>
    <View style={styles.container}>
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
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  questionContainer: {
    justifyContent: 'center',
  },
  title: {width: '100%', height: 40, borderRadius: 8, marginTop: 10},
  subTitle: {width: '80%', height: 40, marginTop: 6, borderRadius: 8},
  button: {marginTop: 6, width: '100%', height: 50, borderRadius: 30},
  nextButton: {
    marginTop: 6,
    width: 100,
    height: 25,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
});
export default QuestionSkeleton;
