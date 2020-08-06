import React from 'react';
import {StyleSheet, View} from 'react-native';
import CityPingCoin from '../assets/svg/CityPingCoin';
import Title from '../components/typography/Title';
import {ppBaseColors} from '../lib/colors';

const styles = StyleSheet.create({
  cpBalance: {
    backgroundColor: ppBaseColors.PP_DARK_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  cpLabel: {
    color: '#fff',
    fontSize: 12,
    paddingTop: 5,
  },
  coin: {
    marginRight: 5,
  },
});

const CitypingsChip = ({value = 0}) => {
  return (
    <View style={styles.cpBalance}>
      <CityPingCoin style={styles.coin} />
      <Title style={styles.cpLabel}>{value} CityPings</Title>
    </View>
  );
};

export default CitypingsChip;
