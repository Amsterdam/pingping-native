import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../shared/RoundedButton';
import Title from '../typography/Title';
import Body from '../typography/Body';
import {appColors} from '../../config/colors';
import routes from '../../App/stacks/routes';

const OnboardingItem = ({view, buttonAction, isLastItem, navigation}) => {
  const navigator = async () => {
    if (isLastItem) {
      const acceptedPolicy = await AsyncStorage.getItem('@acceptedPolicy');
      if (acceptedPolicy) {
        return navigation.navigate(routes.onboardingStack.questionScreen);
      }
      return navigation.navigate(routes.onboardingStack.privacyPolicyScreen);
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
      <View>
        <Button
          style={styles.button}
          onPress={navigator}
          testid={view.testid}
          label={view.buttonLabel}
        />
      </View>
    </View>
  );
};

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
  button: {
    backgroundColor: appColors.primary,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
});

OnboardingItem.propTypes = {
  view: PropTypes.object.isRequired,
  buttonAction: PropTypes.object,
  isLastItem: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default OnboardingItem;
