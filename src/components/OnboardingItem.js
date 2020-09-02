import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/OnboardingButton';
import Title from '../components/typography/Title';
import Body from '../components/typography/Body';
import {appColors} from '../lib/colors';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: appColors.background,
    padding: 15,
  },
  title: {
    fontWeight: '400',
    fontSize: 28,
    color: appColors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  onboardingText: {
    textAlign: 'center',
    color: appColors.subText,
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: appColors.primary,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
});

const OnboardingItem = ({view, buttonAction, isLastItem, navigation}) => {
  const navigator = async () => {
    if (isLastItem) {
      const acceptedPolicy = await AsyncStorage.getItem('@acceptedPolicy');
      if (acceptedPolicy) {
        return navigation.navigate('WelcomeScreen');
      }
      return navigation.navigate('PrivacyPolicyScreen');
    }
    return buttonAction.scrollBy(1);
  };

  return (
    <View style={styles.viewContainer}>
      <View>{view.svg}</View>
      <View>
        <Title style={styles.title}>{view.title}</Title>
        <Body style={styles.onboardingText}>{view.text}</Body>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={navigator}
          label={view.buttonLabel}
        />
      </View>
    </View>
  );
};

OnboardingItem.propTypes = {
  view: PropTypes.object.isRequired,
  buttonAction: PropTypes.object,
  isLastItem: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default OnboardingItem;
