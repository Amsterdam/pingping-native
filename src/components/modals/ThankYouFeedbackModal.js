import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import ThankYou from '../../assets/svg/ThankYou';
import {appColors} from '../../config/colors';

const screenWidth = Dimensions.get('window').width;

const ThankYouFeedbackModal = ({open = false}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      statusBarTranslucent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Title style={styles.title}>Bedankt voor je input!</Title>
            <ThankYou />
            <ActivityIndicator color={appColors.primary} />
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
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.8)',
  },
  modalView: {
    width: screenWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContainer: {
    padding: 35,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

ThankYouFeedbackModal.propTypes = {
  open: PropTypes.bool.isRequired,
  validUntil: PropTypes.string,
  code: PropTypes.string,
};
ThankYouFeedbackModal.defaultProps = {
  validUntil: '',
  code: '',
};

export default ThankYouFeedbackModal;
