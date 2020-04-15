import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container, Text} from 'native-base';

const styles = StyleSheet.create({});

const KasboekHomeScreen = props => {
  return (
    <Container>
      <RouteHeader title="Goals" />
      <Content>
        <Text>KasboekHomeScreen</Text>
      </Content>
    </Container>
  );
};

export default KasboekHomeScreen;
