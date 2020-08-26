import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Header} from 'native-base';
import Title from '../typography/Title';
import {appColors} from '../../lib/colors';

const SimpleHeader = ({title}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: appColors.background,
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 14,
      color: appColors.primary,
    },
  });
  return (
    <Header style={styles.header} transparent noShadow>
      <StatusBar barStyle="dark-content" />
      <Title style={styles.headerTitle}>{title}</Title>
    </Header>
  );
};

export default SimpleHeader;
