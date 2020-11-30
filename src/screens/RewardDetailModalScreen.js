import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container, Root, Toast} from 'native-base';
import {useMutation, useQuery} from '@apollo/client';
import CLAIM_REWARD_MUTATION from '../apollo/Mutation/claimRewardMutation';
import CLAIMED_REWARD_MODAL from '../apollo/Mutation/Local/claimedRewardModal';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../config/colors';
import CityPingsBalance from '../components/shared/CityPingsBalance';
import Button from '../components/shared/RoundedButton';

function RewardDetailModalScreen({navigation = () => {}, route = {}}) {
  const {price, title, description, rewardId, cover} = route.params;

  const [claimReward] = useMutation(CLAIM_REWARD_MUTATION);
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const [loading, setLoading] = useState(false);
  const {data, refetch} = useQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'cache-first',
  });

  const doClaimReward = async () => {
    setLoading(true);
    try {
      const claimResponse = await claimReward({
        variables: {
          rewardId,
        },
      });
      console.log(claimResponse);

      await claimedRewardModal({
        variables: {
          claimedRewardModalOpen: true,
          pin: claimResponse.data.claimReward.data?.pin,
          code: claimResponse.data.claimReward.data?.code,
          expiryDate: claimResponse.data.claimReward.data?.expiryDate,
          title: claimResponse.data.claimReward.reward.title,
          imageUrl: claimResponse.data.claimReward.reward.cover.value,
          rewardId: claimResponse.data.claimReward.reward.rewardId,
          description: claimResponse.data.claimReward.reward.description,
        },
      });
      refetch();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Toast.show({
        text: 'Er is iets misgegaan! Onze developers zijn op de hoogte gesteld',
        textStyle: {fontFamily: 'Raleway-Regular'},
        style: {backgroundColor: '#000', borderRadius: 10},
        duration: 2000,
      });
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
            <Body style={styles.label}>Rewards</Body>
            <Title style={styles.title}>{title}</Title>
            <CityPingsBalance balance={balance} price={price} />
            <Body style={styles.description}>{description}</Body>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Body stlye={styles.balanceIndicatorText}>
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
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
