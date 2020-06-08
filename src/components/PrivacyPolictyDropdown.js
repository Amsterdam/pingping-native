import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'native-base';
import Title from './typography/Title';
import Body from './typography/Body';

const styles = StyleSheet.create({
  policyContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 57,
    marginBottom: 15,
    marginTop: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    fontSize: 16,
    marginLeft: 8,
  },
  paddingPolicy: {
    padding: 20,
  },
  faqTitle: {marginTop: 10, marginBottom: 10},
  faqItemContainer: {marginTop: 5, marginBottom: 5},
  faqFontSize: {fontSize: 12},
});

const faqItems = [
  {
    question:
      'Welke gegevens van mij gebruiken jullie voor het advies over mijn route?',
    answer:
      'Geboortemaand/jaar, adres, bankrekening, DigiD, Zorgverzekering, Zorgtoeslag, Inschrijving Woningnet.',
  },
  {
    question: 'Waarom slaan wij jouw gegevens op?',
    answer:
      'Omdat dit makkelijker is voor jou om de app te gebruiken. Dan hoef je niet elke keer alles opnieuw in te vullen.',
  },
  {
    question: 'Waar slaan jullie mijn gegevens op ?',
    answer:
      'We slaan jouw gegevens veilig op bij het datapunt van de gemeente Amsterdam. ',
  },
  {
    question: 'Wat gebeurt er verder met die gegevens?',
    answer:
      'Helemaal niets. Als je de app niet meer gebruikt wissen we jouw gegevens na 3 maanden.',
  },
  {
    question: 'Kan ik mijn gegevens wijzigen of verwijderen?',
    answer:
      'Ja, dat kan (maar soms ook niet). Klik op de link voor meer informatie: amsterdam.nl/privacy',
  },
  {
    question: 'Wie kan ik bellen met vragen over mijn gegevens?',
    answer:
      'Bellen gatver ;). Je kunt wel mailen naar Robert Jan Taling, onze TADA inspirator: r.j.taling@amsterdam.nl.',
  },
  {
    question: 'TADA? Wat is dat?',
    answer:
      'De gemeente Amsterdam past bij het gebruik van jouw persoonsgegevens 6 principes toe. Klik op de link om daar meer over te weten: tada.city',
  },
];

const PrivacyPolicyDropdown = ({open, toggleOpen}) => {
  return (
    <View style={styles.policyContainer}>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <View style={styles.iconButton}>
          <Title style={styles.title}>Privacy Policy</Title>
          <Icon
            name={open ? 'caretup' : 'caretdown'}
            type="AntDesign"
            color="#000"
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      {open ? (
        <View style={styles.paddingPolicy}>
          <Body align="justify">
            We staan voor gelijkwaardigheid en gelijke kansen voor alle
            jongeren. Saamhorigheid is ons uitgangspunt. Dit betekent dat we
            elkaar kunnen en willen helpen. We spreken dan over
            samenredzaamheid. We pakken sociaal belangrijke maatschappelijke
            vragen op. De oplossing voor deze vraagstukken vinden we in de
            mensen zelf. Code, data en tech kunnen oplossingen voor deze
            vraagstukken sneller realiseren. Als we daarvoor jouw gegevens nodig
            hebben, zijn dat nooit meer gegevens dan noodzakelijk. Natuurlijk
            heb je het recht om jouw gegevens te verwijderen en kunnen we je
            altijd vertellen waarom de app een bepaalde route voor jou
            adviseert. We slaan zo weinig mogelijk gegevens op en alleen met
            jouw toestemming (die je altijd weer gewoon kan intrekken). Jouw
            toestemming geef je door het gebruik van de app. Maar je kan de app
            ook gebruiken zonder persoonlijke gegevens te delen. Je krijgt dan
            geen persoonlijke route. Logisch toch? Oh ja, we verkopen of geven
            je gegevens niet aan een derde. Natuurlijk willen we de app steeds
            verbeteren en willen we weten of ping ping jouw inderdaad helpt om
            je financiële zaken te regelen. Zo niet: dan moeten we iets anders
            bedenken. Hiervoor analyseren we jouw gebruik. We bekijken
            bijvoorbeeld hoe vaak je de app gebruikt en of het lukt om de route
            af te maken. Zo proberen wij te begrijpen of de app werkt en als het
            nodig is te verbeteren. Deze gegevens slaan we zonder jouw
            persoonsgegevens op. Praktische vragen over jouw privacy
          </Body>
          <Body style={styles.faqTitle}>
            Praktische vragen over jouw privacy:
          </Body>

          {faqItems.map((item, index) => (
            <View key={item.question} style={styles.faqItemContainer}>
              <Title style={styles.faqFontSize}>{`${index + 1}. ${
                item.question
              }`}</Title>
              <Body style={styles.faqFontSize}>{item.answer}</Body>
            </View>
          ))}

          <Body align="justify" />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default PrivacyPolicyDropdown;
