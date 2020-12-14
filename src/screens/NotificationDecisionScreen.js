import React from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {useMutation} from '@apollo/client';
import {Container, Header, Left, Right} from 'native-base';
import Button from '../components/shared/RoundedButton';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../config/colors';
import Bell from '../assets/svg/Bell';
import {Notifications} from 'react-native-notifications';
import REGISTER_NOTIFICATIONS_MUTATION from '../apollo/Mutation/registerNotificationsMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import {testIDs} from '../../e2e/modulesTestIDs';

const NotificationDecisionScreen = ({navigation, setLogin}) => {
  const [registerNotifications] = useMutation(REGISTER_NOTIFICATIONS_MUTATION);

  const acceptNotifications = async () => {
    Notifications.registerRemoteNotifications();
    Notifications.events().registerRemoteNotificationsRegistered(
      async (event) => {
        await doRegister('Approved', event.deviceToken);
      },
    );
  };

  const declineNotifications = async () => {
    await doRegister('Declined', 'null');
  };

  const doRegister = async (decision, token) => {
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
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container testID={testIDs.NOTIFICATON.SCREEN}>
      <Header style={styles.header} transparent noShadow>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.background}
        />
        <Left style={styles.flex} />
        <Title style={styles.headerTitle}>Notificaties</Title>
        <Right>
          <TouchableOpacity
            onPress={declineNotifications}
            testID={testIDs.NOTIFICATON.SKIP_BUTTON}>
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
            Wil je een berichtje krijgen voor een actie die je nog moet doen of
            als er een nieuwe route is toegevoegd?
          </Body>
        </View>
        <View>
          <Button
            style={styles.button}
            onPress={acceptNotifications}
            testid={testIDs.NOTIFICATON.ACCEPT_BUTTON}
            label="ACCEPTEREN"
          />
        </View>
      </View>
    </Container>
  );
};

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

NotificationDecisionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  setLogin: PropTypes.func.isRequired,
};

export default NotificationDecisionScreen;
