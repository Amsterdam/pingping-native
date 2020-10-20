import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Content, Container} from 'native-base';
import {useLazyQuery, useMutation} from '@apollo/client';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import QrScanner from '../components/QrScanner';
import LabeledHeader from '../components/header/LabeledHeader';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import {doRegisterDevice} from '../helpers/authHelper';
import {testIDs} from '../../e2e/modulesTestIDs';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

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
      getStatus();
      setScanning(false);
      setLoading(false);
    } catch (error) {
      setScanning(true);
      console.log(error);
    }
  };

  return (
    <Container testID={testIDs.IMPORT_DATA.SCREEN}>
      <LabeledHeader navigation={navigation} title="INLOGGEN" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Gegevens Importeren</Title>
          <Body style={styles.margin}>
            Als je van device switcht wil je natuurlijk niet dat al jouw
            gegevens en prestaties op Ping Ping verloren gaan!
          </Body>
          <Body style={styles.margin}>
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
  input: {
    height: 40,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  margin: {
    marginBottom: 30,
  },
});

ImportDataScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ImportDataScreen;
