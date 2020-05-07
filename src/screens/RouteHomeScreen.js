import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import TaskTile from '../components/TaskTile';
import Button from '../components/Button';
import FloatingActionButton from '../components/FloatingActionButton';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import HeaderTemplate from '../components/header/HeaderTemplate';
import OvalDefault from '../components/layout/OvalDefault';
import Modal from '../components/Modal';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  label: {fontSize: 14, fontFamily: 'Raleway'},
  title: {fontSize: 30},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  currentActionContainer: {marginTop: 20},
  taskTitle: {fontSize: 20, marginBottom: 20, flex: 1},
  taskDescription: {marginBottom: 20},
});

const tasks = [
  {
    title: 'zorgverzekering aanvragen',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: true,
    current: false,
  },
  {
    title: 'zorgverzekering aanvragen1',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: false,
  },
  {
    title: 'zorgverzekering aanvragen2',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: false,
  },
  {
    title: 'zorgverzekering aanvragen3',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: false,
  },
  {
    title: 'zorgverzekering aanvragen4',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: false,
  },
  {
    title: 'zorgverzekering aanvragen5',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: true,
  },
  {
    title: 'zorgverzekering aanvragen6',
    description:
      'Je hebt eerst een adres nodig. Daarna kan je andere zaken regelen.',
    actionLabel: 'Regel je woonadres',
    cityPingValue: 20,
    completed: false,
    current: false,
  },
];

class RouteHomeScreen extends React.Component {
  getItemLayout = (data, index) => ({length: 250, offset: 240 * index, index});

  state = {ref: null};

  onRefChange = node => {
    this.setState({ref: node});
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      const indexOfTask = tasks.findIndex(task => task.current === true);
      if (this.state.ref && indexOfTask > 0) {
        this.state.ref.scrollToIndex({
          index: indexOfTask,
          animated: true,
        });
      }
    }, 500);
  };

  render() {
    const {navigation} = this.props;
    const currentTask = tasks.filter(task => task.current === true)[0];
    return (
      <Container>
        <Modal navigation={navigation} />
        <OvalDefault />
        <HeaderTemplate style={styles.header} color="white">
          <Title style={styles.title}>Je Route!</Title>
          <Button
            onPress={() =>
              navigation.navigate('YourRoute', {
                tasks,
              })
            }
            label="Bekijk je route"
            transparent
            labelStyle={styles.label}
            style={styles.button}
          />
        </HeaderTemplate>
        <Content>
          <FlatList
            data={tasks}
            horizontal
            ref={this.onRefChange}
            getItemLayout={this.getItemLayout}
            renderItem={({item, index}) => (
              <TaskTile
                task={item}
                index={index}
                navigation={navigation}
                tasksLength={tasks.length}
              />
            )}
            keyExtractor={item => item.title}
          />

          <ContentLayout>
            <View style={styles.currentActionContainer}>
              <View style={styles.titleContainer}>
                <Title style={styles.taskTitle}>{currentTask.title}</Title>
                <FloatingActionButton
                  onPress={() => navigation.navigate('Tip')}
                />
              </View>

              <Body style={styles.taskDescription}>
                {currentTask.description}
              </Body>
              <Button
                label="Regel je woonadres"
                rounded
                onPress={() =>
                  navigation.navigate('Task', {
                    task: currentTask,
                  })
                }
              />
            </View>
          </ContentLayout>
        </Content>
      </Container>
    );
  }
}

export default RouteHomeScreen;
