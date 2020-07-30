import React from 'react';
import HeaderTemplate from '../header/HeaderTemplate';
import {StyleSheet} from 'react-native';
import Title from '../../components/typography/Title';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 14,
  },
});

const RouteHeader = ({title = ''}) => {
  return (
    <HeaderTemplate style={styles.header} color="primary">
      <Title style={styles.title}>{title}</Title>
    </HeaderTemplate>
  );
};

export default RouteHeader;
