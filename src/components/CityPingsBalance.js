import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import CityPingCoin from '../assets/svg/CityPingCoin';
import {appColors, ppBaseColors} from '../lib/colors';
import Body from './typography/Body';

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

const CityPingsBalance = ({price, balance}) => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.saldo}>
        <CityPingCoin />
        <Body style={styles.savings}>
          {balance} / {price} CityPings
        </Body>
      </View>
      <Progress.Bar
        progress={balance / price}
        width={50}
        color={appColors.secondary}
        unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
        borderWidth={0}
        height={10}
      />
    </View>
  );
};

export default CityPingsBalance;
