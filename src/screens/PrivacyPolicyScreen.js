import React, {useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {Container, Left} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';
import HeaderTemplate from '../components/header/HeaderTemplate';
import HeaderBackButton from '../components/header/HeaderBackButton';
import PrivacyEye from '../assets/privacy.png';
import OvalDefault from '../components/layout/OvalDefault';
import PrivacyPolicyAccordion from '../components/PrivacyPolictyDropdown';

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
        <HeaderTemplate style={styles.header} color="primary">
          <View>
            <Left style={styles.headerButtonContainer}>
              <HeaderBackButton navigation={navigation} />
            </Left>
          </View>
          <Title style={styles.title}>PRIVACY</Title>
          <View style={styles.absolute}>
            <View style={styles.paper}>
              <Image source={PrivacyEye} />
            </View>
          </View>
        </HeaderTemplate>
        <ContentLayout style={styles.content}>
          <Body>
            Om Ping Ping optimaal te laten functioneren verzamelen wij door het
            proces heen informatie. Klik hieronder om meer kennis te krijgen
            over welke informatie wij verzamelen en wat wij met deze informatie
            doen.
          </Body>
          <PrivacyPolicyAccordion
            style={styles.button}
            open={open}
            toggleOpen={toggleOpen}
          />

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

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  header: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerButtonContainer: {
    flex: 0,
  },
  title: {
    color: '#fff',
    letterSpacing: 5,
    alignSelf: 'center',
  },
  content: {
    marginTop: 150,
  },
  absolute: {
    position: 'absolute',
    top: 225,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    padding: 100,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
