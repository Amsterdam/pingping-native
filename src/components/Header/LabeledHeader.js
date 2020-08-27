import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Header, Left, Right} from 'native-base';
import Title from '../typography/Title';
import HeaderBackButton from './HeaderBackButton';
import {appColors} from '../../lib/colors';

const LabeledHeader = ({navigation, filledHeader = false, title = 'none'}) => {
  const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      marginTop: 5,
      fontSize: 14,
      color: filledHeader ? '#fff' : appColors.primary,
    },
    filledHeader: {
      backgroundColor: appColors.headerColor,
    },
    flex: {
      flex: 1,
    },
  });

  return (
    <Header
      style={[styles.header, filledHeader && styles.filledHeader]}
      transparent
      noShadow>
      <StatusBar
        barStyle={filledHeader ? 'light-content' : 'dark-content'}
        backgroundColor={appColors.headerColor}
      />
      <Left style={styles.flex}>
        <HeaderBackButton
          color={filledHeader ? 'black' : 'white'}
          navigation={navigation}
        />
      </Left>
      <Title style={styles.headerTitle}>{title}</Title>
      <Right style={styles.flex} />
    </Header>
  );
};

export default LabeledHeader;
