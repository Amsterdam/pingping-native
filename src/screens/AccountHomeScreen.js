import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container, Text} from 'native-base';

const styles = StyleSheet.create({});

const AccountHomeScreen = props => {
  return (
    <Container>
      <RouteHeader title="Gegevens" />
      <Content>
        <Text>AccountHomeScreen</Text>
      </Content>
    </Container>
  );
};

export default AccountHomeScreen;
