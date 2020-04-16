import React from 'react';
import {View, StyleSheet, FlatList, findNodeHandle} from 'react-native';
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
    return (
      <Container>
        <HeaderTemplate style={styles.header} statusBarColor="dark-content">
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
              <Title style={styles.taskTitle}>Regel je woonadres</Title>
              <Body style={styles.taskDescription}>
                Je hebt eerst een adres nodig. Daarna kan je andere zaken
                regelen.
              </Body>
              <Button label="Regel je woonadres" rounded />
            </View>
          </ContentLayout>
        </Content>
      </Container>
    );
  }
}

export default RouteHomeScreen;
