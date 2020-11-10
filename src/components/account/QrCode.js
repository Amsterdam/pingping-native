import React, {memo} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';
import {appColors} from '../../config/colors';

const QrCode = ({exportToken = ''}) => {
  return (
    <View style={styles.qrCode}>
      {exportToken ? (
        <QRCode value={exportToken} size={200} />
      ) : (
        <ActivityIndicator color={appColors.primary} />
      )}
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

QrCode.propTypes = {
  exportToken: PropTypes.string,
};
QrCode.defaultprops = {
  exportToken: '',
};

export default memo(QrCode);
