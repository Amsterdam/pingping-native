import React, {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Left} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import ContentLayout from '../components/layout/ContentLayout';
import Body from '../components/typography/Body';
import Button from '../components/Button';
import ImageHeader from '../components/header/ImageHeader';
import privacyImage from '../assets/privacy.png';
import OvalDefault from '../components/layout/OvalDefault';
import PrivacyPolicyAccordion from '../components/PrivacyPolicyAccordion';

const PrivacyPolicyScreen = ({navigation}) => {
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
    navigation.navigate('Question');
  };

  return (
    <Container>
      <OvalDefault />
      <ScrollView>
        <ImageHeader
          navigation={navigation}
          imageToDisplay={privacyImage}
          title="PRIVACY"
        />
        <ContentLayout style={styles.content}>
          <Body>
            Om Ping Ping optimaal te laten functioneren verzamelen wij door het
            proces heen informatie. Klik hieronder om meer kennis te krijgen
            over welke informatie wij verzamelen en wat wij met deze informatie
            doen.
          </Body>
          <PrivacyPolicyAccordion open={open} toggleOpen={toggleOpen} />

          {!policyAccepted ? (
            <Button rounded label="Accepteer" onPress={doAcceptPolicy} />
          ) : (
            <></>
          )}
        </ContentLayout>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 150,
  },
});

export default PrivacyPolicyScreen;
