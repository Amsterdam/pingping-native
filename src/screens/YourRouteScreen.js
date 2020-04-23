import React from 'react';
import {StyleSheet} from 'react-native';
import {Content, Container, Text, Left, View} from 'native-base';
import HeaderBackButton from '../components/header/HeaderBackButton';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import HeaderTemplate from '../components/header/HeaderTemplate';
import {appColors} from '../lib/colors';
import ProgressLine from '../components/ProgressLine';
import OvalDefault from '../components/layout/OvalDefault';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  routeNameContainer: {
    backgroundColor: appColors.secondary,
    borderRadius: 5,
  },
  routeNameTitle: {
    color: '#fff',
    padding: 20,
  },
  icon: {
    fontSize: 32,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    marginTop: 20,
    paddingLeft: 20,
  },
  routeNode: {
    height: 125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelContainer: {
    width: 300,
  },
  taskLabel: {
    fontSize: 20,
  },
  contentLayoutOverride: {
    paddingBottom: 0,
  },
});

const YourRouteScreen = ({navigation}) => {
  return (
    <Container>
      <OvalDefault />
      <HeaderTemplate style={styles.header}>
        <View>
          <HeaderBackButton
            style={styles.icon}
            navigation={navigation}
            color="white"
          />
        </View>
        <Title style={styles.headerTitle}>Je Route!</Title>
      </HeaderTemplate>
      <ContentLayout style={styles.contentLayoutOverride}>
        <Content>
          <View style={styles.routeNameContainer}>
            <Title style={styles.routeNameTitle}>Fiks de basis</Title>
          </View>
          {navigation.state &&
            navigation.state.params &&
            navigation.state.params.tasks.map((task, index) => (
              <View key={task.title} style={styles.routeNode}>
                <ProgressLine
                  index={index}
                  tasksLength={navigation.state.params.tasks.length}
                  vertical
                />
                <View style={styles.labelContainer}>
                  <Title style={styles.taskLabel}>{task.title}</Title>
                </View>
              </View>
            ))}
          <View style={styles.routeNode}>
            <ProgressLine success vertical />
            <View style={styles.labelContainer}>
              <Title style={styles.taskLabel}>100 City Pings !</Title>
            </View>
          </View>
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default YourRouteScreen;
