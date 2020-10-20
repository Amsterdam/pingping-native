import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {appColors} from '../config/colors';
import QRCode from 'react-native-qrcode-svg';

const QrCode = ({exportToken}) => {
  return (
    <View style={styles.qrCode}>
      <QRCode value={exportToken} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCode: {
    borderWidth: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: appColors.primary,
  },
});

export default memo(QrCode);
