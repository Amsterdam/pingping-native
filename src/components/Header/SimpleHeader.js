import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import {StyleSheet} from 'react-native';
import Title from '../typography/Title';
import {appColors} from '../../config/colors';

const SimpleHeader = ({title = '', color = 'primary'}) => {
  return (
    <HeaderTemplate style={styles.header} color={color}>
      <Title
        style={[
          styles.title,
          color === 'primary' && styles.titleWhite,
          color === 'white' && styles.titlePrimary,
        ]}>
        {title}
      </Title>
    </HeaderTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
  },
  titlePrimary: {
    color: appColors.primary,
  },
  titleWhite: {
    color: appColors.white,
  },
});

export default SimpleHeader;
