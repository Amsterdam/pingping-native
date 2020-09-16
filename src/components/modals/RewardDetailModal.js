import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {useMutation} from '@apollo/client';
import CLAIM_REWARD_MUTATION from '../../apollo/Mutation/claimRewardMutation';
import {BASE_URL} from '../../config/initialSettings';
import Title from '../typography/Title';
import {Container} from 'native-base';
import Body from '../typography/Body';
import {appColors} from '../../config/colors';
import CitypingsChip from '../CitypingsChip';
import CityPingsBalance from '../CityPingsBalance';
import IconButton from '../IconButton';
import Button from '../OnboardingButton';

const screenHeight = Dimensions.get('window').height;
function RewardDetailModal({navigation, route}) {
  const {balance, price, title, description, rewardId, imageUrl} = route.params;
  const available = balance >= price;
  const [claimReward] = useMutation(CLAIM_REWARD_MUTATION);

  const doClaimReward = async () => {
    try {
      const claimResponse = await claimReward({
        variables: {
          rewardId,
        },
      });
      console.log(claimResponse);
    } catch (error) {
      //error toast
    }
  };

  return (
    <Container>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `${BASE_URL}${imageUrl}`}}
            style={styles.image}
          />
          <View style={styles.imageOverlay}>
            <IconButton
              iconName="close"
              iconType="MaterialIcons"
              onPress={() => navigation.goBack()}
              size="L"
            />
            <CitypingsChip value={price} />
          </View>
        </View>
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
          disabled={!available}
          label="Claim"
          onPress={doClaimReward}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.3,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 80,
  },
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
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

RewardDetailModal.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default RewardDetailModal;
