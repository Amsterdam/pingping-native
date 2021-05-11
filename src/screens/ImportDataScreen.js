import React, {useState} from 'react';

import {useLazyQuery, useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, Content} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

import {testIDs} from '../../e2e/modulesTestIDs';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import QrScanner from '../components/onboarding/QrScanner';
import Body from '../components/typography/Body';
import Title from '../components/typography/Title';
import {doRegisterDevice} from '../helpers/authHelper';
import sentryHelper from '../helpers/sentryHelper';

const ImportDataScreen = ({navigation}) => {
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
  const [getStatus] = useLazyQuery(GET_STATUS_QUERY, {
    fetchPolicy: 'network-only',
  });
  const [scanning, setScanning] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSuccess = async (e) => {
    const exportToken = e.data;
    setScanning(false);
    setLoading(true);
    try {
      await doRegisterDevice(registerDevice, exportToken);
      await AsyncStorage.setItem('@acceptedPolicy', JSON.stringify(true));
      getStatus();
    } catch (error) {
      setLoading(false);
      setScanning(false);
      sentryHelper(error.message);
    }
  };

  return (
    <Container testID={testIDs.IMPORT_DATA.SCREEN}>
      <LabeledHeader navigation={navigation} title="INLOGGEN" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Gegevens Importeren</Title>
          <Body variant="b3" style={styles.margin}>
            Als je van device switcht wil je natuurlijk niet dat al jouw
            gegevens en prestaties op Ping Ping verloren gaan!
          </Body>
          <Body variant="b3" style={styles.margin}>
            Het is heel simpel om jouw gegevens te importeren van je oude naar
            je nieuwe device. Open de app op je oude device en ga naar account,
            klik daar op exporteer gegevens en scan de QR-code met je nieuwe
            device.
          </Body>
          <QrScanner
            onSuccess={onSuccess}
            scanning={scanning}
            setScanning={setScanning}
            loading={loading}
          />
        </ContentLayout>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 30,
  },
});

ImportDataScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ImportDataScreen;
