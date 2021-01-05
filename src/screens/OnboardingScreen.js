import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Container, Header, Left, Right} from 'native-base';
import {StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {appColors, ppBaseColors} from '../config/colors';
import OnboardingItem from '../components/onboarding/OnboardingItem';
import Title from '../components/typography/Title';
import Vault from '../assets/svg/Vault';
import BackPack from '../assets/svg/BackPack';
import WelcomeIllustration from '../assets/svg/WelcomeIllustration';
import {testIDs} from '../../e2e/modulesTestIDs';
import {useQuery} from '@apollo/client';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';

const onboardingViews = [
  {
    title: 'WAT IS PING PING',
    text:
      'Maak je persoonlijke routeplan om je (financiële) basis op orde te hebben.',
    svg: <WelcomeIllustration />,
    buttonLabel: 'Volgende',
    testid: testIDs.ONBOARDING.WHAT_BUTTON,
  },
  {
    title: 'WAT IS PING PING',
    text:
      'Met elke stap die je afrondt kom je dichter bij je doel en verdien je city pings',
    svg: <BackPack />,
    buttonLabel: 'Volgende',
    testid: testIDs.ONBOARDING.HOW_BUTTON,
  },
  {
    title: 'Wat is PING PING',
    text:
      'Als je route klaar is heb je je basis gefikst en kun je je reward claimen met je city pings',
    svg: <Vault />,
    buttonLabel: 'Volgende',
    testid: testIDs.ONBOARDING.WHERE_BUTTON,
  },
];

const OnboardingScreen = ({navigation}) => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const {data} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-only',
  });

  useEffect(() => {
    setSwiper(swiperRef);
    const guideUser = () => {
      // if the user has completed all onboardingtasks, current tasks should be null
      // we send the user to the notification decisionscreen
      if (!data.getStatus.currentTask) {
        navigation.navigate(routes.onboardingStack.notificationDecisionScreen);
      }
      // if the user has already completed an onboarding tasks we do not have
      // to show the user the onboarding again, we send this user to the question screen
      if (data.getStatus.previousTask && data.getStatus.currentTask) {
        navigation.navigate(routes.onboardingStack.questionScreen);
      }
    };
    data && guideUser();
  }, [swiper, data, navigation]);

  return (
    <Container testID={testIDs.ONBOARDING.SCREEN}>
      <Header style={styles.header} transparent noShadow>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.background}
        />
        <Left style={styles.flex} />
        <Title style={styles.headerTitle}>INTRODUCTIE</Title>
        <Right>
          <TouchableOpacity
            testID={testIDs.ONBOARDING.LOG_IN_BUTTON}
            onPress={() =>
              navigation.navigate(routes.onboardingStack.importDataScreen)
            }>
            <Title style={styles.buttonLabel}>Inloggen</Title>
          </TouchableOpacity>
        </Right>
      </Header>
      <Swiper
        loop={false}
        dotColor={ppBaseColors.PP_GRAY}
        activeDotColor={appColors.primary}
        ref={swiperRef}>
        {onboardingViews.map((view, index) => (
          <OnboardingItem
            view={view}
            key={view.title}
            buttonAction={swiperRef?.current}
            navigation={navigation}
            isLastItem={onboardingViews.length - 1 === index}
          />
        ))}
      </Swiper>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: appColors.background,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },
  buttonLabel: {
    color: appColors.greyedOut,
    fontSize: 12,
  },
  flex: {
    flex: 1,
  },
});

OnboardingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default OnboardingScreen;
