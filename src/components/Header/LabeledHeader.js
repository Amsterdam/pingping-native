import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Header, Left, Right} from 'native-base';
import Title from '../typography/Title';
import HeaderBackButton from './HeaderBackButton';
import {appColors} from '../../config/colors';

const LabeledHeader = ({
  navigation = () => {},
  filledHeader = false,
  title = 'none',
}) => {
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

LabeledHeader.propTypes = {
  navigation: PropTypes.func.isRequired,
  filledHeader: PropTypes.bool,
  title: PropTypes.object,
};
LabeledHeader.propTypes = {
  filledHeader: false,
  title: '',
};

export default LabeledHeader;
