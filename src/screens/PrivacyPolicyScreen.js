import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import LabeledHeader from '../components/header/LabeledHeader';
import Button from '../components/OnboardingButton';
import AsyncStorage from '@react-native-community/async-storage';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import FloppyDisk from '../assets/svg/FloppyDisk';
import {appColors} from '../lib/colors';
import PrivacyPolicyAccordion from '../components/PrivacyPolicyAccordion';
import SimpleHeader from '../components/header/SimpleHeader';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.background,
    padding: 15,
  },
  title: {
    fontWeight: '400',
    fontSize: 28,
    color: appColors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  onboardingText: {
    textAlign: 'center',
    color: appColors.subText,
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
  },
});

const PrivacyPolicyScreen = ({view, buttonAction, isLastItem, navigation}) => {
  const [open, setOpen] = React.useState(false);
  const [policyAccepted, setPolicy] = React.useState(true);

  useEffect(() => {
    async function policyCheck() {
      const acceptedPolicy = await AsyncStorage.getItem('@acceptedPolicy');
      setPolicy(acceptedPolicy);
    }
    policyCheck();
  }, []);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const doAcceptPolicy = async () => {
    await AsyncStorage.setItem('@acceptedPolicy', JSON.stringify(true));
    navigation.navigate('WelcomeScreen');
  };

  return (
    <Container>
      {policyAccepted ? (
        <LabeledHeader filledHeader navigation={navigation} title="Privacy" />
      ) : (
        <SimpleHeader title="Privacy" />
      )}
      <Content contentContainerStyle={styles.content}>
        <View style={styles.viewContainer}>
          <View>
            <FloppyDisk />
          </View>
          <View>
            <Title style={styles.title}>PRIVACY</Title>
            <Body style={styles.onboardingText}>
              Om Ping Ping optimaal te laten functioneren verzamelen wij door
              het proces heen informatie. Klik hieronder om meer kennis te
              krijgen over welke informatie wij verzamelen en wat wij met deze
              informatie doen.
            </Body>
          </View>
          <PrivacyPolicyAccordion open={open} toggleOpen={toggleOpen} />
          {!policyAccepted && (
            <View style={styles.buttonContainer}>
              <Button onPress={doAcceptPolicy} label="Accepteren" />
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default PrivacyPolicyScreen;
