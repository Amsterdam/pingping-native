import React from 'react';
import {StyleSheet, StatusBar, Animated, View} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Modal from '../components/modals/CityPingsModal';
import {appColors} from '../lib/colors';
import RouteCard from '../components/RouteCard';

const HEADER_HEIGHT = 200;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.headerColor,
  },
  header: {
    flexDirection: 'column',
    backgroundColor: appColors.headerColor,
    height: HEADER_HEIGHT,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
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
    top: 25,
    paddingBottom: 75,
  },
  underLayer: {
    position: 'absolute',
    flex: 1,
    zIndex: -1,
    elevation: 0,
    backgroundColor: appColors.almostNotBlue,
    top: 100, // replace this with a percentage of the screenheight to be responsive
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const RouteHomeScreen = ({navigation}) => {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <Container style={styles.container}>
      <Modal navigation={navigation} />
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />
      <Animated.View
        style={[styles.header, {transform: [{translateY: translateY}]}]}
        transparent
        noShadow
      />

      <Content
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}>
        <ContentLayout>
          <Title style={styles.title}>Aanbevolen</Title>
          <RouteCard navigation={navigation} />
          <Title style={styles.subTitle}>Andere life events</Title>
          <RouteCard navigation={navigation} />
          <RouteCard navigation={navigation} />
          <RouteCard navigation={navigation} />
        </ContentLayout>
      </Content>
      <View style={styles.underLayer} />
    </Container>
  );
};

export default RouteHomeScreen;
