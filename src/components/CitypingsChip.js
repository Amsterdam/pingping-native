import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import CityPingCoin from '../assets/svg/CityPingCoin';
import Title from '../components/typography/Title';
import {ppBaseColors} from '../lib/colors';

const CitypingsChip = ({value = 0}) => {
  return (
    <View style={styles.cpBalance}>
      <CityPingCoin style={styles.coin} />
      <Title style={styles.cpLabel}>{value} CityPings</Title>
    </View>
  );
};

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

CitypingsChip.propTypes = {
  value: PropTypes.number,
};

CitypingsChip.defaultProps = {
  value: 0,
};

export default CitypingsChip;
