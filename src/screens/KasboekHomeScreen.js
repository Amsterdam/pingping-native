import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import RouteHeader from '../components/header/RouteHeader';
import {Content, Container} from 'native-base';
import {ppBaseColors} from '../lib/colors';
import Button from '../components/Button';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import KasboekGoalItem from '../components/KasboekGoalItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ppBaseColors.PP_DARK_BLUE,
    padding: 10,
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    marginBottom: 30,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 20,
    flex: 1,
  },
  statusBox: {
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 225,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 100,
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  existingGoalsContainer: {
    marginTop: 40,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

const KasboekHomeScreen = ({navigation}) => {
  return (
    <Container>
      <RouteHeader title="Zet je goals" />
      <Content>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Title>0 Goals</Title>
            <Body>Je hebt nog geen goals opgesteld</Body>
            <View style={styles.statusContainer}>
              <View style={styles.statusBox}>
                <Body>Nieuwe goals</Body>
                <Title>0</Title>
              </View>
              <View style={styles.statusBox}>
                <Body>Bijna afgerond</Body>
                <Title>0</Title>
              </View>
              <View style={styles.statusBox}>
                <Body>afgerond</Body>
                <Title>0</Title>
              </View>
            </View>
          </View>
          <View style={styles.absolute}>
            <View style={styles.button}>
              <Button
                label="zet nieuwe goal"
                rounded
                onPress={() => navigation.navigate('KasboekAddGoal')}
              />
            </View>
          </View>
        </View>
        <View style={styles.existingGoalsContainer}>
          <KasboekGoalItem />
        </View>
      </Content>
    </Container>
  );
};

export default KasboekHomeScreen;
