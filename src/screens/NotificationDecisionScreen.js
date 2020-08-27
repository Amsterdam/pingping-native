import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {Header, Container, Button, Text, Left, Right} from 'native-base';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../lib/colors';
import Bell from '../assets/svg/Bell';
import {Notifications} from 'react-native-notifications';
import REGISTER_NOTIFICATIONS_MUTATION from '../apollo/Mutation/registerNotificationsMutation';
import Loading from '../components/LoadingComponent';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';

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
  flex: {
    flex: 1,
  },
});

const NotificationDecisionScreen = ({navigation, setLogin}) => {
  const [registerNotifications] = useMutation(REGISTER_NOTIFICATIONS_MUTATION);
  const [loading, setLoading] = useState(false);

  const acceptNotifications = async () => {
    Notifications.registerRemoteNotifications();
    Notifications.events().registerRemoteNotificationsRegistered(
      async (event) => {
        await doRegister('Approved', event.deviceToken);
      },
    );
  };

  const declineNotifications = async () => {
    await doRegister('Declined', '');
  };

  const doRegister = async (decision, token) => {
    setLoading(true);
    try {
      await registerNotifications({
        variables: {
          deviceToken: token,
          notificationStatus: decision,
        },
        refetchQueries: [
          {
            query: GET_STATUS_QUERY,
          },
        ],
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Container>
      <Header style={styles.header} transparent noShadow>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.background}
        />
        <Left style={styles.flex} />
        <Title style={styles.headerTitle}>Notificaties</Title>
        <Right>
          <TouchableOpacity onPress={declineNotifications}>
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
          <Button style={styles.button} onPress={acceptNotifications}>
            <Text style={styles.buttonLabel}>Accepteren</Text>
          </Button>
        </View>
      </View>
      {loading && <Loading />}
    </Container>
  );
};

export default NotificationDecisionScreen;
