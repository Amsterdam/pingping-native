import React from 'react';
import PropTypes from 'prop-types';
import {Header, Right, Container, Left} from 'native-base';
import {StyleSheet, StatusBar} from 'react-native';
import {appColors, ppBaseColors} from '../config/colors';
import OnboardingItem from '../components/OnboardingItem';
import Title from '../components/typography/Title';
import Vault from '../assets/svg/Vault';
import BackPack from '../assets/svg/BackPack';
import GuyBehindComputer from '../assets/svg/GuyBehindComputer';
import Swiper from 'react-native-swiper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {testIDs} from '../../e2e/modulesTestIDs';

const onboardingViews = [
  {
    title: 'WAT IS PING PING',
    text:
      'Wij maken een persoonlijk routeplan die je gaat helpen je (financiële) basis op orde te hebben',
    svg: <GuyBehindComputer />,
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

class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }

  componentDidMount = () => {
    this.setState({swiper: this.swiperRef});
  };

  state = {};
  render() {
    const {navigation} = this.props;
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
              onPress={() => navigation.navigate('ImportDataScreen')}>
              <Title style={styles.buttonLabel}>Inloggen</Title>
            </TouchableOpacity>
          </Right>
        </Header>
        <Swiper
          loop={false}
          dotColor={ppBaseColors.PP_GRAY}
          activeDotColor={appColors.primary}
          ref={this.swiperRef}>
          {onboardingViews.map((view, index) => (
            <OnboardingItem
              view={view}
              key={view.title}
              buttonAction={this.swiperRef.current}
              navigation={navigation}
              isLastItem={onboardingViews.length - 1 === index}
            />
          ))}
        </Swiper>
      </Container>
    );
  }
}

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
