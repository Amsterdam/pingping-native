import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from 'native-base';
import DynamicStatusbar from './DynamicStatusbar';
import {setHeaderColor} from '../../lib/colors';
import HeaderBackButton from './HeaderBackButton';

const SimpleHeader = ({navigation, color = 'primary'}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: setHeaderColor(color),
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  });
  return (
    <Header style={styles.header} transparent noShadow>
      <DynamicStatusbar color={color} />
      <HeaderBackButton color={color} navigation={navigation} />
    </Header>
  );
};

export default SimpleHeader;
