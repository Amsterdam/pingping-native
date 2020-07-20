import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Header, Container, Button, Text, Left, Right} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../lib/colors';
import Bell from '../assets/svg/Bell';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.background,
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: '400',
    fontSize: 26,
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
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: appColors.primary,
  },
  headerSubButton: {
    color: appColors.greyedOut,
    fontSize: 12,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: appColors.background,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },
});

const NotificationDecisionScreen = ({navigation}) => {
  return (
    <Container>
      <Header style={styles.header} transparent noShadow>
        <StatusBar barStyle="dark-content" />
        <Left />
        <Title style={styles.headerTitle}>Introductie</Title>
        <Right>
          <TouchableOpacity onPress={() => navigation.navigate('auth')}>
            <Title style={styles.headerSubButton}>Overslaan</Title>
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.viewContainer}>
        <View>
          <Bell Bell />
        </View>
        <View>
          <Title style={styles.title}>NOTIFICATIES</Title>
          <Body style={styles.onboardingText}>
            Zou je notificaties willen ontvangen voor toekomstige life events
            waar aan je herinnert wilt worden?
          </Body>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('QuestionScreen')}>
            <Text style={styles.buttonLabel}>Accepteren</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default NotificationDecisionScreen;
