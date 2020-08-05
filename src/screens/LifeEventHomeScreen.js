import React from 'react';
import {View, StyleSheet, StatusBar, Animated} from 'react-native';
import {Content, Container, Header} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Modal from '../components/Modal';
import {appColors} from '../lib/colors';
import RouteCard from '../components/RouteCard';

const HEADER_HEIGHT = 200;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    backgroundColor: appColors.headerColor,
    height: HEADER_HEIGHT,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  headerContainer: {
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'left',
  },
  subTitle: {
    color: '#000',
    marginVertical: 20,
    fontSize: 24,
    textAlign: 'left',
  },
  content: {
    position: 'absolute',
    top: 50,
    paddingBottom: 75,
  },
});

const RouteHomeScreen = ({navigation}) => {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  return (
    <Container>
      <Modal navigation={navigation} />
      <Animated.View
        style={[styles.header, {transform: [{translateY: translateY}]}]}
        transparent
        noShadow>
        <StatusBar
          backgroundColor={appColors.headerColor}
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <Title style={styles.title}>Aanbevolen</Title>
        </View>
      </Animated.View>

      <Content
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={styles.content}>
        <ContentLayout>
          <RouteCard />
          <Title style={styles.subTitle}>Andere life events</Title>
          <RouteCard />
          <RouteCard />
          <RouteCard />
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default RouteHomeScreen;
