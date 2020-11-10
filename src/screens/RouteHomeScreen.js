import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Animated,
  View,
  RefreshControl,
} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import PropTypes from 'prop-types';
import {Content, Container} from 'native-base';
import {useLazyQuery} from '@apollo/client';
import GET_ROUTES from '../apollo/Query/getRoutes';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import RouteCard from '../components/route/RouteCard';
import ErrorComponent from '../components/shared/ErrorComponent';
import RouteQuestionaireModal from '../components/modals/RouteQuestionaireModal';
import EmptyContentNotifier from '../components/shared/EmptyContentNotifier';
import CardSkeleton from '../components/skeleton/CardSkeleton';
import {appColors} from '../config/colors';
import {testIDs} from '../../e2e/modulesTestIDs';

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
        somethingWentWrong
        onPress={routes.refetch}
        deafultLabelOverRide="Probeer Opnieuw"
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
      <AnimatableView animation="fadeIn">
        {suggestedRoutes.length > 0 && (
          <React.Fragment>
            <Title style={styles.title}>Aanbevolen Routes</Title>
            {suggestedRoutes.map((route) => (
              <RouteCard
                navigation={navigation}
                route={route}
                key={route.routeId}
              />
            ))}
          </React.Fragment>
        )}

        <React.Fragment>
          <Title
            style={suggestedRoutes.length > 0 ? styles.subTitle : styles.title}>
            Andere Routes
          </Title>

          <EmptyContentNotifier text="In de toekomst krijg je een notificatie wanneer een nieuwe route beschikbaar is." />

          {otherRoutes.map((route) => (
            <RouteCard
              navigation={navigation}
              route={route}
              key={route.routeId}
            />
          ))}
        </React.Fragment>
      </AnimatableView>
    );
  };

  return (
    <Container style={styles.container} testID={testIDs.ROUTES.SCREEN}>
      <View style={styles.underLayer} testID={testIDs.ROUTES.ANIMATED_VIEW} />
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
          {!routes.data && (
            <AnimatableView animation="fadeIn">
              <CardSkeleton />
              <CardSkeleton />
            </AnimatableView>
          )}
          {routes.data && renderRoutes()}
        </ContentLayout>
      </Content>
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
    marginVertical: 10,
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
    zIndex: -5,
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
