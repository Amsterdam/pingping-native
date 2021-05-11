import React from 'react';

import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {appColors, ppBaseColors} from '../../config/colors';
import Loading from '../shared/LoadingComponent';
import Button from '../shared/RoundedButton';

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
          full={true}
          onPress={() => setScanning(true)}
          label="Opnieuw scannen"
        />
      )}
    </View>
  );
};

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

QrScanner.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  scanning: PropTypes.bool.isRequired,
  setScanning: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default QrScanner;
