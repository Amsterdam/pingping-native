import React from 'react';
import PropTypes from 'prop-types';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import Title from '../typography/Title';
import {appColors} from '../../config/colors';

const CityPingsModal = ({closeModal, urlToVisit, webViewOpen}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={webViewOpen}
      statusBarTranslucent
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Title style={styles.buttonLabel}>SLUITEN</Title>
          </TouchableOpacity>
          <View style={styles.webView}>
            <WebView source={{uri: urlToVisit}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 35,
    backgroundColor: 'rgba(1,1,1,0.8)',
  },
  modalView: {
    marginTop: 75,
    flex: 1,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  webView: {
    flex: 1,
    padding: 5,
  },
  buttonLabel: {
    marginTop: 10,
    color: '#fff',
  },
});

CityPingsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  urlToVisit: PropTypes.string.isRequired,
  webViewOpen: PropTypes.bool.isRequired,
};

export default CityPingsModal;
