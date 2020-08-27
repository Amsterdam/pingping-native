import React, {useCallback, useEffect} from 'react';
import {Platform, View} from 'react-native';
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
        console.log('Notification Received - Foreground', notification.payload);

        completion({alert: true, sound: true, badge: false});
      },
    );

    if (platform !== 'ios') {
      Notifications.getInitialNotification()
        .then((notification, completion) => {
          if (notification) {
            console.log('GOT INITIAL NOTIFICATION');
            completion({alert: true, sound: true, badge: false});
          }
        })
        .catch((err) => console.error('getInitialNotifiation() failed', err));
    }

    Notifications.events().registerNotificationOpened(
      (notification, completion, action) => {
        console.log('Notification opened by device user');
        completion({alert: true, sound: true, badge: false});
      },
    );

    Notifications.events().registerNotificationReceivedBackground(
      (notification, completion) => {
        console.log('Notification Received - Background', notification.payload);
        completion({alert: true, sound: true, badge: false});
      },
    );
  }, []);
  return <View style={{flex: 1}}>{children}</View>;
};

export default PushNotificationManager;
