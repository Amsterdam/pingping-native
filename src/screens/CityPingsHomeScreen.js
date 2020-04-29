import React from 'react';
import {View, StyleSheet} from 'react-native';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container, Text, Button} from 'native-base';
import Title from '../components/typography/Title';
import {ppBaseColors} from '../lib/colors';
import CityPings from '../components/svgComponents/CityPings';
import ContentLayout from '../components/layout/ContentLayout';
import RewardCard from '../components/RewardCard';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: ppBaseColors.PP_DARK_BLUE,
    padding: 20,
  },
  flexContainer: {flexDirection: 'row', alignItems: 'flex-end'},
  buttonLabel: {fontSize: 14, color: ppBaseColors.PP_WHITE},
  cityPingsLogo: {marginRight: 10},
  cityPingsSum: {color: ppBaseColors.PP_GOLD},
  button: {borderColor: ppBaseColors.PP_WHITE},
});

const CityPingsHomeScreen = ({navigation}) => {
  return (
    <Container>
      <RouteHeader title="Citypings" />
      <Content>
        <View style={styles.headerContainer}>
          <View style={styles.flexContainer}>
            <CityPings style={styles.cityPingsLogo} />
            <Title style={styles.cityPingsSum}>80</Title>
          </View>
          <Button
            transparent
            style={styles.button}
            bordered
            onPress={() => navigation.navigate('YourPerformance')}>
            <Title style={styles.buttonLabel}>Mijn prestaties</Title>
          </Button>
        </View>
        <ContentLayout>
          <RewardCard navigation={navigation} />
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default CityPingsHomeScreen;
