import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import {Notifications} from 'react-native-notifications';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default class PushNotificationManager extends React.Component {
  componentDidMount() {
    this.registerDevice();
    this.registerNotificationEvents();
    Platform.OS === 'ios' && Notifications.ios.setBadgeCount(0);
  }

  registerDevice = () => {
    const {registerDeviceInBackend} = this.props;
    // Request permissions on iOS, refresh token on Android
    Notifications.registerRemoteNotifications();

    const platform = Platform.OS;

    Notifications.events().registerRemoteNotificationsRegistered((event) => {
      // TODO: Send the token to my server so it could send back push notifications...
      console.log('Device Token Received', event.deviceToken);
      registerDeviceInBackend(event.deviceToken, platform);
    });
    Notifications.events().registerRemoteNotificationsRegistrationFailed(
      (event) => {
        console.error(event);
      },
    );
  };

  registerNotificationEvents = () => {
    Notifications.events().registerNotificationReceivedForeground(
      (notification, completion) => {
        console.log('Notification Received - Foreground', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion({alert: true, sound: true, badge: false});
      },
    );

    Notifications.events().registerNotificationOpened(
      (notification, completion, action) => {
        console.log('Notification opened by device user', notification.payload);
        console.log(
          `Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`,
        );
        completion();
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      (notification, completion) => {
        console.log('Notification Received - Background', notification.payload);

        // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
        completion({alert: true, sound: true, badge: false});
      },
    );

    Notifications.getInitialNotification()
      .then((notification) => {
        console.log(
          'Initial notification was:',
          notification ? notification.payload : 'N/A',
        );
      })
      .catch((err) => console.error('getInitialNotifiation() failed', err));
  };

  render() {
    const {children} = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}
