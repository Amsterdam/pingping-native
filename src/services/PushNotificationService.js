import React, {useCallback, useEffect} from 'react';
import {Linking, Platform} from 'react-native';
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
          if (notification.payload.aps.custom.type === 'NAVIGATE_TO_ROUTE') {
            setTimeout(() => {
              Linking.openURL(
                `pingpingnative://route/${notification.payload.aps.custom.routeId}`,
              );
            }, 1000);
          }
        }
      })
      .catch((err) => console.error('getInitialNotifiation() failed', err));

    Notifications.events().registerNotificationOpened(
      (notification, completion) => {
        if (notification) {
          if (notification.payload.aps.custom.type === 'NAVIGATE_TO_ROUTE') {
            Linking.openURL(
              `pingpingnative://route/${notification.payload.aps.custom.routeId}`,
            );
          }
        }
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
