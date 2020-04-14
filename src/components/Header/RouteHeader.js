import React from 'react';
import HeaderTemplate from '../header/HeaderTemplate';
import {StyleSheet} from 'react-native';
import Title from '../../components/typography/Title';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 15,
  },
  title: {
    color: '#fff',
    fontSize: 36,
  },
});

const RouteHeader = ({title = ''}) => {
  return (
    <HeaderTemplate style={styles.header}>
      <Title style={styles.title}>{title}</Title>
    </HeaderTemplate>
  );
};

export default RouteHeader;
