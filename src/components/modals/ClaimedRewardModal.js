import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import Button from '../shared/RoundedButton';
import ContentLayout from '../layout/ContentLayout';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {BASE_URL} from '../../config/initialSettings';
import ModalLayout from './ModalLayout';
import CLAIMED_REWARD_MODAL from '../../apollo/Mutation/Local/claimedRewardModal';
import GET_CLAIMED_REWARD_MODAL from '../../apollo/Query/Local/getClaimedRewardModalState';
import ClaimedTicketsLarge from '../../assets/svg/ClaimedTicketsLarge';
import {appColors} from '../../config/colors';
import ShowRewardCodeModal from './ShowRewardCodeModal';

const ClaimedRewardModal = ({navigation = () => {}}) => {
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const [open, setOpen] = useState(false);
  const {data} = useQuery(GET_CLAIMED_REWARD_MODAL);

  const closeModal = async () => {
    await claimedRewardModal({
      variables: {
        claimedRewardModalOpen: false,
      },
    });
  };

  if (data && data.claimedRewardModalOpen) {
    const {
      claimedRewardModalOpen,
      title,
      description,
      imageUrl,
      expiryDate,
      //   pin,
      code,
    } = data;

    return (
      <ModalLayout
        modalOpen={claimedRewardModalOpen}
        image={{uri: `${BASE_URL}${imageUrl}`}}
        closeModal={closeModal}
        navigation={navigation}>
        <ContentLayout style={styles.container}>
          <Body style={styles.rewardType}>Reward</Body>
          <View style={styles.textContainer}>
            <Title>{title}</Title>
            <Body>{description}</Body>
          </View>
          <View style={styles.illustrationButtonContainer}>
            <View>
              <ClaimedTicketsLarge style={styles.illustration} />
              <Title align="center">GECLAIMED</Title>
              {expiryDate && (
                <Body align="center" style={styles.rewardType}>
                  Geldig tot {expiryDate}
                </Body>
              )}
            </View>

            <Button
              style={styles.button}
              onPress={() => setOpen(true)}
              label="Bekijk je code"
            />
          </View>
        </ContentLayout>
        <ShowRewardCodeModal
          open={open}
          setOpen={setOpen}
          code={code}
          expiryDate={expiryDate}
        />
      </ModalLayout>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
  button: {
    alignSelf: 'center',
  },
  illustration: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  illustrationButtonContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  rewardType: {
    color: appColors.primary,
    marginBottom: 10,
  },
});

ClaimedRewardModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ClaimedRewardModal;
