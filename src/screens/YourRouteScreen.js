import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Content, Container, Text} from 'native-base';
import Button from '../components/Button';
import Title from '../components/typography/Title';
import HeaderTemplate from '../components/header/HeaderTemplate';

const styles = StyleSheet.create({});

const YourRouteScreen = props => {
  return (
    <Container>
      <HeaderTemplate style={styles.header} statusBarColor="dark-content">
        <Title style={styles.title}>Je Route!</Title>
        <Button
          onPress={() => navigation.navigate('YourRoute')}
          label="Bekijk je route"
          transparent
          labelStyle={styles.label}
          style={styles.button}
        />
      </HeaderTemplate>
      <Content>
        <Text>YourRouteScreen</Text>
      </Content>
    </Container>
  );
};

export default YourRouteScreen;
