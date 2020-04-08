import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SimpleHeader from '../components/Header/SimpleHeader';
import {Content, Container, Text} from 'native-base';

const styles = StyleSheet.create({});

const WhatIsItScreen = props => {
  return (
    <Container>
      <SimpleHeader />
      <Content>
        <Text>WhatIsItScreen</Text>
      </Content>
    </Container>
  );
};

export default WhatIsItScreen;
