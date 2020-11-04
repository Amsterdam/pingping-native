import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {BORDER_RADIUS, commonStyles} from '../../config/commonStyles';

const CardSkeleton = ({withTitle = true}) => (
  <SkeletonPlaceholder>
    {withTitle ? <View style={styles.title} /> : <></>}
    <View style={[styles.paper, styles.paperShadow]}>
      <View>
        <View style={styles.image} />
        <View style={styles.container}>
          <View style={styles.text} />
          <View style={styles.subText} />
          <View style={styles.shortText} />
          <View style={styles.progress} />
        </View>
      </View>
    </View>
  </SkeletonPlaceholder>
);

const styles = StyleSheet.create({
  title: {marginVertical: 10, width: '90%', height: 30, borderRadius: 4},
  image: {width: '100%', height: 125},
  container: {marginTop: 10, padding: 20},
  text: {width: '90%', height: 20, borderRadius: 4},
  subText: {width: '80%', height: 20, marginTop: 6, borderRadius: 4},
  shortText: {marginTop: 6, width: 80, height: 20, borderRadius: 4},
  progress: {
    marginTop: 6,
    width: 50,
    height: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  paper: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 10,
  },
  paperShadow: {
    ...commonStyles.shadow,
  },
});
export default CardSkeleton;