import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import Button from '../shared/RoundedButton';
import HTML from 'react-native-render-html';
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
import WebViewModal from './WebViewModal';

const MARGIN_BOTTOM = 25;

const ClaimedRewardModal = ({navigation = () => {}}) => {
  const [claimedRewardModal] = useMutation(CLAIMED_REWARD_MODAL);
  const [open, setOpen] = useState(false);
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);
  const {data} = useQuery(GET_CLAIMED_REWARD_MODAL);

  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeWebModal = () => {
    setWebviewOpen(false);
  };

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
        {console.log(data)}
        <ContentLayout style={styles.container}>
          <Body style={styles.rewardType}>Reward</Body>
          <View style={styles.textContainer}>
            <Title>{title}</Title>
          </View>

          <View>
            <ClaimedTicketsLarge style={styles.illustration} />
            <Title align="center">GECLAIMED</Title>
            {expiryDate ? (
              <Body align="center" style={styles.rewardType}>
                Geldig tot {expiryDate}
              </Body>
            ) : (
              <></>
            )}
          </View>
          <View>
            <Button
              style={styles.button}
              onPress={() => setOpen(true)}
              label="Bekijk je code"
            />
            <HTML
              html={description}
              baseFontStyle={styles.htmlFontStyle}
              onLinkPress={(event, href) => {
                linkPressed(event, href);
              }}
            />
          </View>
        </ContentLayout>
        <ShowRewardCodeModal
          open={open}
          setOpen={setOpen}
          code={code}
          expiryDate={expiryDate}
        />
        <WebViewModal
          urlToVisit={urlToVisit}
          closeModal={closeWebModal}
          webViewOpen={webViewOpen}
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
  htmlFontStyle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 15,
    lineHeight: 25,
  },
});

ClaimedRewardModal.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ClaimedRewardModal;
