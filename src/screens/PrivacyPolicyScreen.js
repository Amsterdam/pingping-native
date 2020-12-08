import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Content} from 'native-base';
import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import FloppyDisk from '../assets/svg/FloppyDisk';
import {appColors} from '../config/colors';
import Button from '../components/shared/RoundedButton';
import LabeledHeader from '../components/header/LabeledHeader';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import PrivacyPolicyAccordion from '../components/shared/PrivacyPolicyAccordion';
import SimpleHeader from '../components/header/SimpleHeader';
import Loading from '../components/shared/LoadingComponent';
import {doRegisterDevice} from '../helpers/authHelper';
import REGISTER_DEVICE_MUTATION from '../apollo/Mutation/registerDeviceMutation';
import {testIDs} from '../../e2e/modulesTestIDs';
import routes from '../App/stacks/routes';

const PrivacyPolicyScreen = ({navigation}) => {
  useEffect(() => {
    async function policyCheck() {
      const acceptedPolicy = await AsyncStorage.getItem('@acceptedPolicy');
      setPolicy(acceptedPolicy);
    }
    policyCheck();
  }, []);

  const [open, setOpen] = useState(false);
  const [policyAccepted, setPolicy] = useState(true);
  const [registerDevice] = useMutation(REGISTER_DEVICE_MUTATION);
  const [loading, setLoading] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const doAcceptPolicy = async () => {
    setLoading(true);
    try {
      await doRegisterDevice(registerDevice);
      await AsyncStorage.setItem('@acceptedPolicy', JSON.stringify(true));
      const token = await AsyncStorage.getItem('@access_token');
      if (token) {
        setLoading(false);
        navigation.navigate(routes.onboardingStack.questionScreen);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container testID={testIDs.PRIVACY.SCREEN}>
      {policyAccepted ? (
        <LabeledHeader filledHeader navigation={navigation} title="Privacy" />
      ) : (
        <SimpleHeader title="Privacy" color="white" />
      )}
      <Content contentContainerStyle={styles.content}>
        <View style={styles.viewContainer}>
          <View>
            <FloppyDisk />
          </View>
          <View>
            <Title style={styles.title}>PRIVACY</Title>
            <Body style={styles.onboardingText}>
              Om Ping Ping optimaal te laten functioneren verzamelen wij
              informatie. Klik hieronder om meer hierover te lezen. Wij slaan zo
              min mogelijk informatie op.
            </Body>
          </View>
          <PrivacyPolicyAccordion open={open} toggleOpen={toggleOpen} />
          {!policyAccepted && (
            <View style={styles.buttonContainer}>
              <Button
                testid={testIDs.PRIVACY.PRIVACY_ACCEPT_BUTTON}
                onPress={doAcceptPolicy}
                label="Accepteren"
              />
            </View>
          )}
        </View>
      </Content>
      {loading && <Loading />}
    </Container>
  );
};

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

PrivacyPolicyScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PrivacyPolicyScreen;
