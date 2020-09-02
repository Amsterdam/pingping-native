import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import LabeledHeader from '../components/header/LabeledHeader';
import ContentLayout from '../components/layout/ContentLayout';
import {Content, Container} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  paragraphContainer: {
    marginBottom: 25,
  },
});

const TipScreen = ({navigation}) => {
  return (
    <Container>
      <LabeledHeader title="Tips" navigation={navigation} />
      <ContentLayout>
        <Content>
          <View style={styles.paragraphContainer}>
            <Title style={styles.subTitle}>Hoeveel abonnementen heb jij?</Title>
            <Body>
              Automatische afschrijvingen kunnen handig zijn, maar ook
              gevaarlijk! Als je niet gebruik maakt van abonnementen zoals de
              sportschool, swapfiets of zoiets, stop dan je abonnement. Zo loopt
              het niet door en bespaar je geld.
            </Body>
          </View>
          <View style={styles.paragraphContainer}>
            <Title style={styles.subTitle}>
              Zet je eigen goal om te sparen!
            </Title>
            <Body>
              Een handige manier om te sparen; de 52 weken challenge! Spaar in
              de eerste week 1euro en spaar vervolgens elke week een euro meer.
              Hou je dit 52 weken vol dan heb je op een makkelijke manier 1378
              euro gespaard in een jaar!
            </Body>
          </View>
          <View style={styles.paragraphContainer}>
            <Title style={styles.subTitle}>Spaar je eigen risico</Title>
            <Body>
              Ga bij je Zorgverzekeraar na of je je eigen risico verspreid over
              het jaar kunt betalen. Moet je gebruik maken van je verzekering
              omdat je ziektekosten hebt, dan sta je niet voor verassingen. Maak
              je geen gebruik van ziektekosten dan kun je je betaalde eigen
              risico over dat jaar terugkrijgen! Een fijn spaarpotje!
            </Body>
          </View>
          <Body>Kom je er niet uit? Vraag om hulp in de!</Body>
        </Content>
      </ContentLayout>
    </Container>
  );
};

TipScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TipScreen;
