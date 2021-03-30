import React, {useCallback, useEffect} from 'react';
import {Linking, Platform} from 'react-native';
import {Container} from 'native-base';
import {Notifications} from 'react-native-notifications';

const notificationTypes = {
  remindUserToCompleteOnboarding: 'RemindUserToCompleteOnboarding',
  remindUserToContinueRoute: 'RemindUserToContinueRoute',
};

const platform = Platform.OS;

const handleNotifcationWithType = (payload) => {
  if (
    payload.type.toLowerCase() ===
    notificationTypes.remindUserToContinueRoute.toLowerCase()
  ) {
    setTimeout(() => {
      Linking.openURL(`pingpingnative://route/${payload.routeId}`);
    }, 1000);
  }
};

const PushNotificationManager = ({children}) => {
  useEffect(() => {
    Notifications.registerRemoteNotifications();
    registerNotificationEvents();
    platform === 'ios' && Notifications.ios.setBadgeCount(0);
  }, [registerNotificationEvents]);

  const registerNotificationEvents = useCallback(async () => {
    /**
     * Event listener for notifications that are received in the foreground - so when using the app
     * @param {object} notification A notification component containing a payload including title, body and type
     */
    Notifications.events().registerNotificationReceivedForeground(
      (notification, completion) => {
        if (notification) {
          console.log('FOREGROUND NOTIFICATION RECEIVED', notification);
        }
        completion({
          alert: true,
          sound: true,
          badge: true,
        });
      },
    );

    /**
     * Event listener for initial notifications, initial notifications are notifications that are received when the app is fully closed
     * @param {object} notification A notification component containing a payload including title, body and type
     */
    Notifications.getInitialNotification()
      .then((notification) => {
        if (notification?.payload?.type) {
          handleNotifcationWithType(notification.payload);
        }
      })
      .catch((err) => console.error('getInitialNotifiation() failed', err));

    /**
     * Event listener for notifications that are opened when the app is open or in the background
     * @param {object} notification A notification component containing a payload including title, body and type
     */
    Notifications.events().registerNotificationOpened(
      (notification, completion) => {
        if (notification?.payload?.type) {
          handleNotifcationWithType(notification.payload);
        }
        completion();
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      (notification, completion) => {
        if (notification) {
          console.log(
            'Notification Received - Background',
            notification.payload,
          );
        }
        completion({alert: true, sound: true, badge: false});
      },
    );
  }, []);

  return <Container>{children}</Container>;
};

export default PushNotificationManager;
