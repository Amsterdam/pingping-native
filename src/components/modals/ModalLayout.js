import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {Root} from 'native-base';
import IconButton from '../IconButton';
import {appColors} from '../../config/colors';

const screenHeight = Dimensions.get('window').height;

const RouteQuestionaireModal = ({children, closeModal, modalOpen, image}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalOpen}
      presentationStyle="overFullScreen"
      statusBarTranslucent>
      <StatusBar
        backgroundColor={appColors.headerColor}
        barStyle="light-content"
      />
      <Root>
        <KeyboardAvoidingView behavior="position" style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps={'handled'}>
            <View style={styles.imageContainer}>
              <Image source={image} style={styles.image} />
              <View style={styles.imageOverlay}>
                <IconButton
                  iconName="close"
                  iconType="MaterialIcons"
                  onPress={closeModal}
                  size="L"
                />
              </View>
            </View>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.background,
    flex: 1,
  },
  textContainer: {
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: screenHeight * 0.2,
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
  },
});

RouteQuestionaireModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
};

export default RouteQuestionaireModal;
