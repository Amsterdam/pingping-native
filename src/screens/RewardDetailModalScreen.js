import React, {useState} from 'react';

import {useMutation, useQuery} from '@apollo/client';
import {Container, Root, Toast} from 'native-base';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View} from 'react-native';
import HTML from 'react-native-render-html';

import CLAIM_REWARD_MUTATION from '../apollo/Mutation/claimRewardMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import routes from '../App/stacks/routes';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import WebViewModal from '../components/modals/WebViewModal';
import CityPingsBalance from '../components/shared/CityPingsBalance';
import Button from '../components/shared/RoundedButton';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import {appColors} from '../config/colors';
import normalizeValue from '../helpers/normalizeValue';
import sentryHelper from '../helpers/sentryHelper';

function RewardDetailModalScreen({navigation = () => {}, route = {}}) {
  const {price, title, description, rewardId, cover} = route.params;
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);
  const [claimReward] = useMutation(CLAIM_REWARD_MUTATION);

  const [loading, setLoading] = useState(false);
  const {data, refetch} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-first',
  });

  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeModal = () => {
    setWebviewOpen(false);
  };

  const doClaimReward = async () => {
    setLoading(true);
    try {
      const claimResponse = await claimReward({
        variables: {
          rewardId,
        },
      });
      await refetch();
      navigation.navigate(routes.citypingsStack.claimedRewardModalScreen, {
        pin: claimResponse.data.claimReward.data?.pin,
        code: claimResponse.data.claimReward.data?.code,
        expiryDate: claimResponse.data.claimReward.data?.expiryDate,
        title: claimResponse.data.claimReward.reward.title,
        cover: claimResponse.data.claimReward.reward.cover,
        rewardId: claimResponse.data.claimReward.reward.rewardId,
        description: claimResponse.data.claimReward.reward.description,
      });
    } catch (error) {
      if (error.message.includes('reward_not_available')) {
        sentryHelper(error.message);
        return Toast.show({
          text:
            'Deze reward is op dit moment niet beschikbaar, probeer het later nog eens.',
          textStyle: {fontFamily: 'Raleway-Regular'},
          style: {backgroundColor: '#000', borderRadius: 10},
          duration: 2000,
        });
      }
      Toast.show({
        text: 'Er is iets misgegaan! Onze developers zijn op de hoogte gesteld',
        textStyle: {fontFamily: 'Raleway-Regular'},
        style: {backgroundColor: '#000', borderRadius: 10},
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  let balance = 0;
  balance = data?.getStatus?.user.balance;
  const available = balance >= price;

  return (
    <Container>
      <Root>
        <ScrollView>
          <ImageOverlayHeader
            navigation={navigation}
            cover={cover}
            cityPings={price}
          />
          <View style={styles.contentContainer}>
            <Body variant="b3" style={styles.label}>
              Rewards
            </Body>
            <Title variant="h2" style={styles.title}>
              {title}
            </Title>
            <CityPingsBalance balance={balance} price={price} />
            <View style={styles.description}>
              <HTML
                html={description}
                baseFontStyle={styles.htmlFontStyle}
                onLinkPress={(event, href) => {
                  linkPressed(event, href);
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Body variant="b3" stlye={styles.balanceIndicatorText}>
            {available ? 'Lets go!' : 'Nog even doorsparen !'}
          </Body>
          <Button
            style={styles.button}
            disabled={!available || loading}
            label="Claim"
            onPress={doClaimReward}
          />
        </View>
      </Root>
      <WebViewModal
        urlToVisit={urlToVisit}
        closeModal={closeModal}
        webViewOpen={webViewOpen}
        setWebviewOpen={setWebviewOpen}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    color: appColors.primary,
  },
  title: {
    marginVertical: 20,
  },
  description: {
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  htmlFontStyle: {
    fontFamily: 'Raleway-Regular',
    fontSize: normalizeValue(15),
    lineHeight: normalizeValue(25),
  },
});

RewardDetailModalScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  cover: PropTypes.object,
};
RewardDetailModalScreen.defaultProps = {
  cover: {
    value: '',
    thumbnail: '',
    color: '',
  },
};

export default RewardDetailModalScreen;
