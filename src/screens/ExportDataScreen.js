import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Content, Container} from 'native-base';
import {useQuery} from '@apollo/client';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import ContentLayout from '../components/layout/ContentLayout';
import LabeledHeader from '../components/header/LabeledHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import QrCode from '../components/QrCode';
import {appColors} from '../config/colors';

const ExportDataScreen = ({navigation}) => {
  const {data, loading, error} = useQuery(GET_STATUS_QUERY, {
    pollInterval: 500,
  });
  const exportToken = data?.getStatus?.exportToken;
  return (
    <Container>
      <LabeledHeader filledHeader navigation={navigation} title="Profiel" />
      <Content>
        <ContentLayout>
          <Title style={styles.margin}>Gegevens Exporteren</Title>
          <Body style={styles.margin}>
            Als je van device switcht wil je natuurlijk niet dat al jouw
            gegevens en prestaties op Ping Ping verloren gaan!
          </Body>
          <Body style={styles.margin}>
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
  inputContainer: {alignItems: 'center', justifyContent: 'center'},
  qrContainer: {
    alignItems: 'center',
  },
  qrCode: {
    borderWidth: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: appColors.primary,
  },
});

ExportDataScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ExportDataScreen;
