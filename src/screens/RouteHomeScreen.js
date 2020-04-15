import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import TaskTile from '../components/TaskTile';
import Button from '../components/Button';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import HeaderTemplate from '../components/header/HeaderTemplate';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  label: {fontSize: 14, fontFamily: 'raleway'},
  title: {fontSize: 30},
  currentActionContainer: {marginTop: 20},
  taskTitle: {fontSize: 20, marginBottom: 20},
  taskDescription: {marginBottom: 20},
});

const tasks = [
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
  },
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
  },
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
  },
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
  },
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
  },
];

const RouteHomeScreen = ({navigation}) => {
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {tasks.map((task, index) => (
            <TaskTile
              task={task}
              navigation={navigation}
              index={index}
              tasksLength={tasks.length}
            />
          ))}
        </ScrollView>
        <ContentLayout>
          <View style={styles.currentActionContainer}>
            <Title style={styles.taskTitle}>Regel je woonadres</Title>
            <Body style={styles.taskDescription}>
              Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.
            </Body>
            <Button label="Regel je woonadres" rounded />
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default RouteHomeScreen;
