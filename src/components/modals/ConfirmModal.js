import React from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import RoundedButton from '../shared/RoundedButton';
import Body from '../typography/Body';
import {appColors} from '../../config/colors';
import {BORDER_RADIUS} from '../../config/commonStyles';
import {testIDs} from '../../../e2e/modulesTestIDs';

const screenWidth = Dimensions.get('window').width;

const ConfirmModal = ({
  open = false,
  setOpen = () => {},
  doUpdateConfirmTask = () => {},
}) => {
  function closeModal() {
    setOpen(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      statusBarTranslucent>
      <View
        style={styles.centeredView}
        testID={testIDs.QUESTION.SKIP_QUESTIONS_MODAL}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Button
              rounded
              transparent
              style={styles.closeButton}
              onPress={closeModal}>
              <Icon name="close" type="AntDesign" style={styles.icon} />
            </Button>
            <Title style={styles.title}>Vragen Overslaan</Title>

            <Body style={styles.body}>
              Als je er voor kiest om zonder vragen te beantwoorden door te gaan
              zal de route niet persoonlijk op jou aangepast worden en krijg je
              de volledige route te zien met alle stappen.
            </Body>
            <RoundedButton
              label="Vragen Overslaan"
              full
              onPress={() => doUpdateConfirmTask('no')}
              testid={testIDs.QUESTION.CONFIRM_SKIP_QUESTIONS_BUTTON}
            />
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
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    marginBottom: 5,
  },
  body: {
    marginBottom: 20,
  },
  codeContainer: {
    backgroundColor: appColors.headerColor,
    padding: 10,
    borderRadius: BORDER_RADIUS,
  },
  code: {
    marginTop: 5,
    color: appColors.white,
    textAlign: 'center',
    fontSize: 20,
  },
});

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  doUpdateConfirmTask: PropTypes.func.isRequired,
};

export default ConfirmModal;
