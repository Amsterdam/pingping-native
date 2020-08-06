import React from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Container} from 'native-base';
import exampleImage from '../assets/exampleImage.png';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors, ppBaseColors} from '../lib/colors';
import CitypingsChip from '../components/CitypingsChip';
import * as Progress from 'react-native-progress';
import IconButton from '../components/IconButton';
import Button from '../components/OnboardingButton';
import TipsChip from '../components/TipsChip';
import RouteTaskRow from '../components/RouteTaskRow';
import ContentLayout from '../components/layout/ContentLayout';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.3,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 80,
  },
  contentContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  label: {
    color: appColors.primary,
  },
  title: {
    marginVertical: 20,
  },
  description: {
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: 40,
    fontSize: 22,
  },
  tipsChip: {
    position: 'absolute',
    top: screenHeight * 0.28,
    right: 25,
  },
});

const steps = [
  'Regel je woonadres',
  'Bankrekening openen',
  'Digid aanvragen',
  'Zorgverzekering regelen',
  'Zorgtoeslag aanvragen',
  'Inkomen',
  'Inschrijven woning',
];

function LifeEventDetailsScreen({navigation}) {
  return (
    <Container>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={exampleImage} style={styles.image} />
          <View style={styles.imageOverlay}>
            <IconButton
              iconName="arrow-left"
              iconType="MaterialCommunityIcons"
              onPress={() => navigation.goBack()}
              size="L"
            />
            <CitypingsChip value={20} />
          </View>
        </View>
        <ContentLayout>
          <Body style={styles.label}>Jongvolwassenen</Body>
          <Title style={styles.title}>Fiks je basis</Title>
          <View style={styles.balanceContainer}>
            <View style={styles.saldo}>
              <Body style={styles.savings}> 5 stappen</Body>
            </View>
            <Progress.Bar
              progress={0.1}
              width={50}
              color={appColors.secondary}
              unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
              borderWidth={0}
              height={10}
            />
          </View>
          <Body style={styles.description}>
            We gaan er samen voor zorgen dat jij je basis op orde hebt. Dan hoef
            je daar geen zorgen meer over te maken en kan je leuke dingen gaan
            doen.
          </Body>
          <Title style={styles.subtitle}>De Route</Title>
        </ContentLayout>
        <View>
          {steps.map((step, index) => (
            <RouteTaskRow key={step} step={step} index={index + 1} />
          ))}
        </View>
        <View style={styles.tipsChip}>
          <TipsChip navigation={navigation} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Body stlye={styles.balanceIndicatorText}>Begin bij het begin</Body>
        <Button style={styles.button} disabled label="Let's Go" />
      </View>
    </Container>
  );
}

export default LifeEventDetailsScreen;
