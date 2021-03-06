import React, {useEffect} from 'react';

import {useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import {resetStore} from '../apollo/apolloClient';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import QrCode from '../components/account/QrCode';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';

const ExportDataScreen = ({navigation, setLogOut}) => {
  const {data, error} = useQuery(GET_STATUS_QUERY, {
    pollInterval: 1000,
    fetchPolicy: 'network-only',
  });

  const exportToken = data?.getStatus?.exportToken;

  useEffect(() => {
    async function checkForErrors() {
      if (error?.message === 'unauthorized') {
        await AsyncStorage.clear();
        setLogOut();
        resetStore();
      }
    }
    checkForErrors();
  }, [error, setLogOut]);

  return (
    <Container>
      <LabeledHeader filledHeader navigation={navigation} title="Profiel" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Gegevens Exporteren</Title>
          <Body variant="b3" style={styles.margin}>
            Als je van device switcht wil je natuurlijk niet dat al jouw
            gegevens en prestaties op Ping Ping verloren gaan!
          </Body>
          <Body variant="b3" style={styles.margin}>
            Het is heel simpel om jouw gegevens te exporteren naar een nieuw
            device. Open op je nieuwe device de app en klik rechtsboven op
            inloggen. Vervolgens scan je de onderstaande QRCode en zo simpel is
            het!
          </Body>
          <View style={styles.qrContainer}>
            <QrCode exportToken={exportToken} />
          </View>
        </ContentLayout>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 30,
  },
  qrContainer: {
    alignItems: 'center',
  },
});

ExportDataScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  setLogOut: PropTypes.func.isRequired,
};

export default ExportDataScreen;
