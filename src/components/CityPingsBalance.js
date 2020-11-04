import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import ProgressBar from './ProgressBar';
import CityPingCoin from '../assets/svg/CityPingCoin';
import {appColors} from '../config/colors';
import Body from './typography/Body';

const CityPingsBalance = ({price = 0, balance = 0}) => {
  const progress = balance / price;

  return (
    <View style={styles.balanceContainer}>
      <View style={styles.saldo}>
        <CityPingCoin />
        <Body style={styles.savings}>
          {balance} / {price} CityPings
        </Body>
      </View>
      <ProgressBar progress={progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  savings: {
    marginLeft: 5,
    color: appColors.greyedOut,
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saldo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CityPingsBalance.propTypes = {
  price: PropTypes.number.isRequired,
  balance: PropTypes.number,
};

CityPingsBalance.defaultProps = {
  balance: 0,
};

export default CityPingsBalance;
