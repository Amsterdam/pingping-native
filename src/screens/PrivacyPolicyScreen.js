import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Content, Container, Left} from 'native-base';
import ContentLayout from '../components/layout/ContentLayout';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import Button from '../components/Button';
import HeaderTemplate from '../components/header/HeaderTemplate';
import HeaderBackButton from '../components/header/HeaderBackButton';
import PrivacyEye from '../assets/privacy.png';
import OvalDefault from '../components/layout/OvalDefault';

const PrivacyPolicyScreen = ({navigation}) => {
  return (
    <Container>
      <OvalDefault />
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
        <Content>
          <Body>
            Om Ping Ping optimaal te laten functioneren verzamelen wij door het
            proces heen informatie. Klik hieronder om meer kennis te krijgen
            over welke informatie wij verzamelen en wat wij met deze informatie
            doen.
          </Body>
          <Button
            rounded
            label="Privacy policy"
            color="white"
            bordered
            style={styles.button}
          />
          <Button
            rounded
            label="Accepteer"
            onPress={() => navigation.navigate('Question')}
          />
        </Content>
      </ContentLayout>
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

  button: {
    marginBottom: 15,
    marginTop: 15,
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
