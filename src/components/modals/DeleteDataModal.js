import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import Title from '../typography/Title';
import Body from '../typography/Body';
import OnboardingButton from '../OnboardingButton';
import {appColors} from '../../config/colors';
import {testIDs} from '../../../e2e/modulesTestIDs';

const DeleteDataModal = ({
  open = false,
  setOpen = () => {},
  doDeleteUser = () => {},
  loading = false,
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
      <View style={styles.centeredView} testID={testIDs.DELETE_DATA.MODAL}>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <Button
              rounded
              transparent
              style={styles.closeButton}
              onPress={closeModal}>
              <Icon name="close" type="AntDesign" style={styles.icon} />
            </Button>
            <Title style={styles.title}>Gegevens Verwijderen</Title>
            <Body style={styles.body}>
              Weet je zeker dat je jouw gegevens wilt verwijderen? Wanneer je de
              gegevens hebt verwijdered is er geen mogelijkheid meer om deze
              terug te halen..
            </Body>
            <View>
              <OnboardingButton
                style={styles.button}
                label="Niet verwijderen"
                onPress={closeModal}
                loading={loading}
                disabled={loading}
                full
              />
              <OnboardingButton
                iconName="delete"
                iconType="AntDesign"
                style={[styles.button, styles.removeButton]}
                label="Verwijder mijn gegevens"
                onPress={doDeleteUser}
                loading={loading}
                disabled={loading}
                testid={testIDs.DELETE_DATA.DELETE_DATA_MODAL_BUTTON}
                full
              />
            </View>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 25,
  },
  body: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 5,
    justifyContent: 'center',
  },
  removeButton: {
    backgroundColor: appColors.subtleGrey,
  },
});

DeleteDataModal.propTypes = {
  navigation: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  doDeleteUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DeleteDataModal;
