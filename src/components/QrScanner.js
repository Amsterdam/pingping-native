import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StyleSheet, Dimensions, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Button from './OnboardingButton';
import {appColors, ppBaseColors} from '../lib/colors';
import Loading from './LoadingComponent';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  cameraContainerStyle: {
    height: Dimensions.get('window').width - 100,
    width: Dimensions.get('window').width - 100,
    borderRadius: 5,
    borderColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 3,
  },
});

const QrScanner = ({onSuccess, scanning, setScanning, loading}) => {
  return (
    <View style={styles.mainContainer}>
      {scanning ? (
        <React.Fragment>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.off}
            containerStyle={styles.cameraContainerStyle}
            showMarker
            markerStyle={{borderColor: ppBaseColors.PP_PINK}}
          />
          {loading && <Loading />}
        </React.Fragment>
      ) : (
        <Button
          style={styles.button}
          onPress={() => setScanning(true)}
          label="Opnieuw scannen"
        />
      )}
    </View>
  );
};

export default QrScanner;
