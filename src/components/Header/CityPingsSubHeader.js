import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';
import {ppBaseColors} from '../../lib/colors';
import Title from '../typography/Title';
import CityPings from '../svgComponents/CityPings';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: ppBaseColors.PP_DARK_BLUE,
    padding: 20,
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subHeaderLabel: {color: '#fff', paddingBottom: 20},
  flexContainer: {flexDirection: 'row', alignItems: 'flex-end'},
  buttonLabel: {fontSize: 14, color: ppBaseColors.PP_WHITE},
  cityPingsLogo: {marginRight: 10},
  cityPingsSum: {color: ppBaseColors.PP_GOLD},
  button: {borderColor: ppBaseColors.PP_WHITE},
});

const CityPingsSubHeader = ({
  navigation,
  showButton = true,
  subHeaderLabel = null,
}) => {
  return (
    <View style={styles.headerContainer}>
      {subHeaderLabel && (
        <Title style={styles.subHeaderLabel}>{subHeaderLabel}</Title>
      )}
      <View style={styles.subHeaderContainer}>
        <View style={styles.flexContainer}>
          <CityPings style={styles.cityPingsLogo} />
          <Title style={styles.cityPingsSum}>80</Title>
        </View>
        {showButton && (
          <Button
            transparent
            style={styles.button}
            bordered
            onPress={() => navigation.navigate('YourPerformance')}>
            <Title style={styles.buttonLabel}>Mijn prestaties</Title>
          </Button>
        )}
      </View>
    </View>
  );
};

export default CityPingsSubHeader;
