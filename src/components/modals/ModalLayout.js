import React from 'react';

import {Root} from 'native-base';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {appColors} from '../../config/colors';
import IconButton from '../shared/IconButton';

const screenHeight = Dimensions.get('window').height;

const ModalLayout = ({
  children = [],
  closeModal = () => {},
  modalOpen = false,
  image = '',
}) => {
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
        <KeyboardAvoidingView
          behavior="position"
          style={styles.container}
          contentContainerStyle={styles.content}>
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
  content: {flexGrow: 1},
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

ModalLayout.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default ModalLayout;
