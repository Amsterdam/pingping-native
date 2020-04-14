import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Content, Container, Text, Left, Right} from 'native-base';
import TaskTile from '../components/TaskTile';
import Button from '../components/Button';
import Title from '../components/typography/Title';
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
});

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
          <TaskTile
            task={{title: 'zorgverzekering aanvragen'}}
            navigation={navigation}
          />
          <TaskTile
            task={{title: 'zorgverzekering aanvragen'}}
            navigation={navigation}
          />
          <TaskTile
            task={{title: 'zorgverzekering aanvragen'}}
            navigation={navigation}
          />
          <TaskTile
            task={{title: 'zorgverzekering aanvragen'}}
            navigation={navigation}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default RouteHomeScreen;
