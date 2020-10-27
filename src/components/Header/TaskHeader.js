import React from 'react';
import {StyleSheet, StatusBar, View, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import {appColors} from '../../config/colors';
import HeaderBackButton from './HeaderBackButton';

// The build up of this header fixes an issue on smaller android devices
// When playing youtube videos

const TaskHeader = ({title = '', navigation = () => {}}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header} transparent noShadow>
        <StatusBar
          barStyle="light-content"
          backgroundColor={appColors.headerColor}
        />
        <View style={styles.backButton}>
          <HeaderBackButton navigation={navigation} color="black" />
        </View>
        <Title style={styles.headerTitle}>{title}</Title>
        <View style={styles.flex1} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: appColors.headerColor,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.white,
    textAlign: 'center',
  },
  safeArea: {
    backgroundColor: appColors.headerColor,
  },
  backButton: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
});

TaskHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object.isRequired,
};

TaskHeader.defaultProps = {
  title: '',
};

export default TaskHeader;
