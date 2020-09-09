import React from 'react';
import PropTypes from 'prop-types';
import {Modal, StyleSheet, View, Animated, StatusBar} from 'react-native';
import {Content, Container} from 'native-base';
import {useQuery, useMutation} from '@apollo/client';
import ContentLayout from '../layout/ContentLayout';
import GET_ROUTES from '../../apollo/Query/getRoutes';
import ConfettiCannon from 'react-native-confetti-cannon';
import GET_AVAILABLE_REWARDS from '../../apollo/Query/getAvailableRewards';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {appColors} from '../../lib/colors';
import GET_MODAL_STATE from '../../apollo/Query/getModalState';
import TOGGLE_MODAL from '../../apollo/Mutation/toggleModal';
import CitypingsChip from '../CitypingsChip';
import commonStyles from '../../lib/commonStyles';
import CityPingsCoin from '../../assets/svg/CityPingCoin';
import RouteCard from '../RouteCard';
import RewardCardMini from '../RewardCardMini';
import ChevronButton from '../ChevronButton';
import GET_STATUS_QUERY from '../../apollo/Query/getStatusQuery';

const HEADER_HEIGHT = 200;
const BORDER_RADIUS = 5;

const CityPingsModal = ({navigation}) => {
  const {data} = useQuery(GET_MODAL_STATE);
  const routeData = useQuery(GET_ROUTES);
  const rewardData = useQuery(GET_AVAILABLE_REWARDS);
  const me = useQuery(GET_STATUS_QUERY);
  const [toggleModal] = useMutation(TOGGLE_MODAL);

  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const doNavigate = (stack) => () => {
    toggleModal();
    navigation.navigate(stack);
  };
  const availableRoutes = routeData?.data?.getRoutes?.availableRoutes;
  const availableRewards = rewardData?.data?.getAvailableRewards;
  const balance = me.data?.getStatus?.user?.balance;

  if (
    data &&
    data.modalOpen &&
    balance &&
    availableRewards &&
    availableRoutes
  ) {
    const {modalOpen, pings} = data;

    return (
      <Modal
        animationType="slide"
        visible={modalOpen}
        presentationStyle="formSheet">
        <Container style={styles.container}>
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
              <View style={styles.headerContainer}>
                <Title style={styles.title}>GOED BEZIG!</Title>
                <CitypingsChip value={balance} />
              </View>
              <View style={styles.paper}>
                <Body style={styles.celebrationBoxTitle} align="center">
                  Je hebt weer een aantal CityPings verdiend!
                </Body>
                <View style={styles.coinContainer}>
                  <CityPingsCoin height={30} width={30} />
                </View>
                <Title>{pings}</Title>
              </View>

              {availableRewards?.length > 0 && (
                <View style={styles.blockContainer}>
                  <View style={styles.rowFlex}>
                    <Title style={styles.subTitle}>Verzilveren</Title>
                    <ChevronButton onPress={doNavigate('CityPings')} />
                  </View>
                  <View style={styles.rowFlex}>
                    {availableRewards.map((reward) => (
                      <RewardCardMini
                        navigation={navigation}
                        toggleModal={toggleModal}
                        reward={reward}
                        key={reward.rewardId}
                        balance={balance}
                      />
                    ))}
                  </View>
                </View>
              )}

              {availableRoutes?.length > 0 && (
                <View style={styles.blockContainer}>
                  <View style={styles.rowFlex}>
                    <Title style={styles.subTitle}>Nieuwe Route</Title>
                    <ChevronButton onPress={doNavigate('Routes')} />
                  </View>
                  <View>
                    {availableRoutes.map((lifeEvent) => (
                      <RouteCard
                        navigation={navigation}
                        toggleModal={toggleModal}
                        lifeEvent={lifeEvent}
                        key={lifeEvent.routeId}
                      />
                    ))}
                  </View>
                </View>
              )}
            </ContentLayout>
          </Content>
          <View style={styles.underLayer} />
        </Container>
        <ConfettiCannon
          count={300}
          origin={{x: 0, y: 0}}
          explosionSpeed={500}
          fallSpeed={10000}
          fadeOut
        />
      </Modal>
    );
  }
  return <React.Fragment />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
  },
  header: {
    flexDirection: 'column',
    backgroundColor: appColors.primary,
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
  coinContainer: {
    marginVertical: 15,
  },
  subTitle: {
    color: '#000',
    marginVertical: 10,
    fontSize: 24,
    textAlign: 'left',
  },
  celebrationBoxTitle: {
    fontSize: 16,
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    ...commonStyles.shadow,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockContainer: {
    marginBottom: 20,
  },
});

CityPingsModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CityPingsModal;
