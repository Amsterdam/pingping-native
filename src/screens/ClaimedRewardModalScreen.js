import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from 'native-base';
import {useQuery} from '@apollo/client';
import HTML from 'react-native-render-html';
import Button from '../components/shared/RoundedButton';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import ImageOverlayHeader from '../components/header/ImageOverlayHeader';
import {BASE_URL} from '../config/initialSettings';
import GET_CLAIMED_REWARD_MODAL from '../apollo/Query/Local/getClaimedRewardModalState';
import ClaimedTicketsLarge from '../assets/svg/ClaimedTicketsLarge';
import {appColors} from '../config/colors';
import ShowRewardCodeModal from '../components/modals/ShowRewardCodeModal';
import WebViewModal from '../components/modals/WebViewModal';

const MARGIN_BOTTOM = 25;

const ClaimedRewardModalScreen = ({navigation = () => {}, route = {}}) => {
  const [open, setOpen] = useState(false);
  const [urlToVisit, setUrlToVisit] = useState('https://amsterdam.nl');
  const [webViewOpen, setWebviewOpen] = useState(false);

  const linkPressed = (event, href) => {
    setUrlToVisit(href);
    setWebviewOpen(true);
  };

  const closeModal = () => {
    setWebviewOpen(false);
  };

  if (route?.params) {
    const {title, description, cover, expiryDate, pin, code} = route.params;

    return (
      <Container>
        <ScrollView>
          <ImageOverlayHeader navigation={navigation} cover={cover} />
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
            pin={pin}
          />
          <WebViewModal
            urlToVisit={urlToVisit}
            closeModal={closeModal}
            webViewOpen={webViewOpen}
          />
        </ScrollView>
      </Container>
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

ClaimedRewardModalScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ClaimedRewardModalScreen;
