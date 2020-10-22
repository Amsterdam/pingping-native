import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Dimensions, TextInput} from 'react-native';
import {Toast, Root} from 'native-base';
import {useQuery, useMutation} from '@apollo/client';
import Button from '../OnboardingButton';
import ContentLayout from '../layout/ContentLayout';
import Title from '../typography/Title';
import Body from '../typography/Body';
import VaultImage from '../../assets/vault.png';
import ModalLayout from './ModalLayout';
import CLAIMED_REWARD_MODAL from '../../apollo/Mutation/Local/claimedRewardModal';
import GET_CLAIMED_REWARD_MODAL from '../../apollo/Query/Local/getClaimedRewardModalState';

const ClaimedRewardModal = ({navigation}) => {
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const {data} = useQuery(GET_CLAIMED_REWARD_MODAL);

  const closeModal = async () => {
    console.log('closing');
    await claimedRewardModal({
      variables: {
        claimedRewardModalOpen: false,
      },
    });
  };

  if (data && data.claimedRewardModalOpen) {
    const {claimedRewardModalOpen} = data;
    console.log(claimedRewardModalOpen);
    return (
      <ModalLayout
        modalOpen={claimedRewardModalOpen}
        image={VaultImage}
        closeModal={closeModal}
        navigation={navigation}>
        <ContentLayout>
          <View style={styles.textContainer}>
            <Title>{data.title}</Title>
            <Body>{data.description}</Body>
          </View>

          <Button
            style={styles.button}
            onPress={() => {}}
            label="Bekijk je code"
          />
        </ContentLayout>
      </ModalLayout>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
});

ClaimedRewardModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ClaimedRewardModal;
