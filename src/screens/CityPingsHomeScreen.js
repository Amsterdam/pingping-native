import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container, Text} from 'native-base';

const styles = StyleSheet.create({});

const CityPingsHomeScreen = props => {
  return (
    <Container>
      <RouteHeader title="Citypings" />
      <Content>
        <Text>CityPingsHomeScreen</Text>
      </Content>
    </Container>
  );
};

export default CityPingsHomeScreen;
