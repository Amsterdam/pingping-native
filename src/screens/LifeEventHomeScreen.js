import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Animated,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import {Content, Container} from 'native-base';
import {useLazyQuery} from '@apollo/client';
import GET_ROUTES from '../apollo/Query/getRoutes';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Modal from '../components/modals/CityPingsModal';
import {appColors} from '../config/colors';
import RouteCard from '../components/RouteCard';
import ErrorComponent from '../components/ErrorComponent';
import RouteQuestionaireModal from '../components/modals/RouteQuestionaireModal';

const HEADER_HEIGHT = 200;

const RouteHomeScreen = ({navigation}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getRoutes();
    });
    return unsubscribe;
  }, [navigation, getRoutes]);

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const [getRoutes, routes] = useLazyQuery(GET_ROUTES, {
    fetchPolicy: 'cache-and-network',
  });
  const [refreshing, setRefreshing] = React.useState(false);

  if (routes.error) {
    return (
      <ErrorComponent
        functionToRetry={routes.refetch}
        error="somethingWentWrong"
        label="terug"
        onPress={() => navigation.goBack()}
      />
    );
  }

  const onRefresh = () => {
    setRefreshing(true);
    routes.refetch();
    setRefreshing(false);
  };

  function compareProgress(a, b) {
    return b.progress - a.progress;
  }

  const renderRoutes = () => {
    const {
      availableRoutes,
      currentRoutes,
      //   archivedRoutes,
    } = routes.data.getRoutes;

    const suggestedRoutes = [];
    const otherRoutes = [];
    const mergedRoutes = [...availableRoutes, ...currentRoutes];
    mergedRoutes.forEach((route) => {
      if (route.isSuggested) {
        return suggestedRoutes.push(route);
      }
      return otherRoutes.push(route);
    });

    suggestedRoutes.sort(compareProgress);
    otherRoutes.sort(compareProgress);

    return (
      <React.Fragment>
        {suggestedRoutes.length > 0 && (
          <React.Fragment>
            <Title style={styles.title}>Aanbevolen</Title>
            {suggestedRoutes.map((lifeEvent) => (
              <RouteCard
                navigation={navigation}
                lifeEvent={lifeEvent}
                key={lifeEvent.routeId}
              />
            ))}
          </React.Fragment>
        )}
        {otherRoutes.length > 0 && (
          <React.Fragment>
            <Title
              style={
                suggestedRoutes.length > 0 ? styles.subTitle : styles.title
              }>
              Andere life events
            </Title>
            {otherRoutes.map((lifeEvent) => (
              <RouteCard
                navigation={navigation}
                lifeEvent={lifeEvent}
                key={lifeEvent.routeId}
              />
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

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
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={appColors.primary}
            style={{backgroundColor: appColors.headerColor}}
          />
        }>
        <ContentLayout>
          {!routes.data && <ActivityIndicator />}
          {routes.data && renderRoutes()}
        </ContentLayout>
      </Content>
      <View style={styles.underLayer} />
      <RouteQuestionaireModal navigation={navigation} />
    </Container>
  );
};

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

RouteHomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RouteHomeScreen;
