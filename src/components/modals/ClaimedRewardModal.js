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

const MARGIN_BOTTOM = 25;

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
          </View>

          <View>
            <ClaimedTicketsLarge style={styles.illustration} />
            <Title align="center">GECLAIMED</Title>
            {expiryDate && (
              <Body align="center" style={styles.rewardType}>
                Geldig tot {expiryDate}
              </Body>
            )}
          </View>
          <View>
            <Button
              style={styles.button}
              onPress={() => setOpen(true)}
              label="Bekijk je code"
            />
            <Body>{description}</Body>
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
  textContainer: {
    marginBottom: MARGIN_BOTTOM,
  },
  button: {
    alignSelf: 'center',
    marginVertical: MARGIN_BOTTOM,
  },
  illustration: {
    alignSelf: 'center',
    marginBottom: MARGIN_BOTTOM,
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
