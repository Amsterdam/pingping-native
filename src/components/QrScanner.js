import React from 'react';
import {TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StyleSheet, Dimensions, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Text} from 'native-base';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  cameraContainerStyle: {
    height: Dimensions.get('window').width - 50,
    width: Dimensions.get('window').width - 50,
    borderRadius: 500,
    overflow: 'hidden',
  },
  buttonStyle: {
    marginTop: 10,
  },
});

const QrScanner = ({onSuccess, setState, scanning}) => {
  return (
    <View style={styles.mainContainer}>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text style={styles.centerText}>
            Go to
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default QrScanner;
