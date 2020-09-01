import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, Container} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import QrScanner from '../components/QrScanner';
import LabeledHeader from '../components/header/LabeledHeader';

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

const ImportDataScreen = ({navigation}) => {
  return (
    <Container>
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
          <QrScanner />
        </ContentLayout>
      </Content>
    </Container>
  );
};

export default ImportDataScreen;
