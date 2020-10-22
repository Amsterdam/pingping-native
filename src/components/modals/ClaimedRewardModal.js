import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Dimensions, TextInput} from 'react-native';
import {Toast, Root} from 'native-base';
import {useQuery, useMutation} from '@apollo/client';
import Button from '../OnboardingButton';
import ContentLayout from '../layout/ContentLayout';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {BASE_URL} from '../../config/initialSettings';
import ModalLayout from './ModalLayout';
import CLAIMED_REWARD_MODAL from '../../apollo/Mutation/Local/claimedRewardModal';
import GET_CLAIMED_REWARD_MODAL from '../../apollo/Query/Local/getClaimedRewardModalState';
import ClaimedTicketsLarge from '../../assets/svg/ClaimedTicketsLarge';

const ClaimedRewardModal = ({navigation}) => {
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const {data} = useQuery(GET_CLAIMED_REWARD_MODAL);

  const closeModal = async () => {
    await claimedRewardModal({
      variables: {
        claimedRewardModalOpen: false,
      },
    });
  };

  if (data && data.claimedRewardModalOpen) {
    const {claimedRewardModalOpen, title, description, imageUrl} = data;
    console.log(data);
    return (
      <ModalLayout
        modalOpen={claimedRewardModalOpen}
        image={{uri: `${BASE_URL}${imageUrl}`}}
        closeModal={closeModal}
        navigation={navigation}>
        <ContentLayout style={styles.container}>
          <View style={styles.textContainer}>
            <Title>{title}</Title>
            <Body>{description}</Body>
          </View>
          <View style={styles.illustrationButtonContainer}>
            <ClaimedTicketsLarge style={styles.illustration} />
            <Button
              style={styles.button}
              onPress={() => {}}
              label="Bekijk je code"
            />
          </View>
        </ContentLayout>
      </ModalLayout>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {flex: 1, height: '100%'},
  button: {
    alignSelf: 'center',
  },
  illustration: {
    alignSelf: 'center',
  },
  illustrationButtonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

ClaimedRewardModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ClaimedRewardModal;
