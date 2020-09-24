import React, {useCallback, useEffect} from 'react';
import {Platform} from 'react-native';
import {Container} from 'native-base';
import {Notifications} from 'react-native-notifications';

const platform = Platform.OS;

const PushNotificationManager = ({children}) => {
  useEffect(() => {
    Notifications.registerRemoteNotifications();
    registerNotificationEvents();
    platform === 'ios' && Notifications.ios.setBadgeCount(0);
  }, [registerNotificationEvents]);

  const registerNotificationEvents = useCallback(async () => {
    Notifications.events().registerNotificationReceivedForeground(
      (notification, completion) => {
        console.log('GOT FOREGROUND NOTIFICAITON');
        completion({
          alert: true,
          sound: true,
          badge: true,
        });
      },
    );

    Notifications.getInitialNotification()
      .then((notification) => {
        if (notification) {
          console.log('GOT INITIAL NOTIFICATION');
          console.log({notification});
        }
      })
      .catch((err) => console.error('getInitialNotifiation() failed', err));

    Notifications.events().registerNotificationOpened(
      (notification, completion) => {
        console.log('opened Notifcation');
        completion();
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      (notification, completion) => {
        console.log('Notification Received - Background', notification.payload);
        completion({alert: true, sound: true, badge: false});
      },
    );
  }, []);

  return <Container>{children}</Container>;
};

export default PushNotificationManager;
