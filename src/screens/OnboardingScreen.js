import React from 'react';
import PropTypes from 'prop-types';
import {Header, Right, Container, Left} from 'native-base';
import {StyleSheet, StatusBar} from 'react-native';
import {appColors, ppBaseColors} from '../lib/colors';
import OnboardingItem from '../components/OnboardingItem';
import Title from '../components/typography/Title';
import Vault from '../assets/svg/Vault';
import BackPack from '../assets/svg/BackPack';
import GuyBehindComputer from '../assets/svg/GuyBehindComputer';
import Swiper from 'react-native-swiper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const onboardingViews = [
  {
    title: 'WAT IS PING PING',
    text:
      'Wij maken een persoonlijk routeplan die je gaat helpen je (financiële) basis op orde te hebben',
    svg: <GuyBehindComputer />,
    buttonLabel: 'Volgende',
  },
  {
    title: 'WAT IS PING PING',
    text:
      'Wij maken een persoonlijk routeplan die je gaat helpen je (financiële) basis op orde te hebben',
    svg: <Vault />,
    buttonLabel: 'Volgende',
  },
  {
    title: 'Wat is PING PING',
    text:
      'Wij maken een persoonlijk routeplan die je gaat helpen je (financiële) basis op orde te hebben',
    svg: <BackPack />,
    buttonLabel: 'Volgende',
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
      <Container>
        <Header style={styles.header} transparent noShadow>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={appColors.background}
          />
          <Left style={styles.flex} />
          <Title style={styles.headerTitle}>INTRODUCTIE</Title>
          <Right>
            <TouchableOpacity
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
